/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import OfferSlider from "../components/Offer";

function Service2() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero bg-service-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 box-banner-left">
                  <h1 className="text-display-3 mt-30">
                    Building the Work Ecosystem
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Connect your conversations with the tools and services
                    <br className="d-lg-block d-none" />
                    that you use to get the job done. With over 1,500 apps
                    <br className="d-lg-block d-none" />
                    and a robust API
                  </p>
                  <div className="mt-40">
                    <Link href="/page-about-1">
                      <a className="btn btn-black shape-square icon-arrow-right-white">
                        Get Started
                      </a>
                    </Link>

                    <Link href="/page-pricing-1">
                      <a className="btn btn-link icon-triangle color-gray-900 ml-40">
                        How it works
                      </a>
                    </Link>
                  </div>
                  <div className="row mt-50">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="list-icons">
                        <div className="item-icon none-bd">
                          <span className="icon-left">
                            <img
                              src="/assets/imgs/page/about/2/icon-project-done.svg"
                              alt="Agon"
                            />
                          </span>
                          <h4 className="text-heading-4">
                            <span className="text-heading-3 color-green-900">
                              +<span className="count">12</span>k
                            </span>
                          </h4>
                          <p className="text-body-text color-gray-500">
                            Projects done
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="list-icons">
                        <div className="list-icons">
                          <div className="item-icon none-bd">
                            <span className="icon-left">
                              <img
                                src="/assets/imgs/page/about/2/icon-officer.svg"
                                alt="Agon"
                              />
                            </span>
                            <h4 className="text-heading-4">
                              <span className="text-heading-3 color-green-900">
                                +<span className="count">18</span>
                              </span>
                            </h4>
                            <p className="text-body-text color-gray-500">
                              Offices / Factories
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-2">
                      <img
                        src="/assets/imgs/page/services/1/banner-2.png"
                        alt="Agon"
                      />
                    </div>
                    <img
                      src="/assets/imgs/page/services/1/banner.png"
                      alt="Agon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12">
                <div className="text-start mb-25">
                  <span className="tag-1 bg-6 color-green-900">What We Do</span>
                </div>
                <h2 className="text-heading-2 color-gray-900 mb-50">
                  re always looking for
                  <br className="d-lg-block d-none" />
                  new faces and fresh ideas
                </h2>
              </div>
            </div>
          </div>
          <div className="container mt-20">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/icon-support.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Support Engineer</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      We commit to original work of the highest standard and
                      giving credit where s due.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/icon-web.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Web Developer</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      We become a bonafide agency with a tiny team of 3 and then
                      hire our first developers
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/icon-business.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Business Analyst</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      We create our first campaign for Kaleidoscope Tech and it
                      goes viral
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/icon-product.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Product Designer</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      With a growing body of work, we bring more artists,
                      designers on board.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/icon-share.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Share stories</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      We commit to original work of the highest standard and
                      giving credit where s due.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/icon-build.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Support Engineer</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      We commit to original work of the highest standard and
                      giving credit where its due.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/icon-team.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">Support Engineer</h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      We commit to original work of the highest standard and
                      giving credit where its due.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box overflow-visible mt-70">
          <div className="container">
            <h2 className="text-heading-3 text-center color-gray-900 mb-60">
              Trusted by the world’s leading companies
            </h2>
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-partners">
                  <li>
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow">
                        <img
                          alt="Agon"
                          src="assets/imgs/slider/logo/sample-logo-1.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow">
                        <img
                          alt="Agon"
                          src="assets/imgs/slider/logo/sample-logo-1.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow">
                        <img
                          alt="Agon"
                          src="assets/imgs/slider/logo/sample-logo-2.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow">
                        <img
                          alt="Agon"
                          src="assets/imgs/slider/logo/sample-logo-3.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow">
                        <img
                          alt="Agon"
                          src="assets/imgs/slider/logo/sample-logo-4.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow">
                        <img
                          alt="Agon"
                          src="assets/imgs/slider/logo/sample-logo-5.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow">
                        <img
                          alt="Agon"
                          src="assets/imgs/slider/logo/sample-logo-6.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow">
                        <img
                          alt="Agon"
                          src="assets/imgs/slider/logo/sample-logo-7.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a className="item-logo box-hover-shadow">
                        <img
                          alt="Agon"
                          src="assets/imgs/slider/logo/sample-logo-8.svg"
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box">
          <div className="container mt-120">
            <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                  <h2 className="text-heading-1 color-gray-900">
                    What We Offer
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    What makes us different from others? We give holistic
                    solutions with strategy, design &amp; technology.
                  </p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
              <div className="container mt-70">
                <OfferSlider />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Service2;
