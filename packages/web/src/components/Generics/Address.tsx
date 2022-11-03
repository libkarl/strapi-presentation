import { Address } from "models/address";
import React from "react";

export interface IProps extends Address {}

const AddressComponent = (props: IProps) => {
  return (
    <div className="col-lg-4 mb-40">
      <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
        {props.name}
      </h4>
      <p className="text-body-text color-gray-600">
        {props.addressline1}
        <br />
        {props.addressline2}
      </p>
      <p className="text-body-text color-gray-600">{props.phone}</p>
      <p className="text-body-text color-gray-600">{props.email}</p>
    </div>
  );
};

export default AddressComponent;
