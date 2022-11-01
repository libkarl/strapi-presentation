/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import CounterUp from "../components/Elements/CounterUp";
import Layout from "../components/Layout/Layout";
import TeamSlider from "../components/Team";

function About() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-2 bg-about-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <span className="tag-1 color-orange-900">
                    What We Do, What You Get
                  </span>
                  <h1 className="text-display-3 mt-30">
                    A small creative team excited to create beautiful things
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    Integrated workflow designed for product teams. We create
                    world-class development and branding
                  </p>
                  <div className="mt-40">
                    <Link href="/page-service-1">
                      <a className="btn btn-black shape-square icon-arrow-right-white">
                        Join Our Team
                      </a>
                    </Link>

                    <Link href="/page-contact">
                      <a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-1">
                      <img
                        src="/assets/imgs/page/about/1/banner2.png"
                        alt="Agon"
                      />
                    </div>
                    <img
                      className="img-responsive shape-2"
                      alt="Agon"
                      src="assets/imgs/page/about/1/banner1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="bd-bottom pb-20 mb-40 text-mb-center">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                      <span className="text-display-3 color-green-900">
                        +<CounterUp count={6} time={3} />
                      </span>
                      <p className="text-body-text color-gray-500 pl-40t">
                        Years in Business
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                      <span className="text-display-3 color-green-900">
                        +<CounterUp count={14} time={3} />k
                      </span>
                      <p className="text-body-text color-gray-500 pl-40">
                        Projects Done
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                      <span className="text-display-3 color-green-900">
                        +<CounterUp count={26} time={3} />
                      </span>
                      <p className="text-body-text color-gray-500 pl-40">
                        Countries / Offices
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                      <span className="text-display-3 color-green-900">
                        +<CounterUp count={24} time={3} />k
                      </span>
                      <p className="text-body-text color-gray-500 pl-40">
                        Constant Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
          </div>
        </div>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  Providing solutions of every kind
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  In a professional context it often happens that private or
                  <br className="d-lg-block d-none" />
                  corporate clients order a publication to publish news.
                </p>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-40">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">1. Acquisition</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-active.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">2. Activation</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/homepage2/icon-retent.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-4">3. Retention</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container">
            <div className="text-center mb-20">
              <span className="tag-1 bg-6 color-green-900">
                What We Do, What You Get
              </span>
            </div>
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900">
                  Bringing the world's
                  <br className="d-lg-block d-none" />
                  ideas to life
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Developers are trusted to create an engaging experience for
                  their companies, so we build tools to help them.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-style-3 bd-bg-6 pb-40 mb-30">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/local.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">Local Marketing</h3>
                  <p className="text-body-excerpt mt-20">
                    You are always welcome to visit our little den. Professional
                    in teir craft! All products were super amazing with strong
                    attension to details, comps and overall vibe.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-service-1">
                      <a className="btn btn-default icon-arrow-right">
                        Learn more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-style-3 bd-bg-6 pb-40 mb-30">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/local.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">Local Marketing</h3>
                  <p className="text-body-excerpt mt-20">
                    You are always welcome to visit our little den. Professional
                    in teir craft! All products were super amazing with strong
                    attension to details, comps and overall vibe.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-service-1">
                      <a className="btn btn-default icon-arrow-right">
                        Learn more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-grid-style-3 bd-bg-6 pb-40 mb-30">
                  <div className="grid-1-img">
                    <img
                      src="/assets/imgs/page/homepage1/local.svg"
                      alt="Agon"
                    />
                  </div>
                  <h3 className="text-heading-3 mt-20">Local Marketing</h3>
                  <p className="text-body-excerpt mt-20">
                    You are always welcome to visit our little den. Professional
                    in teir craft! All products were super amazing with strong
                    attension to details, comps and overall vibe.
                  </p>
                  <div className="mt-30">
                    <Link href="/page-service-1">
                      <a className="btn btn-default icon-arrow-right">
                        Learn more
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container mt-110">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Our Team</h3>
                <p className="text-body-lead-large color-gray-600">
                  Decades of experience in design and development
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-80">
            <TeamSlider />
          </div>
        </section>
      </Layout>
    </>
  );
}

export default About;
