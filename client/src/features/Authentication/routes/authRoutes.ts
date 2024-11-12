import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../../../routes";
import LoginReg from "../pages/LoginReg";

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginReg,
});
const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: () => LoginReg({ isRegister: true }),
});

export const authRoutes = [loginRoute, registerRoute];
