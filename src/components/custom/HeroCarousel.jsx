import pic1 from "../../assets/projects/Incubator-circuit.jpg";
import pic2 from "../../assets/projects/IubBongomarine.png";
import pic3 from "../../assets/projects/Shuchimita-circuit.jpg";
import pic4 from "../../assets/projects/Shuchimita.png";
import overlayPic from "../../assets/transparentOverlay.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={5}
      slidesPerView={1}
      loop={true}
      freeMode={true}
      autoplay={{ delay: 4000 }}
      className="max-w-sm"
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<div class="${className} custom-bullet"></div>`;
        },
      }}
    >
      <style jsx>{`
        .swiper-pagination {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateY(-25px);
          display: flex;
          justify-content: center;
          gap: 6px; /* Space between bullets */
        }

        .custom-bullet {
          width: 8px; /* w-8 */
          height: 8px; /* h-8 */
          background-color: gray;
          border-radius: 9999px; /* rounded-full */
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 16px; /* Adjust as needed for larger active bullets */
          height: 8px; /* Adjust as needed for larger active bullets */
          background-color: white;
        }
      `}</style>
      ;
      <SwiperSlide>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center rounded-3xl"
            src={pic2}
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-full object-contain rounded-3xl pointer-events-none"
            src={overlayPic}
            alt="Overlay"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-opacity-60  text-white">
            <h3 className="text-xl font-bold">IUB Bongomarine</h3>
            <p className="text-sm">An Underwate Automated Vehicle</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center rounded-3xl"
            src={pic3}
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-full object-contain rounded-3xl pointer-events-none"
            src={overlayPic}
            alt="Overlay"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-opacity-60  text-white">
            <h3 className="text-xl font-bold">Shuchimita Circuit</h3>
            <p className="text-sm">Prototype of a circuit using breadboard</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center rounded-3xl"
            src={pic4}
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-full object-contain rounded-3xl pointer-events-none"
            src={overlayPic}
            alt="Overlay"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-opacity-60  text-white">
            <h3 className="text-xl font-bold">Shuchimita</h3>
            <p className="text-sm">IoT Based Sanitary Napkin Dispenser</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            className="w-full h-full object-cover object-center rounded-3xl"
            src={pic1}
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-full object-contain rounded-3xl pointer-events-none"
            src={overlayPic}
            alt="Overlay"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-opacity-60  text-white">
            <h3 className="text-xl font-bold">Incubator Circuit</h3>
            <p className="text-sm">Prototype of a circuit using breadboard</p>
          </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default HeroCarousel;
