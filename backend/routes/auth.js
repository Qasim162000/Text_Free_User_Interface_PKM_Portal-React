const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
var jwt = require("jsonwebtoken");

const JWT_SECRET = "Pkmportal@punjabpolice";
//Route 1: Create a user using: POST "/api/auth/createuser". No Login required
router.post(
  "/createuser",
  [
    // Validation Check
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //Check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check wether a user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email exists already" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured");
    }
  },

  //Route 2: Authenticate a user using: POST "/api/auth/login". No Login required
  router.post(
    "/login",
    [
      // Validation Check
      body("email", "Enter a valid email").isEmail(),
      body("password", "Password cannot be blank").exists(),
    ],
    async (req, res) => {
      //Check for errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;
      try {
        let user = await User.findOne({ email });
        if (!user) {
          return res
            .status(400)
            .json({ error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
          return res
            .status(400)
            .json({ error: "Please try to login with correct credentials" });
        }

        const data = {
          user: {
            id: user.id,
          },
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
      }
    }
  )
);

module.exports = router;
