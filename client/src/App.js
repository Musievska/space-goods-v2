import "./App.css";
import "tailwindcss/tailwind.css";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Footer } from "./components/Footer";
import { MainLayout } from "./ui/MainLayout";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
