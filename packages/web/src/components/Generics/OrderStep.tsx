/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface OrderStepProps {
  id: number;
  name: string;
  description: string;
}

const OrderStep = (props: OrderStepProps) => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
      <div className="list-icons mt-50">
        <div className="item-icon">
          <span className="icon-left">
            <img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" />
          </span>
          <h4 className="text-heading-4">{props.name}</h4>
          <p className="text-body-text color-gray-600 mt-15">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderStep;
