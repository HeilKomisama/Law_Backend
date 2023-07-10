import mongoose from "mongoose";

// add the bookmarked laws array later; for now focus on user authentication
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
  }, {timestamps: true}
);

const User = mongoose.model("User", UserSchema);

export default User;