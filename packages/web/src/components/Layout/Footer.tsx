/* eslint-disable @next/next/no-img-element */
import logo from "../../../public/assets/logo.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer mt-50">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-4 col-sm-6 text-center ">
                <Link href="/contact">
                  <div>
                    <img
                      alt="logo"
                      src={logo.src}
                      style={{ maxWidth: 140 }}
                    ></img>
                  </div>
                </Link>
              </div>
              <div className="col-md-8 col-sm-6 text-center text-md-end">
                <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">
                  Ready to get started?
                </span>
                <Link href="/contact">
                  <a className="btn btn-square">Let&apos;s talk</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-md-6">
                <span className="color-gray-400 text-body-lead">
                  © Agon Official 2022
                </span>
                <Link href="/page-terms">
                  <a className="text-body-text color-gray-400 ml-50">
                    Privacy policy
                  </a>
                </Link>
                <Link href="/page-terms">
                  <a className="text-body-text color-gray-400 ml-50">Cookies</a>
                </Link>
                <Link href="/page-terms">
                  <a className="text-body-text color-gray-400 ml-50">
                    Terms of service
                  </a>
                </Link>
              </div>
              <div className="col-md-6 text-center text-lg-end text-md-end">
                <div className="footer-social">
                  <Link href="https://facebook.com">
                    <a className="icon-socials icon-facebook"></a>
                  </Link>
                  <Link href="https://twitter.com">
                    <a className="icon-socials icon-twitter"></a>
                  </Link>
                  <Link href="https://www.instagram.com">
                    <a className="icon-socials icon-instagram"></a>
                  </Link>
                  <Link href="https://www.linkedin.com">
                    <a className="icon-socials icon-linkedin"></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
