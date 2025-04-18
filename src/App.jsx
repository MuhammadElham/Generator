import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import CompanyProducts from "./pages/CompanyProducts";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <NavBar />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/company/:companyId" element={<CompanyProducts/>}></Route>
          <Route path="/product/:companyId/:productId" element={<ProductDetails />}></Route>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
