"use client";
import Footer from "./Footer";
import Nav from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
