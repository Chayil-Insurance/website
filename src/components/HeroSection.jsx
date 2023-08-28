import { useState, useEffect, useRef } from "react";
import { slide } from "../data";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";

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

  const AnimatedStat = ({ value, label }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    const animationRef = useRef(null);

    useEffect(() => {
      animationRef.current = animate(count, value, { duration: 10 });
      return () => {
        if (animationRef.current) {
          animationRef.current.stop();
        }
      };
    }, [count, value]);

    useEffect(() => {
      if (count.get() === value && animationRef.current) {
        animationRef.current.stop();
      }
    }, [count, value]);

    return (
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <motion.div className="text-6xl font-bold text-white">
          {rounded}
        </motion.div>
        <div className="text-lg text-white font-medium">{label}</div>
      </motion.div>
    );
  };
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
            className="w-full h-full flex flex-col justify-center items-start backdrop-brightness-75   px-40 py-60 pb-24 mx-auto  lg:pb-72"
          >
            <h1 className="text-6xl font-bold max-w-lg text-white">
              {slide[currentIndex].title}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">
              {slide[currentIndex].description}
            </p>

            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#A1E1FA] text-[#3B7197]"
              >
                Get started
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded border-[#A1E1FA] text-white"
              >
                Learn more
              </button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="w-5/6 h-full  mx-auto mb-2 -mt-20 lg:-mt-36 bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100">
        <div className="px-4 flex justify-evenly items-center">
          <AnimatedStat value={20} label="Years of Experience" />
          <AnimatedStat value={20} label="Satisfied Customers" />
          <AnimatedStat value={50} label="Policies Sold" />
          <AnimatedStat value={50} label="Claims Processed" />
          <AnimatedStat value={15} label="Expert Team" />
          <AnimatedStat value={10} label="Policies Offered" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
