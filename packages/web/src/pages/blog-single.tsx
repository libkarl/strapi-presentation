/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";

function BlogSingle() {
  return (
    <>
      <Layout>
        <div>
          <section className="section-box">
            <div
              className="banner-hero banner-head-image"
              style={{
                background: "url(assets/imgs/page/blog/single/banner.png)",
              }}
            >
              <div className="container">
                <div className="text-center">
                  <span className="tag-1 bg-6 color-green-900">
                    TECHNOLOGY NEWS
                  </span>
                  <h1 className="text-heading-1 color-white mt-30">
                    Microsoft Patch Management
                    <br className="d-lg-block d-none" />
                    For Home Users
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
                            src="/assets/imgs/page/blog/2/user-3.png"
                            alt="Agon"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900">
                          Jane Cooper
                        </h4>
                        <p className="text-body-small color-gray-500">
                          August 25, 2022
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-5 col-5 tag-mb text-end">
                      <span className="tag-1 bg-6 color-green-900 mt-40">
                        18 comments
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
                      src="assets/imgs/page/blog/single/img-1.png"
                      alt="Agon"
                    />
                    <p />
                    <p>
                      Tortor placerat bibendum consequat sapien, facilisi
                      facilisi pellentesque morbi. Id conse ctetur ut vitae a
                      massa a. Lacus ut bibendum sollicitudin fusce sociis mi.
                      Dictum volutpat praesent ornare accumsan elit venenatis.
                      Congue sodales nunc quis ultricies odio porta. Egestas
                      mauris placerat leo phasellu s ut sit.
                    </p>
                    <h2 className="text-heading-3">Use your headings</h2>
                    <p>
                      Thirty there &amp; time wear across days, make inside on
                      these you. Can young a really, roses blog small of song
                      their dreamy life pretty? Because really duo living to
                      noteworthy bloom bell. Transform clean daydreaming cute
                      twenty process rooms cool. White white dreamy dramatically
                      place everything although. Place out apartment afternoon
                      whimsical kinder, little romantic joy we flowers handmade.
                      Thirty she a studio of she whimsical projects, afternoon
                      effect going an floated maybe.
                    </p>
                    <p />
                    <p />
                    <h3 className="text-heading-4">Smaller heading</h3>
                    <div className="row">
                      <div className="col-lg-8">
                        <p>
                          Thirty there &amp; time wear across days, make inside
                          on these you. Can young a really, roses blog small of
                          song their dreamy life pretty? Because really duo
                          living to noteworthy bloom bell. Transform clean
                          daydreaming cute twenty process rooms cool. White
                          white dreamy dramatically place everything although.
                        </p>
                        <p>
                          White white dreamy dramatically place everything
                          although. Place out apartment afternoon whimsical
                          kinder, little romantic joy we flowers handmade.
                          Thirty she a studio of she whimsical projects,
                          afternoon effect going an floated maybe.
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <img
                          className="img-responsive bdr-10 mt-10"
                          src="assets/imgs/page/blog/single/img-2.png"
                          alt="Agon"
                        />
                      </div>
                    </div>
                    <p />
                    <p>
                      Tortor placerat bibendum consequat sapien, facilisi
                      facilisi pellentesque morbi. Id consectetur ut vitae a
                      massa a. Lacus ut bibendum sollicitudin fusce sociis mi.
                      Dictum volutpat praesent ornare accumsan elit venenatis.
                      Congue sodales nunc quis ultricies odio porta. Egestas
                      mauris placerat leo phasellus ut sit.
                    </p>
                    <p />
                    <p />
                    <div className="border-bottom mt-50 mb-50" />
                  </div>
                  <div className="mt-60">
                    <h4 className="text-heading-2">Comments</h4>
                    <div className="box-comments">
                      <ul>
                        <li>
                          <div className="item-comment">
                            <div className="blog-img-user">
                              <div className="img-user img-user-round">
                                <img
                                  src="/assets/imgs/page/blog/single/user-1.png"
                                  alt="Agon"
                                />
                              </div>
                              <h4 className="text-heading-6 color-gray-900">
                                Robert Fox
                              </h4>
                              <p className="text-body-small color-gray-500">
                                August 25, 2022
                              </p>
                            </div>
                            <div className="text-comment">
                              White white dreamy drama tically place everything
                              although. Place out apartment afternoon whimsical
                              kinder, little romantic joy we flowers handmade.
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="item-comment">
                            <div className="blog-img-user">
                              <div className="img-user img-user-round">
                                <img
                                  src="/assets/imgs/page/blog/single/user-2.png"
                                  alt="Agon"
                                />
                              </div>
                              <h4 className="text-heading-6 color-gray-900">
                                Robert Fox
                              </h4>
                              <p className="text-body-small color-gray-500">
                                August 25, 2022
                              </p>
                            </div>
                            <div className="text-comment">
                              White white dreamy drama tically place everything
                              although. Place out apartment afternoon whimsical
                              kinder, little romantic joy we flowers handmade.
                            </div>
                          </div>
                          <ul>
                            <li>
                              <div className="item-comment">
                                <div className="blog-img-user">
                                  <div className="img-user img-user-round">
                                    <img
                                      src="/assets/imgs/page/blog/single/user-3.png"
                                      alt="Agon"
                                    />
                                  </div>
                                  <h4 className="text-heading-6 color-gray-900">
                                    Robert Fox
                                  </h4>
                                  <p className="text-body-small color-gray-500">
                                    August 25, 2022
                                  </p>
                                </div>
                                <div className="text-comment">
                                  White white dreamy drama tically place
                                  everything although. Place out apartment
                                  afternoon whimsical kinder, little romantic
                                  joy we flowers handmade.
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="border-bottom mt-50 mb-50" />
                    <h4 className="text-heading-4 color-gray-900 mb-40">
                      Leave a comment
                    </h4>
                    <div className="form-comment">
                      <form action="#">
                        <div className="form-group">
                          <textarea
                            className="input-comment"
                            placeholder="Write a comment"
                          />
                        </div>
                        <div className="row">
                          <div className="col-lg-7 col-md-6 col-sm-5 text-end">
                            <button className="btn btn-black shape-square btn-md text-body-text">
                              Post comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default BlogSingle;
