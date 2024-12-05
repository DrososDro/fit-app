import { createRootRoute, createRoute } from "@tanstack/react-router";
import { authRoutes } from "./features/Authentication/routes/authRoutes";
import Text from "./features/Text";

export const rootRoute = createRootRoute();

export const calRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cal",
  component: Text,
});

export const routeTree = rootRoute.addChildren([...authRoutes, calRoute]);
