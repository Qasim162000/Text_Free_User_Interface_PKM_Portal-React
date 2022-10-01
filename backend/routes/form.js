const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Form = require("../models/Form");
const { body, validationResult } = require("express-validator");

//Route 1: Get All the Forms using: GET "/api/auth/getuser". Login required
router.get("/fetchallforms", fetchuser, async (req, res) => {
  try {
    const forms = await Form.find({ user: req.user.id });
    res.json(forms);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2: Add a new Form using: POST "/api/auth/addform". Login required
router.post(
  "/addform",
  fetchuser,
  [
    // Validation Check
    body("subject", "Subject must be atleast 5 characters").isLength({
      min: 5,
    }),
    body("message", "Message must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { subject, message } = req.body;
      //Check for errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const form = new Form({
        subject,
        message,
        user: req.user.id,
      });
      const savedForm = await form.save();

      res.json(savedForm);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
