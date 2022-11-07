/* eslint-disable @next/next/no-img-element */
import { DiscussionEmbed } from "disqus-react";
import { CommentCount } from "disqus-react";
import { ArticleProps } from "models/articless";
import React from "react";
import Script from "next/script";

interface SingleArticleInterface extends ArticleProps {
  articleID: string;
  articleURL: string;
}

export const Article = (props: SingleArticleInterface) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const articleDate = new Date(props.date);
  console.log({
    url: props.articleURL,
    identifier: props.articleID,
    title: props.articlename,
  });
  const commentCountPath = `${props.articleURL}#disqus_thread`;

  return (
    <>
      <Script
        id="dsq-count-scr"
        src="//strapiweb.disqus.com/count.js"
        async
      ></Script>
      <section className="section-box">
        <div
          className="banner-hero banner-head-image"
          style={{
            background: `url(${
              process.env.NEXT_PUBLIC_STRAPI_URL +
              props.banner?.data?.attributes.url
            })`,
          }}
        >
          <div className="container">
            <div className="text-center">
              <span className="tag-1 bg-6 color-green-900">
                {props.category}
              </span>
              <h1 className="text-heading-1 color-white mt-30">
                {props.articlename}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-2" />
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 col-md-7 col-sm-7 col-7">
                  <div className="blog-img-user">
                    <div className="img-user img-user-round">
                      <img
                        src={
                          process.env.NEXT_PUBLIC_STRAPI_URL +
                          props.foto?.data.attributes.url
                        }
                        alt="Agon"
                      />
                    </div>
                    <h4 className="text-body-lead color-gray-900">
                      {props.author}
                    </h4>
                    <p className="text-body-small color-gray-500">
                      {articleDate.toLocaleDateString("en-Us", options)}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-5 col-5 tag-mb text-end">
                  <span className="tag-1 bg-6 color-green-900 mt-40">
                    <CommentCount
                      shortname="strapiweb"
                      config={{
                        url: props.articleURL,
                        identifier: props.articleID,
                        title: props.articlename,
                      }}
                    ></CommentCount>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2" />
            <div className="col-lg-8">
              <div className="single-detail mt-50">
                <img
                  className="img-responsive bdr-16"
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_URL +
                    props.bigpicture?.data.attributes.url
                  }
                  alt="Agon"
                />
                <p />
                <p>{props.articleintro}</p>
                <h2 className="text-heading-3">{props.title}</h2>
                <p>{props.paragraph1}</p>
                <p />
                <p />
                <h3 className="text-heading-4">{props.subtitle}</h3>
                <div className="row">
                  <div className="col-lg-8">
                    <p>{props.paragraph2}</p>
                    <p>{props.paragraph3}</p>
                  </div>
                  <div className="col-lg-4">
                    <img
                      className="img-responsive bdr-10 mt-10"
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        props.smallpicture?.data.attributes.url
                      }
                      alt="Agon"
                    />
                  </div>
                </div>
                <p />
                <p>{props.paragraph4}</p>
                <p />
                <p />
                <div className="border-bottom mt-50 mb-50" />
              </div>
              <DiscussionEmbed
                shortname="strapiweb"
                config={{
                  url: props.articleURL,
                  identifier: props.articleID,
                  title: props.articlename,
                  language: "cs-CZ",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
