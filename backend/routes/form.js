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

//Route 3: Update an existing Form using: PUT "/api/form/updateform/:id". Login required
router.put("/updateform/:id", fetchuser, async (req, res) => {
  const { subject, message } = req.body;
  try {
    //Create a newForm Object
    const newForm = {};
    if (subject) {
      newForm.subject = subject;
    }
    if (message) {
      newForm.message = message;
    }

    //Find the form to be udpated and update it
    let form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).send("Not Found");
    }

    if (form.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    form = await Form.findByIdAndUpdate(
      req.params.id,
      { $set: newForm },
      { new: true }
    );
    res.json(form);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 4: Delete an existing Form using: DELETE "/api/form/deleteform/:id". Login required
router.delete("/deleteform/:id", fetchuser, async (req, res) => {
  try {
    //Find the form to be deleted and delete it
    let form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).send("Not Found");
    }
    //Allow deletion only if user owns this form
    if (form.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    form = await Form.findByIdAndDelete(req.params.id);
    res.json({ Success: "Form has been deleted", form: form });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
