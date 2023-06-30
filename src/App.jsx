import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Product from "./Pages/Product";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import ProductDetials from "./Pages/ProductDetiails";
import Bag from "./Pages/Bag";
import NoPage from "./Pages/NoPage";
import Termsofservice from "./Pages/Termsofservice";
import Shippingpolicy from "./Pages/Shippingpolicy";
import Refundpolicy from "./Pages/Refundpolicy";
import {StateContext} from "../context/StateContext";
import SingalBlog from "./Pages/SingalBlog";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <StateContext>
    <BrowserRouter>
      <NavBar />
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NoPage />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/:slug" element={<ProductDetials />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="/Blogs/:slug" element={<SingalBlog />} />
        <Route path="About" element={<About />} />
        <Route path="Bag" element={<Bag />} />
        <Route path="Termsofservice" element={<Termsofservice />} />
        <Route path="Shippingpolicy" element={<Shippingpolicy />} />
        <Route path="Refundpolicy" element={<Refundpolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </StateContext>
  );
}

export default App;
