import { useAuth } from "../hooks/authHookProvider";
import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Router() {

  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}