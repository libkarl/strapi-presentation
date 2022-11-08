/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import LatestNew from "components/Generics/LatestNew";
import { Articles } from "models/articless";

export interface LatestNewsProps {
  id: number;
  __component: string;
  title: string;
  subtitle: string;
  articles: Articles;
}

const Latestnews = (props: LatestNewsProps) => {
  return (
    <section className="section-box">
      <div className="container mt-30">
        <div className="row">
          <div className="col-lg-8">
            <h3 className="text-heading-1 mb-10">{props.title}</h3>
            <p className="text-body-lead-large color-gray-600">
              {props.subtitle}
            </p>
          </div>
          <div className="col-lg-4 text-lg-end text-start pt-30">
            <Link href="/blog">
              <a className="btn btn-black icon-arrow-right-white">View More</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-90">
        <div className="row">
          {props.articles.data?.slice(-3).map((item) => {
            const uniquePath = `/articles/${item.id}`;
            return (
              <LatestNew key={item.id} {...item.attributes} path={uniquePath} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Latestnews;
