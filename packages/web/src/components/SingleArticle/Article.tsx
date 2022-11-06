/* eslint-disable @next/next/no-img-element */
import { DiscussionEmbed } from "disqus-react";
import { CommentCount } from "disqus-react";
import { useRouter } from "next/dist/client/router";
import React from "react";

export const Article = () => {
  const router = useRouter();
  const page = "http://localhost:3000" + router.pathname + "#top";
  return (
    <section className="section-box mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6 col-md-7 col-sm-7 col-7">
                <div className="blog-img-user">
                  <div className="img-user img-user-round">
                    <img src="/assets/imgs/page/blog/2/user-3.png" alt="Agon" />
                  </div>
                  <h4 className="text-body-lead color-gray-900">Jane Cooper</h4>
                  <p className="text-body-small color-gray-500">
                    August 25, 2022
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 col-sm-5 col-5 tag-mb text-end">
                <span className="tag-1 bg-6 color-green-900 mt-40">
                  <CommentCount
                    shortname="strapiweb"
                    config={{
                      url: "document.location.href",
                      identifier: "document.location.href",
                    }}
                  />
                  <a href="http://localhost:3000/blog-single#disqus_thread">
                    Post of comment
                  </a>
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
                Tortor placerat bibendum consequat sapien, facilisi facilisi
                pellentesque morbi. Id conse ctetur ut vitae a massa a. Lacus ut
                bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent
                ornare accumsan elit venenatis. Congue sodales nunc quis
                ultricies odio porta. Egestas mauris placerat leo phasellu s ut
                sit.
              </p>
              <h2 className="text-heading-3">Use your headings</h2>
              <p>
                Thirty there &amp; time wear across days, make inside on these
                you. Can young a really, roses blog small of song their dreamy
                life pretty? Because really duo living to noteworthy bloom bell.
                Transform clean daydreaming cute twenty process rooms cool.
                White white dreamy dramatically place everything although. Place
                out apartment afternoon whimsical kinder, little romantic joy we
                flowers handmade. Thirty she a studio of she whimsical projects,
                afternoon effect going an floated maybe.
              </p>
              <p />
              <p />
              <h3 className="text-heading-4">Smaller heading</h3>
              <div className="row">
                <div className="col-lg-8">
                  <p>
                    Thirty there &amp; time wear across days, make inside on
                    these you. Can young a really, roses blog small of song
                    their dreamy life pretty? Because really duo living to
                    noteworthy bloom bell. Transform clean daydreaming cute
                    twenty process rooms cool. White white dreamy dramatically
                    place everything although.
                  </p>
                  <p>
                    White white dreamy dramatically place everything although.
                    Place out apartment afternoon whimsical kinder, little
                    romantic joy we flowers handmade. Thirty she a studio of she
                    whimsical projects, afternoon effect going an floated maybe.
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
                Tortor placerat bibendum consequat sapien, facilisi facilisi
                pellentesque morbi. Id consectetur ut vitae a massa a. Lacus ut
                bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent
                ornare accumsan elit venenatis. Congue sodales nunc quis
                ultricies odio porta. Egestas mauris placerat leo phasellus ut
                sit.
              </p>
              <p />
              <p />
              <div className="border-bottom mt-50 mb-50" />
            </div>
            <DiscussionEmbed
              shortname="strapiweb"
              config={{
                url: page,
                identifier: page,
                title: "Test article",
                language: "CZ",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
