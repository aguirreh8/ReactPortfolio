const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001 || process.env.PORT;
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		xoauth2: xoauth2.createXOAuth2Generator({
			user: "aguirreh8@gmail.com",
			clientId: "",
			clientSecret: "",
			refreshToken: ""
		})
	}
})

app.post("/sendMail", function(req, res) {
	const mailOptions = {
		from: req.body.name

	}
})

app.listen(PORT, function() {
	console.log(`🌎 ==> Server now on port ${PORT}!`);
})