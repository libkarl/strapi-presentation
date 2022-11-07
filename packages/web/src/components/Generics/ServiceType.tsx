/* eslint-disable @next/next/no-img-element */
import { ImageInterface } from "models/image";
import React from "react";

export interface ServiceTypeProps {
  title: string;
  text: string;
  icon: ImageInterface;
}

const ServiceType = (props: ServiceTypeProps) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
      <div className="list-icons">
        <div className="item-icon none-bd">
          <span className="icon-left">
            <img
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                props.icon?.data.attributes.url
              }
              alt="Agon"
            />
          </span>
          <h4 className="text-heading-6">{props.title}</h4>
          <p className="text-body-text color-gray-600 mt-15">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceType;
