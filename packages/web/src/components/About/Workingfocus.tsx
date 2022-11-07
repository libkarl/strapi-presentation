/* eslint-disable @next/next/no-img-element */
import FocusCard, { FocusCardProps } from "components/Generics/FocusCard";
import { OrderStepProps } from "components/Generics/OrderStep";
import React from "react";
import { v4 } from "uuid";

export interface WorkingFocusProps {
  id: number;
  __component: string;
  title: string;
  description: string;
  cards: FocusCardProps[];
}

const Workingfocus = (props: WorkingFocusProps) => {
  return (
    <section className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12" />
          <div className="col-lg-8 col-sm-10 col-12 text-center">
            <h2 className="text-heading-1 color-gray-900">{props.title}</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              {props.description}
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-70">
        <div className="row">
          {props.cards.map((item) => {
            return <FocusCard key={v4()} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Workingfocus;
