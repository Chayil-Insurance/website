import { useState, useRef, useEffect } from 'react'
import Transition from '../utils/Transition'
import explore from '../assets/Images/explore.png'
import svg from '../assets/Images/28910563_7506911.svg'

function Features() {
  const [tab, setTab] = useState(1)

  const tabs = useRef(null)

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative w-full md:px-32 px-4">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="mx-auto text-center pb-12 md:pb-16">
            <h2 className="lg:text-5xl text-4xl font-bold mb-4">
              Explore the solutions
            </h2>
            <p className="md:text-xl text-base text-gray-600">
              Discover Insurance Solutions That Care Dive into a realm of
              insurance solutions crafted with your needs in mind. We`re
              dedicated to protecting what matters most to you.
            </p>
          </div>

          {/* Section content */}
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
            {/* Content */}
            <div className="w-full mx-auto md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="font-bold leading-snug tracking-tight mb-1">
                  Powerful suite of tools
                </h3>
                <p className=" text-gray-600">
                  Empowering Your Insurance Journey Harness the strength of our
                  formidable insurance tools. We`re here to simplify your
                  insurance experience and provide support when it`s needed.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(1)
                  }}>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Building the Simple Ecosystem
                    </div>
                    <div className="text-gray-600">
                      Streamlined Collaboration, Secure Future Join our
                      ecosystem designed for effortless collaboration. We`re
                      committed to enhancing security and simplifying
                      administrative tasks for your team.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(2)
                  }}>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Insurance Excellence Redefined
                    </div>
                    <div className="text-gray-600">
                      Experience Excellence, Trust in Insurance Redefining
                      excellence in the insurance industry. Trust us to
                      safeguard your interests and provide top-tier solutions.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(3)
                  }}>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Your Insurance Partner
                    </div>
                    <div className="text-gray-600">
                      Committed to Your Peace of Mind We`re not just an
                      insurance agency; we`re your partner in peace of mind.
                      Explore our solutions and experience the difference.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="w-full mx-auto  mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16">
                  <div className="relative inline-flex flex-col">
                    <img
                      src={explore}
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: '50%' }}
                    />
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={svg}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16">
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src="/images/features-bg.png"
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src="/images/features-element.png"
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: '30%' }}
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16">
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src="/images/features-bg.png"
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src="/images/features-element.png"
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: '30%' }}
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
