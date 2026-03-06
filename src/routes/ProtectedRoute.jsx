import { Navigate } from "react-router";

const ProtectedRoute = ({
  children,
  isAuthenticated,
  redirectTo = "/login",
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
