import { redirect } from "@tanstack/react-router";
import { LoginType, RegisterType } from "../types/authTypes";

async function loginUser(data: LoginType | RegisterType) {
  try {
    const response = await fetch("/api/auth/login/", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(`Email or Password Doens't Match`);
      }
      if (response.status >= 500) {
        throw new Error(
          "Pls Contact the Administrator something is going very wrong!",
        );
      }
      throw new Error(`${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      console.error("loginUser Unexpected Error:", error);
    }
  }
}

async function refreshUser() {
  try {
    const response = await fetch("api/auth/refresh/", {
      method: "post",
    });
    if (!response.ok) {
      const error = await response.json();
      console.log("!response.ok");
      if (response.status === 400) {
        console.log("!response.ok");
        if (error?.refresh && error.refresh[0] === "This field is required.") {
          return false;
          throw redirect({
            to: "/login",
          });
        }
      }

      throw new Error(`${response.status}`);
    }
    const json = await response.json();
    if (json.message === "Access tokens refresh successfully") {
      return true;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log("refresh error", error.message);
    }
  }
}

export { loginUser, refreshUser };
