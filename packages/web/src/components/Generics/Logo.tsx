/* eslint-disable @next/next/no-img-element */
import { ImageInterface } from "models/image";
import Link from "next/link";
import React from "react";

export interface LogoProps {
  link: string;
  logo: ImageInterface;
}

const Logo = (props: LogoProps) => {
  return (
    <li>
      <Link href={props.link}>
        <a className="item-logo box-hover-shadow">
          <img
            alt="Agon"
            src={
              process.env.NEXT_PUBLIC_STRAPI_URL +
              props.logo?.data.attributes.url
            }
          />
        </a>
      </Link>
    </li>
  );
};

export default Logo;
