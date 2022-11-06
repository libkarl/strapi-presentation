/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Script from "next/script";
import { v4 } from "uuid";
import { useRouter } from "next/dist/client/router";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import Banner from "components/About/Banner";
import { Article } from "components/SingleArticle/Article";
import ArticleBanner from "components/SingleArticle/ArticleBanner";

function BlogSingle() {
  return (
    <>
      <Layout>
        <ArticleBanner />
        <Article />
      </Layout>
    </>
  );
}

export default BlogSingle;
