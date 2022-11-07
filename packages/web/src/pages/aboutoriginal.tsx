/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import CounterUp from "../components/Elements/CounterUp";
import Layout from "../components/Layout/Layout";
import TeamSlider from "../components/Generics/Team";

function About() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="container mt-110">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Our Team</h3>
                <p className="text-body-lead-large color-gray-600">
                  Decades of experience in design and development
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-80">{/* <TeamSlider /> */}</div>
        </section>
      </Layout>
    </>
  );
}

export default About;
