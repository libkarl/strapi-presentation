import React from "react";

export interface ContactBanner {
  id: number;
  __component: string;
  title: string;
  text: string;
}

const ContactBanner = (props: ContactBanner) => {
  return (
    <section className="section-box">
      <div className="banner-hero banner-breadcrums">
        <div className="container text-center">
          <h1 className="text-heading-2 color-gray-1000 mb-20">
            {props.title}
          </h1>
          <p className="text-body-text color-gray-500">{props.text}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
