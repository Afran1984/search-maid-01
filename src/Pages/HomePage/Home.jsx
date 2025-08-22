import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
          </p>
          <div className="text-center">
            <Link to="/apoinment">
              <button className=" bg-[#F63E7B] px-4 py-2 hover:scale-110 cursor-pointer transition-all rounded-sm text-white ">
                Get an Appointment
              </button>
            </Link>
          </div>
          
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
              <img src="https://i.ibb.co.com/LhsbQP5q/me-02.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/LhsbQP5q/me-02.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/hR3Bd1K0/me-03.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
 

export default Home
