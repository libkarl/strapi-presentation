/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "components/Layout/Layout";
import React from "react";
import { homePageImportObject, aboutPageImportObject } from "components";
import useStrapiRequest, {
  usePageData,
  usePageData2,
} from "lib/api/useStrapiRequest";
import { NextRouter } from "next/dist/client/router";

import Error from "components/404";
import { HomePageComponents, AboutPageComponents } from "models/pages";

export async function getServerSideProps(router: NextRouter) {
  return {
    props: { params: router.query },
  };
}

const DynamicPage = ({ params }: any) => {
  const { data, error } = usePageData2(params.page);

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Layout>
        {data?.data?.attributes?.components.map((e: any) => {
          if (params.page === "homepage") {
            const pageKind: HomePageComponents = { Type: e.__component };
            const Component = homePageImportObject[pageKind.Type];
            if (!Component) {
              return null;
            }
            return <Component key={e.id} {...e} />;
          } else if (params.page === "about") {
            const pageKind: AboutPageComponents = { Type: e.__component };
            const Component = aboutPageImportObject[pageKind.Type];
            if (!Component) {
              return null;
            }
            return <Component key={e.id} {...e} />;
          }
        })}
      </Layout>
    </>
  );
};

export default DynamicPage;
