import jwt from 'jsonwebtoken';
import User from "../modules/user.model.js";


export const protectRoute = async (req, res,next) => {
      try{
          const token = req.cookies.jwt
          if(!token){
              return res.status(401).json({message:"No token provided "});
          }
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          if(!decoded.user){
              return res.status(401).json({message:"error.."});
          }
          const user = await User.findById(decoded.user.id).select("-password");
          if(!user){
              return res.status(404).json({message:"User not found."});
          }
          //if user is authenticated, add user to the request
          req.user = user;
          //cal the next()
          next();


      } catch(error){
        console.log("Error in protectRoute", error,message);
        res.status(500).json({message:"Email server error.."});
      }
}