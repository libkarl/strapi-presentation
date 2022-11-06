/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../../../public/assets/logo.svg";

type HeaderProps = {
  handleOpen: () => void;
  headerStyle: string;
};

const Header = (props: HeaderProps) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  const router = useRouter();
  return (
    <>
      <header
        className={
          scroll
            ? `${props.headerStyle} header sticky-bar stick `
            : `${props.headerStyle} header sticky-bar`
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/">
                  <a className="d-flex">
                    <img
                      alt="logo"
                      src={logo.src}
                      style={{ minWidth: 120 }}
                    ></img>
                  </a>
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <Link href="/homepage">Home</Link>
                    </li>
                    <li>
                      <a onClick={() => router.push("/about")}>About</a>
                    </li>
                    <li>
                      <Link href="/service">
                        <a>Services</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/blog-archive">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className="burger-icon burger-icon-white"
                  onClick={props.handleOpen}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
