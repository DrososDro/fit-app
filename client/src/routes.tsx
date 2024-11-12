import { createRootRoute } from "@tanstack/react-router";
import { authRoutes } from "./features/Authentication/routes/authRoutes";

export const rootRoute = createRootRoute();

export const routeTree = rootRoute.addChildren([...authRoutes]);
