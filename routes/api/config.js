const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../../models/User");
const Email = require("../../models/Email");
const Url = require("../../models/Url");
const Device = require("../../models/Device");

// @route GET api/profile
//desc Profile Route
// @access Public
router.post("/", async (req, res) => {
	const { userId } = req.body;

	try {
		
		// verifying validity of provided userId and populating
		console.log("INSIDE BACKEND....", userId)
		let user = await User.findById(userId);
		// .populate("addedEmails")
		// .populate("addedDevices")
		// .populate("addedUrls");
		// .exec(function (err, resul) {
		// 	if (err) return handleError(err);
		// });
		// console.log("POPULATE USERRR_______", user);

		if (!user) {
			return res.json({
				success: false,
				message: "Invalid User",
			});
		}

		// collecting user's all config details and sending
		let userEmails = await Email.find({ user: userId });
		let userDevices = await Device.find({ user: userId });
		let userUrls = await Url.find({ user: userId });
		console.log("DETAILD_", userEmails, userUrls, userDevices)
		res.status(200).json({ success: true, userEmails, userDevices, userUrls });
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Some error occurred");
	}
});

router.post(
	"/add-emails",
	// validation
	[check("email", "email needs to be vlaid").isEmail()],
	async (req, res) => {
		// handling validation error
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, userId } = req.body;

		try {
			// finding the user with UserID
			let user = await User.findById(userId);

			if (!user) {
				return res.json({
					success: false,
					message: "Invalid User",
				});
			}

			// creating and adding the new email in table
			let emailToAdd = new Email({
				user: userId,
				email: email,
			});

			// saving emails in database and adding it to user
			let addedEmail = await emailToAdd.save();
			user.addedEmails.push(addedEmail._id);
			user = await user.save();
			console.log("EMAIL ADDED USER------", user);
			res.status(200).json({ success: true, userEmails:addedEmail });
		} catch (err) {
			console.log(err.message);
			res.status(500).send("Server error");
		}
	}
);

router.post("/add-urls", async (req, res) => {
	const { url, userId } = req.body;

	try {
		// finding the user with UserID
		let user = await User.findById(userId);

		if (!user) {
			return res.json({
				success: false,
				message: "Invalid User",
			});
		}
		// creating and adding the new url/ip in table
		let urlToAdd = new Url({
			user: userId,
			url,
		});

		// saving url in database and adding it to user
		let addedUrl = await urlToAdd.save();
		user.addedUrls.push(addedUrl._id);
		user = await user.save();
		console.log("URL ADDED USER------", user);
		res.status(200).json({ success: true, userUrls:addedUrl });
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
});

router.post("/add-devices", async (req, res) => {
	const {
		userId,
		deviceName,
		port,
		ipAddress,
		macAddress,
		password,
	} = req.body;

	try {
		// finding the user with userID
		let user = await User.findById(userId);

		if (!user) {
			return res.json({
				success: false,
				message: "Invalid User",
			});
		}
		// creating and adding the new device in table
		let deviceToAdd = new Device({
			user: userId,
			deviceName,
			port,
			ipAddress,
			macAddress,
			password,
		});

		// saving device in database and adding it to user
		let addedDevice = await deviceToAdd.save();
		user.addedDevices.push(addedDevice._id);
		user = await user.save();
		console.log("DEVICE ADDED USER------", user);
		res.status(200).json({ success: true, userDevices:addedDevice });
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
