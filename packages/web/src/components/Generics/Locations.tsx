import { Address } from "models/address";
import React from "react";
import AddressComponent from "./Address";

export interface LocationProps {
  id: number;
  __component: string;
  title: string;
  text: string;
  addresses: Locations[];
}

interface Locations extends Address {}

const Locations = (props: LocationProps) => {
  return (
    <section className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
            <h2 className="text-heading-1 color-gray-900 mb-20">
              {props.title}
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              {props.text}
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-100">
        <div className="row">
          {props.addresses?.map((item) => {
            return <AddressComponent key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Locations;
