/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef } from "react";

const CardSlider = ({ slider, api }) => {
  const sliderID = useRef(slider);

  useEffect(() => {
    const sliders = sliderID.current;
    sliders.style.overflow = "hidden";
  }, []);

  const handlePrevious = () => {
    const sliders = sliderID.current;
    sliders.scrollLeft -= sliders.offsetWidth - 200;
  };

  const handleNext = () => {
    const sliders = sliderID.current;
    sliders.scrollLeft += sliders.offsetWidth - 200;
  };

  return (
    <div className="flex w-full h-[160px] bg-primary relative justify-center items-center mb-4">
      <FaChevronLeft
        size={28}
        className="bg-secondary text-softLight hover:opacity-80 rounded-full p-2 cursor-pointer absolute -left-3 z-20"
        onClick={handlePrevious}
      />
      <div
        className="w-full whitespace-nowrap overflow-x-auto scroll-smooth"
        ref={sliderID}
      >
        {api.map((item, index) => (
          <Link
            to={`/anime/${item.mal_id}/${item.title}/characters`}
            className="inline-block m-2"
            key={index}
          >
            <div className="relative md:w-60 flex flex-col">
              <div className="absolute inset-0 hover:bg-primary hover:opacity-40 z-10 transition-all duration-300"></div>
              <img
                src={item?.images?.jpg?.large_image_url}
                alt={item?.images?.jpg?.large_image_url}
                className="rounded-md object-cover w-full max-h-40"
              />
              <p className="text-softLight p-1 md:p-2 font-poppins text-sm font-bold absolute bottom-1 left-1 md:bottom-2 md:left-2 whitespace-normal">
                {item?.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <FaChevronRight
        size={28}
        className="bg-secondary text-softLight hover:opacity-80 rounded-full p-2 cursor-pointer absolute -right-3 z-20"
        onClick={handleNext}
      />
    </div>
  );
};

export default CardSlider;
