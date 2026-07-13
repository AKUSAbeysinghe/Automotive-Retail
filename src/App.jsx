import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Dealership from "./components/Pages/Dealership.jsx";
import AutoParts from "./components/Pages/AutoParts.jsx";
import Accessories from "./components/Pages/Accessories.jsx";

import Press from "./components/Pages/Press.jsx";
import Careers from "./components/Pages/Careers.jsx";

import Footer from "./components/Footer";


import PrivacyPolicy from "./components/Pages/Privacy";
import TermsOfService from "./components/Pages/Terms.jsx";
import FAQ from "./components/Pages/FAQ.jsx";

import Contact from "./components/Pages/Contact.jsx";

// Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";

import ScrollToTop from "./components/ScrollToTop.jsx";

function Layout({ children }) {
  const location = useLocation();

  const hideLayout = ["/login", "/signup", "/admin", "/admin-lookbook"].includes(
    location.pathname
  );

  return (
    <div className="bg-[#fcf8f3] text-black font-sans min-h-screen flex flex-col">
      <ScrollToTop />

      {/* NAVBAR */}
      {!hideLayout && (
        <div className="flex-shrink-0">
          <Navbar />
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1">
        {children}
      </div>

      {/* FOOTER */}
      {!hideLayout && (
        <div className="flex-shrink-0">
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/Dealership" element={<Layout><Dealership /></Layout>} />
        <Route path="/AutoParts" element={<Layout><AutoParts/></Layout>} />
        <Route path="/Accessories" element={<Layout><Accessories/></Layout>} />
       
        <Route path="/press" element={<Layout><Press/></Layout>} />
          <Route path="/careers" element={<Layout><Careers/></Layout>} />
        <Route
          path="/privacy-policy"
          element={<Layout><PrivacyPolicy /></Layout>}
        />
        <Route
          path="/terms-of-service"
          element={<Layout><TermsOfService /></Layout>}
        />
        <Route path="/FAQ" element={<Layout><FAQ /></Layout>} />
       
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* Admin Routes */}
        <Route path="/signup" element={<Layout><SignUp /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/admin" element={<Layout><AdminPanel /></Layout>} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Layout>
              <div className="text-center py-12">
                404: Page Not Found
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;