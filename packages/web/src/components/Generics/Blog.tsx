/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Article } from "models/articless";
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";

interface ArchiveProps {
  archive: Article[];
}

SwiperCore.use([Autoplay, Navigation]);
const BlogSlider = (props: ArchiveProps) => {
  const data = props.archive.slice(-3);

  return (
    <>
      <div key={v4()} className="slider-news">
        <div className="swiper-container swiper-group-1">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-5",
              nextEl: ".swiper-button-next-5",
            }}
            className="swiper-wrapper pb-70 pt-5"
          >
            {data.map((item, i) => {
              const uniquePath = `/articles/${item.id}`;
              return (
                <SwiperSlide key={"blog_" + item.id}>
                  <div className="swiper-slide active">
                    <div className="block-news">
                      <div className="item-news">
                        <div className="row">
                          <div className="col-xl-6 col-lg-12">
                            <div className="img-news">
                              <Link href={uniquePath}>
                                <a>
                                  <img
                                    src={
                                      process.env.NEXT_PUBLIC_STRAPI_URL +
                                      item.attributes.bigpicture?.data
                                        .attributes.url
                                    }
                                    alt="Agon"
                                  />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-12">
                            <div className="right-news card-grid-style-4 mb-0">
                              <span className="tag-dot">
                                {item.attributes.category}
                              </span>
                              <Link href={uniquePath}>
                                <a className="text-heading-4">
                                  {item.attributes.articlename}
                                </a>
                              </Link>

                              <p className="text-body-text color-gray-500 text-desc-fix-h">
                                {item.attributes.articleintro}
                              </p>
                              <div className="blog-img-user">
                                <div className="img-user img-user-round">
                                  <img
                                    src={
                                      process.env.NEXT_PUBLIC_STRAPI_URL +
                                      item.attributes.foto?.data.attributes.url
                                    }
                                    alt="Agon"
                                  />
                                </div>
                                <h4 className="text-heading-6 color-gray-900">
                                  {item.attributes.author}
                                </h4>
                                <p className="text-body-small color-gray-500">
                                  {item.attributes.date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="swiper-button-next swiper-button-next-5" />
        <div className="swiper-button-prev swiper-button-prev-5" />
      </div>
    </>
  );
};

export default BlogSlider;
