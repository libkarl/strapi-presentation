/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ArticleProps } from "models/articless";

interface UniqueArticleProps extends ArticleProps {
  path: string;
}

const LatestNew = (props: UniqueArticleProps) => {
  return (
    <div className="col-lg-4 col-sm-12 pr-30 mb-50">
      <div className="card-grid-style-4">
        <span className="tag-dot">{props.category}</span>
        <Link href={props.path}>
          <a className="text-heading-4">{props.articlename}</a>
        </Link>

        <div className="grid-4-img color-bg-6">
          <Link href={props.path}>
            <a>
              <img
                src={
                  process.env.NEXT_PUBLIC_STRAPI_URL +
                  props.bigpicture?.data.attributes.url
                }
                alt="Agon"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestNew;
