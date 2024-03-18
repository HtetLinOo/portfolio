import React from "react";
import { useSwiper } from "swiper/react";

function SwipperButtons() {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns">
      <button className="prev bg-light dark:bg-darksec" onClick={() => swiper.slidePrev()}>
        <img src="/slider_left.png" alt="left" />
      </button>
      <button className="next bg-light dark:bg-darksec" onClick={() => swiper.slideNext()}>
        <img src="/slider_right.png" alt="right" />
      </button>
    </div>
  );
}

export default SwipperButtons;
