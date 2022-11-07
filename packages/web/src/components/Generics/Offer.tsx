/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { ImageInterface } from "models/image";
import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export interface OfferProps {
  title: string;
  text: string;
  icon: ImageInterface;
}

type SwiperData = {
  offers: OfferProps[];
};

SwiperCore.use([Autoplay, Navigation]);
const OfferSlider = (props: SwiperData) => {
  return (
    <>
      <div className="box-swiper">
        <div className="swiper-container swiper-group-4">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-5",
              nextEl: ".swiper-button-next-5",
            }}
            className="swiper-wrapper pb-70 pt-5"
          >
            {props.offers.map((item) => (
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="card-grid-style-2 hover-up">
                    <div className="grid-2-img">
                      <img
                        src={
                          process.env.NEXT_PUBLIC_STRAPI_URL +
                          item.icon?.data.attributes.url
                        }
                        alt="Agon"
                      />
                    </div>
                    <h3 className="text-heading-5 mt-20">{item.title}</h3>
                    <p className="text-body-text color-gray-600 mt-20">
                      {item.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OfferSlider;
