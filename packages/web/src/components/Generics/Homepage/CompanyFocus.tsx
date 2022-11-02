import { FocusProps } from "models/introduction";
import React from "react";

const CompanyFocus = (props: FocusProps) => {
  return (
    <div className="col-lg-6 col-sm-6 col-12 mt-50">
      <h4 className="text-heading-6 icon-leaf">{props.title}</h4>
      <p className="text-body-excerpt color-gray-600 mt-15">{props.text}</p>
    </div>
  );
};

export default CompanyFocus;
