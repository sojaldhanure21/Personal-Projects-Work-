import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
