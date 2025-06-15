import { useLocation, Navigate } from "react-router-dom";
import { IsAuth } from "./api";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  if (!IsAuth()) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
