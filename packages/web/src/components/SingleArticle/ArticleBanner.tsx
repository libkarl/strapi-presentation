import React from "react";

const ArticleBanner = () => {
  return (
    <section className="section-box">
      <div
        className="banner-hero banner-head-image"
        style={{
          background: "url(public/assets/imgs/page/blog/single/banner.png)",
        }}
      >
        <div className="container">
          <div className="text-center">
            <span className="tag-1 bg-6 color-green-900">TECHNOLOGY NEWS</span>
            <h1 className="text-heading-1 color-white mt-30">
              Microsoft Patch Management
              <br className="d-lg-block d-none" />
              For Home Users
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleBanner;
