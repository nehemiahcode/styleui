"use client";
import Footer from "./Footer";
import Nav from "./Navbar";

export default function Layout({ children, style }) {
  return (
    <>
      <Nav style={style} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
