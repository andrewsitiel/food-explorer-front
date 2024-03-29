import { Container } from "./styles";
import { CardItem } from "../CardItem";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Autoplay, Keyboard, Mousewheel, Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import THEME from "../../styles/theme";

export function Slider({ Items }) {

  const SwiperButtonBackward = ({ children }) => {
    const swiper = useSwiper();

    return (
      <button
        style={{ left: 0, background: THEME.COLORS.SWIPER_GRADIENT_BACKWARD }}
        onClick={() => swiper.slidePrev()}
      >
        {children}
      </button>
    )
  }

  const SwiperButtonForward = ({ children }) => {
    const swiper = useSwiper();

    return (
      <button
        style={{ right: 0, background: THEME.COLORS.SWIPER_GRADIENT_FORWARD }}
        onClick={() => swiper.slideNext()}
      >
        {children}
      </button>
    )
  }

  return (
    <Container>
      <Swiper
        modules={[Autoplay, Mousewheel, Keyboard, Navigation]}
        mousewheel={true}
        keyboard={true}
        autoplay
        slidesPerView="auto"
        spaceBetween={27}
        slidesOffsetAfter={100}
      >
        <SwiperButtonBackward>
          <IoIosArrowBack />
        </SwiperButtonBackward>

        {
          Items &&
          Items.map((item, index) => {

            return (
              <SwiperSlide key={index}>

                <CardItem item={item} delay={index} />

              </SwiperSlide>
            )
          })
        }

        <SwiperButtonForward>
          <IoIosArrowForward />
        </SwiperButtonForward>
      </Swiper>
    </Container >
  )
}