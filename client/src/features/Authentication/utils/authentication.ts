import { redirect } from "@tanstack/react-router";
import { refreshUser } from "../services/authServices";

async function isAuthenticated() {
  const cookie = document.cookie.startsWith("logged_in");
  console.log(cookie);
  console.log(typeof cookie);

  if (cookie) {
    return true;
  }
  await refreshUser();
  if (getAuthCoockie()) {
    return true;
  }
  throw redirect({
    to: "/login",
  });
}
function getAuthCoockie() {
  const cookie = document.cookie.startsWith("logged_in");
  return cookie;
}
export { isAuthenticated };
