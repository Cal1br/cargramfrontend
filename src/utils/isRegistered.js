import cookieCutter from "cookie-cutter";
function isRegistered() {
  const token = cookieCutter.get("token");
  if (token == null) {
    return false;
  } else {
    return true;
  }
}
export default isRegistered;
