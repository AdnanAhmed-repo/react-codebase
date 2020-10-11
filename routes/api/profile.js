const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const auth = require("../../middleware/auth");

// @route GET api/profile
//desc Profile Route
// @access Public
router.get('/profileUser/:userId', async(req, res) => { 
     try {
      const { userId } = req.params;
      console.log("User ID========",userId)
      const user = await User.findOne({ _id: userId });
      console.log("user id ======",user)
      if (!user)
        res.status(400).json({ message: "No any user have registerd yet" });
      return res.status(200).json({ message: user });
    } catch (err) {
      console.log("Error in getuserById", err.message);
      res.status(500).json({ message: `Error in  getuserById${err.message}` });
    }

}
);
module.exports = router;