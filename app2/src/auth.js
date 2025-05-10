console.log("auth.js loaded");

//**  check user authentication     
let TOKEN = sessionStorage.getItem("token");
const params = new URLSearchParams(window.location.search);
const TOKEN_URI = params.get("token");
const pathName = window.location.pathname;
console.log("uri", TOKEN_URI);
if (!TOKEN) {
    // redirect to login page
} else {
    // 
}


