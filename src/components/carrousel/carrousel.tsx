"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import fullStack from "../../assets/full-stack.png";
import frontEnd from "../../assets/front-end.png";
import modelagem from "../../assets/modelagem-de-software.png";
import userExperience from "../../assets/user-experience.png";
import java from "../../assets/java-foundations.png";
import reactNative from "../../assets/react-native.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import Image from "next/image";
import Link from "next/link";

export default function Carrousel() {
  return (
    <>
      {/* MOBILE */}
      <main className="flex lg:hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={-10}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            // slideShadows: true,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link
              href="https://drive.google.com/file/d/1UxFQfMo8JkrDsnMHmjO_ZQyuZQkjF3dM/view"
              target="_blank"
            >
              <Image className="img" src={fullStack} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://drive.google.com/file/d/1rtJrd_X3sdVqvApLphwjOxvXQ1YtpKta/view"
              target="_blank"
            >
              <Image className="img" src={frontEnd} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://drive.google.com/file/d/1zonbXCfhoaWhSoKH2ABXj7mRBFxplHn_/view"
              target="_blank"
            >
              <Image className="img" src={java} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://drive.google.com/file/d/1IOrxXhEmWROvd4t2ZtR_5OyuGWg_Iywu/view"
              target="_blank"
            >
              <Image className="img" src={modelagem} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://drive.google.com/file/d/14SECPQ_UAF1KP4L8zdz86EGJ4GbtPXCN/view"
              target="_blank"
            >
              <Image className="img" src={reactNative} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://certificados.descomplica.com.br/graduacao/33211147b4cc5926974916db2c834e7b1ac95b7a3cca6d1e61b48b9f667fbfd7"
              target="_blank"
            >
              <Image className="img" src={userExperience} alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </main>

      {/* DESKTOP */}
      <main className="hidden lg:flex">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{ delay: 3000}}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          spaceBetween={50}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link
              href="https://drive.google.com/file/d/1UxFQfMo8JkrDsnMHmjO_ZQyuZQkjF3dM/view"
              target="_blank"
            >
              <Image className="img" src={fullStack} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://drive.google.com/file/d/1rtJrd_X3sdVqvApLphwjOxvXQ1YtpKta/view"
              target="_blank"
            >
              <Image className="img" src={frontEnd} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://drive.google.com/file/d/1zonbXCfhoaWhSoKH2ABXj7mRBFxplHn_/view"
              target="_blank"
            >
              <Image className="img" src={java} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://drive.google.com/file/d/1IOrxXhEmWROvd4t2ZtR_5OyuGWg_Iywu/view"
              target="_blank"
            >
              <Image className="img" src={modelagem} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://drive.google.com/file/d/14SECPQ_UAF1KP4L8zdz86EGJ4GbtPXCN/view"
              target="_blank"
            >
              <Image className="img" src={reactNative} alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="https://certificados.descomplica.com.br/graduacao/33211147b4cc5926974916db2c834e7b1ac95b7a3cca6d1e61b48b9f667fbfd7"
              target="_blank"
            >
              <Image className="img" src={userExperience} alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
}
