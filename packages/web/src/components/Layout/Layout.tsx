import { useState } from "react";
import BackToTopp from "../Elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Head from "next/head";

const Layout = ({ children, headerStyle }: any) => {
  const [openClass, setOpenClass] = useState("");

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };
  return (
    <>
      <Head>
        <title>ngnir</title>
        <link rel="icon" href="/mark.ico" />
      </Head>
      <div className={openClass && "body-overlay-1"} onClick={handleRemove} />

      <Header handleOpen={handleOpen} headerStyle={headerStyle} />
      <Sidebar openClass={openClass} />
      <main className="main">{children}</main>
      <BackToTopp />
      <Footer />
    </>
  );
};

export default Layout;
