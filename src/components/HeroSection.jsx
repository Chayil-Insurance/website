import { useState, useEffect } from 'react'
import { slide } from '../data'
import CountUp from './CountUp'
import Carousel from './carousel'

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    const isLastSlide = currentIndex === slide.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  return (
    <section>
      <div className="mt-16">
        <Carousel slides={slide} autoSlide={true} />
      </div>
      <div className="md:w-5/6 w-full h-full  mx-auto mb-2 md:mt-12 mt-4 lg:-mt-52 bg-white-500 rounded-md bg-clip-padding backdrop-filter  md:backdrop-blur-sm  backdrop-blur-lg  bg-opacity-70 border border-gray-100">
        <div className="md:px-4 px-2 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-3">
          <CountUp end={20} label="Years of Experience" />
          <CountUp end={20} label="Satisfied Customers" />
          <CountUp end={50} label="Policies Sold" />
          <CountUp end={50} label="Claims Processed" />
          <CountUp end={15} label="Expert Team" />
          <CountUp end={10} label="Policies Offered" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
