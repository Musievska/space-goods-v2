import "./App.css";
import "tailwindcss/tailwind.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Footer } from "./components/Footer";
import { MainLayout } from "./ui/MainLayout";
import { ProductId } from "./pages/ProductId";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
        <NavBar />
        <ToastContainer position="top-right" />
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
          <Route
            path="/products/:id"
            element={
              <MainLayout>
                <ProductId />
              </MainLayout>
            }
          />
          <Route
            path="/cart"
            element={
              <MainLayout>
                <Cart />
              </MainLayout>
            }
          />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
