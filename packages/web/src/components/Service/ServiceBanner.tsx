/* eslint-disable @next/next/no-img-element */
import { ImageInterface } from "models/image";
import Link from "next/link";
import React from "react";

export interface CompaniesProps {
  id: number;
  __component: string;
  title: string;
  text: string;
  smallimage: ImageInterface;
  bigimage: ImageInterface;
}

const ServiceBanner = (props: CompaniesProps) => {
  return (
    <section className="section-box">
      <div className="banner-hero bg-service-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 box-banner-left">
              <h1 className="text-display-3 mt-30">{props.title}</h1>
              <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                {props.text}
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
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_URL +
                      props.smallimage?.data.attributes.url
                    }
                    alt="Agon"
                  />
                </div>
                <img
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_URL +
                    props.bigimage?.data.attributes.url
                  }
                  alt="Agon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
