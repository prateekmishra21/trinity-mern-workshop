const mongoose = require("mongoose");

/**
 * User
 * Hotal -Res
 * food
 */

const UserSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    password: String,
    mobile: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

const ResSchema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    name: String,
    address: String,
    city: String,
    mobile: String,
  },
  { timestamps: true }
);

const Res = mongoose.model("Res", ResSchema);

const FoodSchema = new mongoose.Schema(
  {
    res: { type: mongoose.SchemaTypes.ObjectId, ref: "Res" },
    name: String,
    type: String,
    q: Number,
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", FoodSchema);

module.exports = { Food, User, Res };
