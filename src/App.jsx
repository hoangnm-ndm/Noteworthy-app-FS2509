import { ToastContainer } from "react-toastify";
import AppRouter from "./routes";

export default function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
}
