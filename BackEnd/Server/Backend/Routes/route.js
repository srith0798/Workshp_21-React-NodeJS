const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
// const { aboutMe, contactMe } = require("../routeControllers/logController");
// const cors = require("cors");
const router = express.Router();
const userLog = require("../Model/userModel");
const { findOne } = require("../Model/userModel");

router.get("/", (req, res) => {
  res.send("Home");
});

// SignUp Route
router.post("/signUp", async (req, res) => {
  const { name, email, password, rePassword } = req.body;
  if (!name || !email || !password || !rePassword) {
    res.status(422).json({ statusCode: 422, error: "* Necessary !" });
  }
  if (password !== rePassword) {
    res
      .status(422)
      .json({ statusCode: 401, error: "* Password did'nt match !" });
  }
  try {
    const userExist = await userLog.findOne({ email });
    if (userExist) {
      return res.status(422).json({ statusCode: 422, error: "Email exists" });
    }
    const userAdd = new userLog({ name, email, password, rePassword });
    const responseAdd = await userAdd.save();
    if (responseAdd) {
      res.status(201).json({ statusCode: 201, msg: "Success" });
    } else {
      res.status(500).json({ statusCode: 500, error: "Sorry Try again!" });
    }
  } catch (error) {
    console.log(error);
  }
});

// loginRoute

router.post("/", async (req, res) => {
  const { userMail, userPassword } = req.body;
  if (!userMail || !userPassword) {
    res.status(422).json({ statusCode: 422, error: "* Necessary!" });
  }
  try {
    const auth = await userLog.findOne({ email: userMail });
    // console.log(auth);
    if (!auth) {
      res.status(400).json({ statusCode: 400, error: "Please Signup ..!" });
    }
    const token = await auth.generateAuthToken();

    // console.log(token);
    const { password } = auth;
    const isMatch = await bcrypt.compare(userPassword, password);
    if (isMatch)
      res.status(201).json({
        statusCode: 201,
        tokenId: token,
        user: auth,
        msg: "Login Success",
      });
    else
      res.status(402).json({ statusCode: 402, error: "Invalid Credentials" });
  } catch (err) {
    console.log(`sorry! got an Error at: ${err}`);
  }
});

// router.get('/home',async (req,res)=>{
//   const user = await userLog.findOne({ email: userMail })
//   res.send(user)
// })

module.exports = router;
