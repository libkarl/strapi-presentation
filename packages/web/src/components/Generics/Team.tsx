/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";
import Member, { MemberProps } from "./Member";

export interface TeamSliderProps {
  id: number;
  __component: string;
  title: string;
  description: string;
  members: MemberProps[];
}

SwiperCore.use([Autoplay, Navigation]);
const TeamSlider = (props: TeamSliderProps) => {
  const sliderData = [props.members.slice(0, 4), props.members.slice(-4)];

  return (
    <>
      <div className="box-swiper">
        <div className="swiper-container swiper-group-1">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-4",
              nextEl: ".swiper-button-next-4",
            }}
            className="swiper-wrapper pb-70 pt-5"
          >
            {sliderData.map((item) => (
              <SwiperSlide key={v4()}>
                <div className="swiper-slide active">
                  <div className="row">
                    {item.map((member) => {
                      return <Member key={v4()} {...member} />;
                    })}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-button-next swiper-button-next-4" />
        <div className="swiper-button-prev swiper-button-prev-4" />
      </div>
    </>
  );
};

export default TeamSlider;
