"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import quoteImg from '@/assets/quote.png'

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center ">
        <span className="our_badge">
          Reviews
        </span>
        <h2 className="primary_title">
          What Our Client Says
        </h2>
      </div>

      <div>
        <>
          <Swiper
            slidesPerView={screenWidth > 768 ? 2 : 1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews?.map((review) => (
              <SwiperSlide key={review?.id} className="my-6">
                <div className="review_card">
                  <div className="flex justify-between px-3 pt-3">
                    <div className="flex items-center gap-2 pl-3">
                      <Image
                        src={review?.image}
                        width={300}
                        height={50}
                        alt="reviewer image"
                      />
                      <div className="p-3">
                        <h2 className="font-semibold text-[19px]">
                          {review?.name}
                        </h2>
                        <h3 className="font-semibold text-slate-600"> {review?.position} </h3>
                      </div>
                    </div>

                    <div>
                      <Image
                        src={quoteImg}
                        alt="quote"
                      />
                    </div>
                  </div>

                  <div className="border-b-2"></div>
                  <div className="my-5 px-4 ">
                    <p> {review?.description} </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Reviews;
