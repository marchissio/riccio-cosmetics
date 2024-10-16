import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import Wishlist from "./pages/WishlistPage";
import FooterInfo from "./components/FooterInfo";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/pages" element={<Pages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <FooterInfo />
            <Footer />
        </Router>
    );
};

export default App;
