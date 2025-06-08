import User from '../modules/user.model.js'
import bcrypt from "bcryptjs";
import {generateToken} from "../lib/util.js";
import cloudinary from "../lib/cloudinary.js";

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
export const login = async (req, res) => {
    //*res.send("Sign route");
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})
        if (!user) return res.status(400).json({message: 'Invalid Credentials'})
        //possible er because of the missing of suc ha field password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        generateToken(user._id,res);
        res.status(201).json({
            _id:user._id,
            email: user.email,
            profilePic: user.profilePic,


        })
    } catch (error) {
        console.log("Error creating user", error);
        res.status(500).json({message: 'Internal Server Error'})
    }
}
export const logout = (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json("JSON loggen out successfully")
    }catch(Er){
        console.error("Error loging out",Er.message);
        res.status(500).json({message: 'Internal Server Error'})
    }

}
export async function updateProfile(req,res) {
try{
const {profPic} = req.body;
const userId = req.user._id;
if(!profPic){
return res.status(400).json({message: "Profile pic is required"});
}
    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secureUrl}, {new:true})
    res.status(200).json(updatedUser)
}catch (error) {
console.log("error in update profile", error);
res.status(500).json({message:"Internal Server Error"})
}
}
