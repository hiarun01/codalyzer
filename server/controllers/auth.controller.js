import axios from "axios";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import {oauth2Client} from "../utils/googleConfig.js";

export const googleAuth = async (req, res) => {
  try {
    const {code} = req.query;
    const googleResponse = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(googleResponse.tokens);
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`
    );
    const {email, name, picture} = userRes.data;
    let user = await User.findOne({email});
    if (!user) {
      user = await User.create({email, name, picture});
    }
    const {_id} = user;
    const token = jwt.sign({_id, email}, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(200).json({
      message: "success",
      user,
      token,
    });
  } catch (error) {
    console.log("Google Auth Error:", error);
    return res.status(500).json({error: "Internal Server Error"});
  }
};
