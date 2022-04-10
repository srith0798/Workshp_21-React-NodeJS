const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rePassword: {
    type: String,
    required: true,
  },
  // tokens: [
  //   {
  //     token: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
});

//Hash Crypt
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.rePassword = this.password;
  }
  next();
});

// Jwt Token

userSchema.methods.generateAuthToken = async function () {
  // console.log("token");
  try {
    const tokenId = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    // this.tokens = this.tokens.concat({ token: tokenId });
    // await this.save();
    return tokenId;
  } catch (err) {
    console.log(err);
  }
};

const userLog = mongoose.model("USER", userSchema);

module.exports = userLog;
