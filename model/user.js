import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    bday: {
      type: String,
      required: true,
    },
    followers: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    town: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
