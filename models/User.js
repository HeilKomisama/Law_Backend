import mongoose from "mongoose";

// add the bookmarked laws array later; for now focus on user authentication
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    }
  }, {timestamps: true}
);

const User = mongoose.model("User", UserSchema);

export default User;