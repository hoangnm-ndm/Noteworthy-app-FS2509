import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
