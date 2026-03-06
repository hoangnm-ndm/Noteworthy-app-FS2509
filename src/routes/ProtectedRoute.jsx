import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ redirectTo = "/login" }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
