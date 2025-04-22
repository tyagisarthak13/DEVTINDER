import express from "express";
import { userAuth } from "../middlewares/auth.js";
import { validateEditProfileData } from "../utils/validation.js";
import { User } from "../models/user.js";

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }

    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName} your profile was updated successfully`,
      data: loggedInUser,
    });
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
});

profileRouter.patch("/profile/password", async (req, res) => {
  try {
    const { emailId } = req.body;

    const user = await User.findOne({ emailId: emailId });
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
});

export default profileRouter;
