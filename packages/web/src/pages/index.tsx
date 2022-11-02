/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/Layout/Layout";
import Introduction from "components/Homepage/Introduction";
import Testimonials from "components/Homepage/Testimonials";
import Latestnews from "components/Homepage/Latestnews";
import Contact from "components/Homepage/Contact";

export default function Home() {
  return (
    <>
      <Layout>
        {/* <Introduction /> */}
        {/* <Testimonials /> */}
        <Latestnews />
        <Contact />
      </Layout>
    </>
  );
}
