import BlogSlider from "components/Generics/Blog";
import { Article } from "models/articless";
import React from "react";

export interface LatestArticlesProps {
  id: number;
  __component: string;
  title: string;
  text: string;
  articles: any;
}

const LatestArticles = (props: LatestArticlesProps) => {
  console.log(Array.isArray(props.articles.data));
  return (
    <section className="section-box">
      <div className="container mt-70">
        <div className="row">
          <div className="col-lg-1 col-sm-1 col-12" />
          <div className="col-lg-10 col-sm-10 col-12 text-center">
            <h2 className="text-heading-1 color-gray-900 mb-10">
              {props.title}
            </h2>
            <p className="text-heading-6 color-gray-600 mt-20">{props.text}</p>
          </div>
          <div className="col-lg-1 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-70">
        <BlogSlider archive={props.articles.data} />
      </div>
    </section>
  );
};

export default LatestArticles;
