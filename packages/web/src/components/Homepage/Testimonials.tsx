/* eslint-disable @next/next/no-img-element */
import Image from "next";
import React from "react";
import Link from "next/link";
import Client from "components/Client";
import { ClientProps, TestimonialProps } from "models/testimonials";

const Testimonials = (props: TestimonialProps) => {
  return (
    <section className="section-box pt-100 pb-100 mt-100 bg-orange-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-30">
            <span className="tag-1 bg-6 color-gray-900">
              Built Exclusively For You
            </span>
            <h3 className="text-heading-1 mt-30">{props.title}</h3>
            <p className="text-body-lead-large color-gray-600 mt-30">
              {props.text}
            </p>
            <div className="mt-40">
              <Link href="/page-contact">
                <a className="btn btn-default btn-white icon-arrow-right">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row" data-masonry='{"percentPosition": true }'>
              {props.clients.map((item: ClientProps) => {
                return <Client key={item.id} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
