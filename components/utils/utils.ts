import Cookies from "js-cookie";

function getToken() {
  return Cookies.get("userToken");
}

function clearCookies() {
  const cookieKeys = Object.keys(Cookies.get());

  cookieKeys.forEach((key) => {
    Cookies.remove(key);
  });
}

export { getToken, clearCookies };
