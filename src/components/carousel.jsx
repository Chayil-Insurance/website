import { useState, useEffect } from 'react'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'
// import { motion, AnimatePresence } from 'framer-motion'

const Carousel = ({ slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        className="grid grid-cols-4 transition-transform ease-out duration-1000"
        style={{
          transform: `translateX(-${curr * (100 / slides.length)}%)`,
          width: `${slides.length * 100}%`,
        }}>
        {slides.map((s, index) => (
          <div key={index}>
            <img
              className="w-full md:h-[800px] h-[350px]  object-cover object-center"
              src={s.url}
              alt={`slider`}
            />
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="w-full h-full flex flex-col justify-center items-start backdrop-brightness-75 px-6 py-20  md:px-40 md:py-60 pb-40 mx-auto  md:pb-72">
              <h1 className="md:text-6xl text-3xl font-bold md:max-w-lg max-w-sm text-white">
                {s.title}
              </h1>
              <p className="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl text-white">
                {s.description}
              </p>

              <div className="flex flex-wrap flex-row justify-center">
                <button
                  type="button"
                  className="md:px-8 px-6 py-3 m-2 text-lg font-semibold rounded bg-[#A1E1FA] text-[#3B7197]">
                  Get started
                </button>
                <button
                  type="button"
                  className="md:px-8 px-6 py-3 m-2 text-lg border rounded border-[#A1E1FA] text-white">
                  Learn more
                </button>
              </div>
            </motion.div> */}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <MdChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <MdChevronRight />
        </button>
      </div>
      <div className="absolute bottom-2 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${
                curr === i ? 'p-0.5' : 'bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
