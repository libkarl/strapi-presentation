/* eslint-disable @next/next/no-img-element */
import { ImageInterface } from "models/image";
import Link from "next/link";
import React from "react";

export interface MemberProps {
  id: number;
  role: string;
  name: string;
  info: string;
  instagramURL: any;
  twitterURL: any;
  linkedInURL: any;
  facebookURL: any;
  foto: MemberFoto;
}

interface MemberFoto extends ImageInterface {}

const Member = (props: MemberProps) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card-grid-style-5 hover-up">
        <div className="grid-5-img mb-15">
          <img
            src={
              process.env.NEXT_PUBLIC_STRAPI_URL +
              props.foto?.data.attributes.url
            }
            alt="Agon"
          />
        </div>
        <span className="text-body-text-md color-gray-500">{props.role}</span>
        <h3 className="text-heading-5 mb-5 mt-5">{props.name}</h3>
        <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">
          {props.name}
        </p>
        <span className="text-body-text-md color-gray-600">Let’s Connect</span>
        <div className="social-bottom">
          <Link href="#">
            <a className="icon-socials icon-facebook"></a>
          </Link>
          <Link href="#">
            <a className="icon-socials icon-twitter"></a>
          </Link>
          <Link href="#">
            <a className="icon-socials icon-instagram"></a>
          </Link>
          <Link href="#">
            <a className="icon-socials icon-linkedin"></a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Member;
