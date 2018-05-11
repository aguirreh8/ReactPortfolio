const express = require("express");

const app = express();
const PORT = 3001 || process.env.PORT;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, function() {
	console.log(`🌎 ==> Server now on port ${PORT}!`);
})