import pic1 from "../../assets/projects/Incubator-circuit.jpg";
import pic2 from "../../assets/projects/IubBongomarine.png";
import pic3 from "../../assets/projects/Shuchimita-circuit.jpg";
import pic4 from "../../assets/projects/Shuchimita.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroCarousel = () => {
  const renderSlide = (imgSrc, title, description) => (
    <div className="relative w-full aspect-[4/5]">
      <img
        className="w-full h-full object-cover object-center rounded-t-2xl rounded-b-3xl"
        src={imgSrc}
        alt=""
      />
      <div
        className="absolute bottom-0 w-full h-[80px] rounded-b-2xl"
        style={{ backgroundColor: "var(--bg-color-light, #b1cfee)" }}
      ></div>
      <div className="absolute bottom-0 left-0 w-full p-6 bg-opacity-60">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );

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
          display: flex;
          justify-content: center;
          gap: 6px; /* Space between bullets */
        }

        .custom-bullet {
          width: 6px;
          height: 6px;
          background-color: gray;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 12px;
          height: 6px;
          background-color: white;
        }
      `}</style>

      <SwiperSlide>
        {renderSlide(
          pic2,
          "IUB Bongomarine",
          "An Underwater Automated Vehicle"
        )}
      </SwiperSlide>
      <SwiperSlide>
        {renderSlide(
          pic3,
          "Shuchimita Circuit",
          "Prototype of a circuit using breadboard"
        )}
      </SwiperSlide>
      <SwiperSlide>
        {renderSlide(pic4, "Shuchimita", "IoT Based Sanitary Napkin Dispenser")}
      </SwiperSlide>
      <SwiperSlide>
        {renderSlide(
          pic1,
          "Incubator Circuit",
          "Prototype of a circuit using breadboard"
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
