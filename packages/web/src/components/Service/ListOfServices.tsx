/* eslint-disable @next/next/no-img-element */
import ServiceType, { ServiceTypeProps } from "components/Generics/ServiceType";
import React from "react";
import { v4 } from "uuid";

interface ListOfServicesProps {
  id: number;
  __component: string;
  label: string;
  title: string;
  services: ServiceTypeProps[];
}

const ListOfServices = (props: ListOfServicesProps) => {
  return (
    <section className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12">
            <div className="text-start mb-25">
              <span className="tag-1 bg-6 color-green-900">{props.label}</span>
            </div>
            <h2 className="text-heading-2 color-gray-900 mb-50 text-center">
              {props.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="container mt-20">
        <div className="row">
          {props.services?.map((item) => {
            return <ServiceType key={"servicetype_" + v4()} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ListOfServices;
