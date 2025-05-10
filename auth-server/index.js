const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
var cors = require("cors");
// allowed origin for cors
app.use(
  cors({
    origin: ["http://localhost:8080", "http://localhost:8081"], // ให้สิทธิ์ origin ที่จะเรียก
    credentials: true, // ✅ สำคัญมาก: อนุญาตให้ส่ง cookie
  })
);
app.use(cookieParser());

app.post("/login", (req, res) => {
  const { redirect_uri } = req.query;
  console.log("redirect_uri", redirect_uri);
  // mock session creation
  const randonmSessionId = Math.random().toString(36).substring(2, 15);
  if (!req.cookies.session_id) {
    res.cookie("session_id", randonmSessionId, {
      httpOnly: true,
      sameSite: "Lax",
    });
  }

  res.json({
    message: "Login successful",
    token: "mock-jwt-token",
  });
});

app.get("/check", (req, res) => {
  const { session_id } = req.cookies;
  const { redirect_uri } = req.query;
  if (session_id) {
    res.redirect(`${redirect_uri}?token=mock-jwt-token`);
  } else {
    res.redirect("/");
  }
});

app.get("/check-session", (req, res) => {
  const { session_id } = req.cookies;
  console.log("session_id", session_id);
  // const { redirect_uri } = req.query;
  if (session_id) {
    res.status(200).json({
      message: "Session is valid",
      session_id,
    });
  } else {
    res.status(401).json({
      message: "Session is invalid",
      redirect_uri: "http://localhost:9000",
    });
    // res.redirect("/");
  }
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// ✅ [ใหม่] logout
app.get("/logout", (req, res) => {
  const { redirect_uri } = req.query;

  // clear cookie
  res.clearCookie("session_id", {
    httpOnly: true,
    sameSite: "Lax",
  });

  // redirect ไปที่ /unAuth
  res.redirect(redirect_uri || "/");
});

app.get("/401", (req, res) => {
  res
    .status(401)
    .send(`<h1>401 Unauthorized</h1><p>Session expired or not logged in.</p>`);
});
app.listen(9000, () => {
  console.log("Auth server running on http://localhost:9000");
});
