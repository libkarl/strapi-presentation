/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "components/Layout/Layout";
import React from "react";
import { v4 } from "uuid";
import { ImportObject } from "models/dynamic-imports";
import { NextRouter, useRouter } from "next/dist/client/router";
import Error from "components/Elements/404";
import { usePageData } from "lib/api/useStrapiApi";

const Home = () => {
  const { data, error } = usePageData("homepage");
  if (error) {
    return <Error />;
  }
  return (
    <>
      <Layout>
        {data?.data?.attributes?.components.map((e: any) => {
          const Component = ImportObject[e.__component];
          if (!Component) {
            return null;
          } else {
            return <Component key={v4()} {...e} />;
          }
        })}
      </Layout>
    </>
  );
};

export default Home;
