/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import mark from "../../../public/assets/mark.png";

const Sidebar = ({ openClass }: any) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key: string) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass} `}
      >
        <PerfectScrollbar className="mobile-header-wrapper-inner w-4/5 sm:w-full">
          <div className="mobile-header-top">
            <div className="user-account">
              <img alt="logo" src={mark.src} style={{ width: 30 }}></img>
              <div className="content ml-6">
                <h6 className="user-name">
                  Hi from <span className="text-brand">Ngnir !</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/service">Services</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default Sidebar;
