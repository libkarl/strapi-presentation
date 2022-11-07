import OfferSlider, { OfferProps } from "components/Generics/Offer";
import React from "react";

export interface OffersProps {
  id: number;
  __component: string;
  label: string;
  text: string;
  offers: OfferProps[];
}

const Offers = (props: OffersProps) => {
  return (
    <section className="section-box">
      <div className="container mt-120">
        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
          <div className="row">
            <div className="col-lg-2 col-sm-1 col-12" />
            <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
              <h2 className="text-heading-1 color-gray-900">{props.label}</h2>
              <p className="text-body-lead-large color-gray-600 mt-20">
                {props.text}
              </p>
            </div>
            <div className="col-lg-2 col-sm-1 col-12" />
          </div>
          <div className="container mt-70">
            <OfferSlider offers={props.offers} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
