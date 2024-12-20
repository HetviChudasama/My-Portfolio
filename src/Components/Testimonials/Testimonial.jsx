import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import profile images
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "We prioritize delivering a seamless and personalized client experience by focusing on clear communication, understanding needs, and exceeding expectations. Our commitment to quality and collaboration ensures that every project runs smoothly, fostering trust and lasting relationships."
    },
    {
      img: profilePic2,
      review:
        "We prioritize delivering a seamless and personalized client experience by focusing on clear communication, understanding needs, and exceeding expectations. Our commitment to quality and collaboration ensures that every project runs smoothly, fostering trust and lasting relationships.",
    },
    {
      img: profilePic3,
      review:
        "We prioritize delivering a seamless and personalized client experience by focusing on clear communication, understanding needs, and exceeding expectations. Our commitment to quality and collaboration ensures that every project runs smoothly, fostering trust and lasting relationships.",
    },
    {
      img: profilePic4,
      review:
        "We prioritize delivering a seamless and personalized client experience by focusing on clear communication, understanding needs, and exceeding expectations. Our commitment to quality and collaboration ensures that every project runs smoothly, fostering trust and lasting relationships.",
    },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>From me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* Slider */}
      <Swiper modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }}>
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt={`Client ${index + 1}`} />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
