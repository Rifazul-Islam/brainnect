"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
const Reviews = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center ">
        <span className="text-red-600 border-red-400 border p-1 px-4 rounded-md cursor-pointer">
          Review
        </span>
        <h2 className="text-3xl font-semibold my-2 mt-3">
          What Our Client Says
        </h2>
      </div>

      <div className="lg:px-40  ">
        <>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews?.map((review) => (
              <SwiperSlide key={review?.id} className="my-12 min-h-full">
                <div className="card  bg-base-100 shadow-xl border ">
                  <div className="flex justify-between px-3 pt-3">
                    <div className="flex items-center gap-2 pl-3">
                      <Image
                        className="w-12 h-12 rounded-full"
                        src={review?.image}
                        width={300}
                        height={50}
                        alt=""
                      />
                      <div className="p-3">
                        <h2 className="font-bold text-[19px]">
                          {review?.name}
                        </h2>
                        <h3 className="font-semibold"> {review?.position} </h3>
                      </div>
                    </div>

                    <div>
                      <Image
                        className="w-12 h-12 rounded-full"
                        src="https://s3-alpha-sig.figma.com/img/e06b/aa00/f42aee9e8e95f37690b43f72d1bea5f8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qpfWoGT9fSUk~k1jWoVmUopl3QVzQ-qHt-UlQKjDjlsdTQnkxZBAdtBJteIw6HSeI3zCEJFBGBLcilE099na36ybVDiKtfIyUwiDOPCygVoDPZ6~d2xdhhqelOql0LmY-BDxq16ni5-T7Nvvi5lCAhNnXcvR7ODIZj4VcTPQ~Ov1S8OXUYdBmVtIkuSTfBbciuwp0GejuyN1XFEg2ZWNXPdkkFo1n5xrOgTfVQ9GocQpQ6On2k3-2U1tXXQ~nOxJsw9QEn91WBnP3NKxNOw7zcpotgmgBoSH2ARzOfpzKcqtGKMljQwsT3Jl5vm7iQVapPSnhoHXHzydHBQogjfafw__"
                        width={300}
                        height={50}
                        alt=""
                      />
                    </div>
                  </div>

                  <p className="border "></p>
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
