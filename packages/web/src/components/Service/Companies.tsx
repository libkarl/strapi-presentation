/* eslint-disable @next/next/no-img-element */
import Logo, { LogoProps } from "components/Generics/Logo";
import Link from "next/link";
import React from "react";

export interface CompaniesProps {
  id: number;
  __component: string;
  title: string;
  partners: LogoProps[];
}

const Companies = (props: CompaniesProps) => {
  return (
    <section className="section-box overflow-visible mt-70">
      <div className="container">
        <h2 className="text-heading-3 text-center color-gray-900 mb-60">
          {props.title}
        </h2>
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-partners">
              {props.partners?.map((item: any) => {
                return <Logo key={"_partner" + item.id} {...item} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
