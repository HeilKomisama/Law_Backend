// register controller
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import User from "../models/User.js";

// REGISTER USER
export const register = async (req, res) => {
  try {
    const {
      email,
      username,
      password,
    } = req.body;

    const salt = await bcrypt.genSalt(); 
    const passwordHash = await bcrypt.hash(password, salt); 

    const newUser = new User({
      username,
      password: passwordHash, // the hashed password is stored (not the plain text password)
      email,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); // 'something has been created'
  } catch (err) {
    res.status(500).json({ error: err.message }); // 'server error'
  }
}

// LOGIN USER
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email: email });
//     if (!user) return res.status(400).json({ msg: "No account with this email has been registered." });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); 
//     delete user.password;
//     res.status(200).json({ token, user});
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

