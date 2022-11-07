/* eslint-disable @next/next/no-img-element */
import { ImageInterface } from "models/image";
import React from "react";

export interface FocusCardProps {
  id: number;
  title: string;
  text: string;
  cardicon: Cardicon;
}

interface Cardicon extends ImageInterface {}

const FocusCard = (props: FocusCardProps) => {
  return (
    <div className="col-lg-4 col-sm-12">
      <div className="card-grid-style-3 bd-bg-6 pb-40 mb-30">
        <div className="grid-1-img">
          <img
            src={
              process.env.NEXT_PUBLIC_STRAPI_URL +
              props.cardicon?.data.attributes.url
            }
            alt="Card Icon"
          />
        </div>
        <h3 className="text-heading-3 mt-20">{props.title}</h3>
        <p className="text-body-excerpt mt-20">{props.text}</p>
      </div>
    </div>
  );
};

export default FocusCard;
