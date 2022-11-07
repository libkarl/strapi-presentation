/* eslint-disable @next/next/no-img-element */
import OrderStep, { OrderStepProps } from "components/Generics/OrderStep";
import React from "react";
import { v4 } from "uuid";

export interface ProcessFlowProps {
  id: number;
  __component: string;
  title: string;
  text: string;
  steps: OrderStepProps[];
}

const Processflow = (props: ProcessFlowProps) => {
  return (
    <section className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-sm-1 col-12" />
          <div className="col-lg-10 col-sm-10 col-12 text-center">
            <h2 className="text-heading-1 color-gray-900 mb-10">
              {props.title}
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              {props.text}
            </p>
          </div>
          <div className="col-lg-1 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-40">
        <div className="row">
          {props.steps.map((item) => {
            return <OrderStep key={v4()} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Processflow;
