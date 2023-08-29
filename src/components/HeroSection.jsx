import { useState, useEffect } from "react";
import { slide } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "./CountUp";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <section>
      <AnimatePresence>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="w-full h-5/6 bg-center bg-cover bg-no-repeat bg-opacity-5"
          style={{
            backgroundImage: `url(${slide[currentIndex].url})`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="w-full h-full flex flex-col justify-center items-start backdrop-brightness-75 px-6 py-20  md:px-40 md:py-60 pb-40 mx-auto  md:pb-72"
          >
            <h1 className="md:text-6xl text-3xl font-bold md:max-w-lg max-w-sm text-white">
              {slide[currentIndex].title}
            </h1>
            <p className="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl text-white">
              {slide[currentIndex].description}
            </p>

            <div className="flex flex-wrap flex-row justify-center">
              <button
                type="button"
                className="md:px-8 px-6 py-3 m-2 text-lg font-semibold rounded bg-[#A1E1FA] text-[#3B7197]"
              >
                Get started
              </button>
              <button
                type="button"
                className="md:px-8 px-6 py-3 m-2 text-lg border rounded border-[#A1E1FA] text-white"
              >
                Learn more
              </button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="md:w-5/6 w-full h-full  mx-auto mb-2 md:-mt-20 -mt-36 lg:-mt-36 bg-white-500 rounded-md bg-clip-padding backdrop-filter  md:backdrop-blur-sm  backdrop-blur-lg  bg-opacity-70 border border-gray-100">
        <div className="md:px-4 px-2 grid md:grid-cols-6 grid-cols-3">
          <CountUp end={20} label="Years of Experience" />
          <CountUp end={20} label="Satisfied Customers" />
          <CountUp end={50} label="Policies Sold" />
          <CountUp end={50} label="Claims Processed" />
          <CountUp end={15} label="Expert Team" />
          <CountUp end={10} label="Policies Offered" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
