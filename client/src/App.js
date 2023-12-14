import "./App.css";
import "tailwindcss/tailwind.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./i18n";

import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Footer } from "./components/Footer";
import { MainLayout } from "./ui/MainLayout";
import { ProductId } from "./pages/ProductId";
import { Cart } from "./pages/Cart";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { ImageUpload } from "./pages/ImageUpload";
import { Gallery } from "./pages/Gallery";
import { AuthProvider } from "./context/authContext"; 

function App() {
  return (
    <AuthProvider>
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
        <Route
          path="/sign-up"
          element={
            <MainLayout>
              <SignUp />
            </MainLayout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <MainLayout>
              <SignIn />
            </MainLayout>
          }
        />
        <Route
          path="/image-upload"
          element={
            <MainLayout>
              <ImageUpload />
            </MainLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <MainLayout>
              <Gallery />
            </MainLayout>
          }
        />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
