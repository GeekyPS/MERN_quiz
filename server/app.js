const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const userInfo = require("./userDetails");

const JWT_SECRET =
  "hrwli4eo787y32o8uqr9[(kwhdaafwdkkhvf()fheiwdjsvd[]kjwdcjh{}";
const MONGOURL =
  "mongodb+srv://Priyanshu:IzdQ46dZ1KramfQC@cluster0.0ydw6sl.mongodb.net/Quiz?retryWrites=true&w=majority";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({ error: "BAD_REQUEST" });
  }
  const user = await userInfo.findOne({ email: email }).exec();
  if (!user) {
    res.status(401).send({
      error: "user_not_found",
    });
  }

  let passwordCorrect = await bcrypt.compare(password, user.password);

  if (passwordCorrect) {
    const token = jwt.sign({}, JWT_SECRET);
    res.status(201).send({ status: "ok", data: token });
  } else {
    res.status(401).send({
      error: "password_incorrect",
    });
  }
});

app.post("/register", async (req, res, next) => {
  const { fname, lname, email, password } = req.body;

  if (!fname || !lname || !email || !password) {
    res.status(400).send({ error: "BAD_REQUEST" });
  }
  const olduser = await userInfo.findOne({ email: email }).exec();

  if (olduser) {
    res.status(409).send({
      error: "user_already_exists",
    });
  }
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const userData = new userInfo({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });
    await userData.save();
    res.status(201).send({ status: "ok" });
  } catch (error) {
    res.status(404).send({ status: "error" });
  }
});

mongoose.set({ strictQuery: false });
mongoose
  .connect(MONGOURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database");

    app.listen(7800, () => {
      console.log("running at port 7800");
    });
  })
  .catch((e) => console.log(e));
