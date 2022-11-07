/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "components/Layout/Layout";
import React from "react";
import { v4 } from "uuid";
import { NextRouter, useRouter } from "next/dist/client/router";
import { Article as ArticleComponent } from "components/SingleArticle/Article";
import { useArticlesCollectionData } from "lib/api/useStrapiApi";
import Error from "components/Elements/404";

export async function getServerSideProps(router: NextRouter) {
  return {
    props: { params: router.query },
  };
}

const DynamicArticlePage = ({ params }: any) => {
  const router = useRouter();
  let path = router.query.id?.toString();
  if (path !== undefined) {
    path =
      process.env.NEXT_PUBLIC_VERCEL_URL +
      router.pathname.replaceAll("[id]", path);
  }
  const { data, error } = useArticlesCollectionData(params.id);
  if (error) {
    return <Error />;
  }

  return (
    <>
      <Layout>
        <ArticleComponent
          key={v4()}
          {...data?.data.attributes}
          articleURL={path}
          articleID={router.query.id}
        />
      </Layout>
    </>
  );
};

export default DynamicArticlePage;
