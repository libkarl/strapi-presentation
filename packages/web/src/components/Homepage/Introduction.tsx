import React from "react";
import Image from "next/image";
import CompanyFocus, { FocusProps } from "components/Generics/CompanyFocus";
import { ImageInterface } from "models/image";
export interface IntroductionProps {
  id: number;
  __component: string;
  title: string;
  text: string;
  focuses: FocusProps[];
  image: ImageInterface;
}

const Introduction = (props: IntroductionProps) => {
  return (
    <section className="section-box">
      <div className="container mt-120">
        <div className="row">
          <div className="col-lg-6 col-sm-12 block-img-we-do">
            <Image
              layout="fill"
              priority={true}
              className="bdrd-16 img-responsive"
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                props.image?.data.attributes.url
              }
              alt="Agon"
            />
          </div>
          <div className="col-lg-6 col-sm-12 block-we-do">
            <h3 className="text-heading-1 mt-30">{props.title}</h3>
            <p className="text-body-lead-large color-gray-600 mt-30">
              {props.text}
            </p>
            <div className="line-bd-green mt-50" />
            <div className="row">
              {props.focuses?.map((item) => {
                return <CompanyFocus key={item.id} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
