const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001 || process.env.PORT;
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
require("dotenv").config();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	type: 'OAuth2',
	auth: 
		{
			type: 'OAuth2',
			user: "aguirreh8@gmail.com",
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			refreshToken: process.env.GOOGLE_REFRESH_TOKEN
		}
	
});

app.post("/sendMail", function(req, res) {
	const mailOptions = {
		from: `${req.body.name} <${req.body.email}>`,
		to: "aguirreh8@gmail.com",
		subject: req.body.subject,
		text: req.body.message
	}

	transporter.sendMail(mailOptions, function(err, res) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Email sent");
		}
	})
});

app.listen(PORT, function() {
	console.log(`🌎 ==> Server now on port ${PORT}!`);
});