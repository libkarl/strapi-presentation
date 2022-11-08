/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import LatestNew from "components/Generics/LatestNew";
import { Article } from "models/articless";
export interface ArchiveProps {
  id: number;
  __component: string;
  title: string;
  text: string;
  articles: any;
}

export interface Articles {
  data: Article[];
}

const Archive = (props: ArchiveProps) => {
  const latestArticles = props.articles.data.slice(-9);
  return (
    <section className="section-box">
      <div className="container mt-30">
        <div className="row">
          <div className="col-lg-1 col-sm-1 col-12" />
          <div className="col-lg-10 col-sm-10 col-12 text-center">
            <h2 className="text-heading-1 color-gray-900 mb-10">
              {props.title}
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              {props.text}
            </p>
          </div>
          <div className="col-lg-1 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-90">
        <div className="row">
          {latestArticles.map((item: any) => {
            const uniquePath = `/articles/${item.id}`;
            return (
              <LatestNew
                key={"archive_" + item.id}
                {...item.attributes}
                path={uniquePath}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Archive;
