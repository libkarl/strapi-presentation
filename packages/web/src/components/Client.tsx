/* eslint-disable @next/next/no-img-element */
import { ClientProps } from "models/testimonials";
import React from "react";

const Client = (props: ClientProps) => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12">
      <div className="card-grid-style-2 card-square hover-up mb-20">
        <p className="text-body-text color-gray-600 text-comment">
          {props.text}
        </p>
        <div className="box-img-user">
          <div className="img-user img-user-round">
            <img
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                props.image.data.attributes.url
              }
              alt="Agon"
            />
          </div>
          <h4 className="text-body-lead color-gray-900 mb-5">{props.name}</h4>
          <p className="text-body-text-md">{props.company}</p>
        </div>
      </div>
    </div>
  );
};

export default Client;
