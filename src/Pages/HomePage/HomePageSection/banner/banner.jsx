import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";

const banner = () => {
  return (
    <div className="pl-8 bg-pink-50">
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-3">
          <h1 className=" text-4xl font-semibold text-center md:text-start font-exo">
            <Typewriter
              words={["বাসাবাড়িতে কাজ করার জন্য বিশ্বাসযোগ্য লোকজন বা কাজের বুয়া খুঁজে বের করার সহজ উপায়"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <span className="text-textsecondary font-bold text-4xl">.</span>
          </h1>
          <p className="text-center md:text-start">
            আপনারা বাসায় বসে বিস্বাস যোগ্য কাজ এর বুয়া খুঁজুন একদম সহজে  কোনো ঝামেলা নাই, পার্টটাইম,ফুল টাইম বা বাসা বাড়ির জন্য সিকিউরিটি গার্ড  খুজুন খুব সহজে। আমরা আপনাদের কি কষ্টটাকে নিয়ে আছসি একদম হাতের নাগালএ। 
          </p>
          
        </div>
        <div className="w-full md:w-1/2">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://i.ibb.co.com/vx1654dR/pexels-tima-miroshnichenko-6195951.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/QjMmtHqh/pexels-polina-tankilevitch-4440533.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/7dtLvp0R/pexels-tima-miroshnichenko-6195130.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default banner
