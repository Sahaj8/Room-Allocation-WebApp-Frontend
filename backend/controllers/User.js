import { User } from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
// const bcrypt = require('bcryptjs')

export const getUser = async (req, res) => {
    let token
    console.log("inside getuser");
    // return res.json({msg:"we are inside"});

    if ( req.header("Authorization") ) {
        try {
            // Get token from header
            token = req.header("Authorization");

            // Verify token
            const decoded = jwt.verify(token, 'secret12345')

            // Get user from the token
            let userdata = await User.findById(decoded.id);
            console.log(userdata);
            res.status(201).send({user:userdata});
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    else {
        res.status(401).send("No token!");
        // throw new Error('Not authorized, no token')
    }
    // res.send('It works');
}

export const addUser = async (req, res) => {
    // res.send('It works');
    const username = req.body.username;
    const usermail = req.body.usermail;
    const password = req.body.password;
    const description = req.body.description;
    const isAdmin = req.body.isAdmin;

    if (!username || !usermail || !password) {
        res.status(400)
        throw new Error('Please add all fields')
      }
    
      // Check if user exists
      const userExists = await User.findOne({ email })
    
      if (userExists) {
        res.status(400)
        throw new Error('User already exists')
      }
    
      // Hash password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
    

    const newUser = new User({username,usermail,hashedPassword,description,isAdmin});

    newUser.save()
        .then(() => res.json({msg:'User added!',newUser}))
        .catch(err => res.status(400).json('Error: ' + err));
}

export const deleteUser = (req, res) => {
    res.send('It works');
}

export const loginUser = async (req, res) => {
    const { username, useremail, password } = req.body
  
    // Check for user email
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash("Sahaj", salt)
    console.log("hash: ");
    console.log(hashedPassword);
    const user = await User.findOne({ useremail:useremail })
    console.log(user._id);
    if (user && (await bcrypt.compare(password, user.password))) {
        const payload = { id: user._id };
        const token = jwt.sign(payload, 'secret12345', {
        expiresIn: "1d",
        });
        res.send({
            _id: user.id,
            username: user.username,
            useremail: user.useremail,
            token: token,
        })
    } else {
      res.status(400).send("No user found");
    //   throw new Error('Invalid credentials')
    }
}

const generateToken = (id) => {
    return jwt.sign({ id:id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
}