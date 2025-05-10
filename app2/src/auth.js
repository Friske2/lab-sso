//**  check user authentication
let TOKEN = sessionStorage.getItem("token");
const params = new URLSearchParams(window.location.search);
const TOKEN_URI = params.get("token");
const pathName = window.location.pathname;
console.log("uri", TOKEN_URI);
const checkHasSession = () => {
  //   console.log("redirect_uri", redirect_uri);
  return fetch(`http://localhost:9000/check-session`, {
    method: "GET",
    credentials: "include",
  }).then((response) => {
    console.log("response", response);
    return response;
  });
};
(async () => {
  const redirect_uri = window.location.href;
  const res = await checkHasSession();

  //   console.log("res", res);
  if (res.status === 401) {
    window.location.href = `http://localhost:9000?redirect_uri=${redirect_uri}`;
  }
  console.log("res", res);
  //   if (res.status === 200) {
  //     TOKEN = res.token;
  //     sessionStorage.setItem("token", TOKEN);
  //   } else {
  //     console.log("RES", res);
  //     // window.location.href = "/401";
  //   }
})();
// if (!TOKEN) {
//   // redirect to login page
// } else {
//   //
// }
