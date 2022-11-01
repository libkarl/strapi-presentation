/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "components/Layout/Layout";
import React from "react";
import homePageImportObject from "components";
import useStrapiRequest from "lib/useStrapiRequest";
import { useRouter } from "next/dist/client/router";
import { TestimonialProps } from "models/testimonials";

const testdyn = () => {
  const router = useRouter();

  const { data, error }: any = useStrapiRequest({
    url: "/api/homepage?populate=deep",
  });
  return (
    <>
      <Layout>
        {data?.data.attributes.components.map((e: any) => {
          const Component = homePageImportObject["homepage.testimonials"];
          if (!Component) {
            return null;
          }
          console.log(Component);
          return <Component key={e.id} {...e} />;
        })}
      </Layout>
    </>
  );
};

export default testdyn;
