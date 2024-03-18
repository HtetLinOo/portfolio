import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwipperButtons from "./SwipperButtons";

function SwipperProjects() {
  const projectsData = [
    {
      name: "Legacy",
      src: "/legacy.png",
      url: "https://legacy.ne.jp/",
    },
    {
      name: "Legacy Cloud",
      src: "/legacy-cloud.jpg",
      url: "https://legacy.ne.jp/legacy-cloud/",
      description: "Website for japanese company, developed with my team while working in Qualy Myanmar. Power by the WordPress.",
    },
    {
      name: "Legacy Recruit",
      src: "/legacy-recruit.png",
      url: "https://legacy.ne.jp/recruit/",
    },
    {
      name: "Pari",
      src: "/pari.jpg",
      url: "https://www.pari.go.jp/",
      description: "Website for japanese research institude, power by the Movable Type CMS system.",
    },
    {
      name: "アトリエMAR",
      src: "/imar.png",
      url: "https://yukoumesaki.com/",
      description: "",
    },
    {
      name: "Shinyukai",
      src: "/shinyukai.png",
      url: "http://shinyukai-r.or.jp/",
    },
    {
      name: "Numazaki",
      src: "/numazaki.jpg",
      url: "https://shinyukai-r.or.jp/numazaki/",
      description: "Website for japanese hospital, developed with my team while working in Qualy Myanmar. Power by the WordPress.",
    },
    {
      name: "Enishi",
      src: "/enishi.png",
      url: "https://enishi-inc.co.jp/",
    },
    {
      name: "Shinyukai",
      src: "/shinyukai.png",
      url: "http://shinyukai-r.or.jp/",
    },
    {
      name: "Qualy Recruit",
      src: "/recruit.png",
      url: "https://recruit.qualymm.com",
      description: "Qualy Myanmar Recruitment website is a project developed using React for the frontend, Express for the backend, and Firebase for additional functionality. The website aims to streamline the recruitment process for Qualy Myanmar, offering a user-friendly interface for job seekers and efficient management tools for administrators.",
    },
    {
      name: "Qualy Myanmar",
      src: "/qm.png",
      url: "https://qualymm.com",
    },
    {
      name: "KKLC",
      src: "/kklc.png",
      url: "https://kklc.jp/",
    },
    {
      name: "Medical Corporation Yurikago",
      src: "/yurikago.png",
      url: "https://yurikago.or.jp/",
    },
    {
      name: "Skincare",
      src: "/skincare.png",
      url: "https://gorilla.clinic/operation/skincare/",
    },
  ];
  return (
    <div className="slider-block">
      <div className="slider">
        <Swiper
          // slidesPerView={3}
          // spaceBetween={40}
          // navigation={true}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            401: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            769: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <a href={project.url} target="__blank" className="item font-bold text-sm text-lightsec dark:text-darksec">
                <div className="shadow-lg bg-white">
                  <img className="h-52 w-full object-contain shadow-lg" src={project.src} alt={project.name} />
                  {/* <p className="p-3 bg-slate-300 h-52">{project.description}</p> */}
                  <h3 className="text-xl bg-slate-300 text-center py-5">{project.name}</h3>
                </div>
              </a>
            </SwiperSlide>
          ))}
          <SwipperButtons />
        </Swiper>
      </div>
    </div>
  );
}

export default SwipperProjects;
