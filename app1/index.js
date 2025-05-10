// app1/index.js
const express = require("express");
const app = express();
const path = require("path");
app.get("/", (req, res) => {
  const token = req.query.token;
  console.log("token", token);
  if (!token) {
    // redirect ไป login
    return res.redirect(
      "http://localhost:9000/check?redirect_uri=http://localhost:8080"
    );
  }
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => {
  console.log("App1 running at http://localhost:8080");
});
