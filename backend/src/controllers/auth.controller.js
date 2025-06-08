import User from "../modules/user.model.js"
import bcrypt from "bcryptjs";
import {generateToken} from "../lib/util.js";
export const signup = async (req, res) => {
    const {fullName, reqt, password} = req.body;

    try {
        if (password.length < 6) {
            return res.status(400).json({
                message: 'Password must be at least 6 characters',
            })
            const user = await User.findOne({email})
            if (!user) return res.status(400).json({message: 'Email already exists'})
            const salt = bcrypt.genSalt(10);
            //await only in async function
            const hashedPassword = await bcrypt.hash(password, salt)
            //1234567=>824jhfjsdhfj
            const newUser = new User({
                fullName,
                email,
                password:hashedPassword,
            })
            if (newUser) {
                generateToken(newUser._id,res)
                await newUser.save();
                res.status(201).json({
                    _id: newUser._id,
                    email: newUser.email,
                    profilePic: newUser.profilePic,
                });
            }
            else{
                res.status(401).json({
                    message: 'Invalid Credentials',
                })
            }
        }
    } catch (error) {
        console.log("Error creating user", error),
        res.status(500).json({message: 'Internal Server Error'})
    }
    res.send("sign up");
}
export const login = (req,res)=>{
    res.send("Sign route");
}
export const logout = (req,res)=>{
    res.send("Sign route");
}