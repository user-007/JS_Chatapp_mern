import User from "../models/user.model.js"
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
    const {fullName, req, password} = req.body;

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
            if (!newUser) return res.status(400).json({message: 'User not found'})
        }
    } catch (error) {

    }
    res.send("sign up");
}
export const login = (req,res)=>{
    res.send("Sign route");
}
export const logout = (req,res)=>{
    res.send("Sign route");
}