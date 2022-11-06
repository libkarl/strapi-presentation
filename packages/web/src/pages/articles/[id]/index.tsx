/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "components/Layout/Layout";
import React from "react";
import { v4 } from "uuid";
import {
  homePageImportObject,
  aboutPageImportObject,
} from "models/dynamic-imports";
import useStrapiRequest, {
  usePageData,
  usePageData2,
} from "lib/api/useStrapiRequest";
import { NextRouter, useRouter } from "next/dist/client/router";
import Error from "components/Elements/404";
import { HomePageComponents, AboutPageComponents } from "models/pages";
import { Article } from "models/articless";
import Banner from "components/About/Banner";
import ArticleBanner from "components/SingleArticle/ArticleBanner";
import { Article as ArticleComponent } from "components/SingleArticle/Article";

const BlogPage = () => {
  const router = useRouter();
  console.log(router.query.id);
  const { data, error } = usePageData2(router.pathname);

  if (router.query.id === "1")
    return (
      <>
        <Layout>
          <ArticleBanner key={v4()} />
          <ArticleComponent key={v4()} />
        </Layout>
      </>
    );
};

export default BlogPage;
