/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ImageInterface } from "models/image";
import CounterUp from "components/Elements/CounterUp";

interface Bigpicture extends ImageInterface {}
interface Smallpicture extends ImageInterface {}

export interface BannerProps {
  id: number;
  __component: string;
  title: string;
  label: string;
  text: string;
  bigpicture: Bigpicture;
  smallpicture: Smallpicture;
}

const Banner = (props: BannerProps) => {
  return (
    <>
      <section className="section-box">
        <div className="banner-hero banner-2 bg-about-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <span className="tag-1 color-orange-900">{props.label}</span>
                <h1 className="text-display-3 mt-30">{props.title}</h1>
                <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  {props.text}
                </p>
                <div className="mt-40">
                  <Link href="/service">
                    <a className="btn btn-black shape-square icon-arrow-right-white">
                      Learn More
                    </a>
                  </Link>

                  <Link href="/contact">
                    <a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <div className="2xl:hidden banner-imgs">
                  <div className="block-1 shape-1">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        props.bigpicture?.data.attributes.url
                      }
                      alt="Agon"
                    />
                  </div>
                  <img
                    className="img-responsive shape-2 "
                    alt="Agon"
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_URL +
                      props.smallpicture?.data.attributes.url
                    }
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
            <div id="explanation" className="col-lg-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
