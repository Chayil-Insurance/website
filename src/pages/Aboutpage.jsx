import Layout from '../components/Layout'
import onlineinsurance from '../assets/Images/online-insurance.jpg'
import insurances from '../assets/Images/21826.jpg'

const Aboutpage = () => {
  return (
    <Layout>
      <section className="mt-12">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold text-center sm:text-5xl ">
              About us
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-base text-center text-gray-400">
              At Chayil Insurance, we redefine insurance services with a
              commitment to excellence and expertise. Our agency stands out for
              its unwavering dedication to providing you with top-notch
              insurance solutions.
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                Why Choose Chayil Insurance:
              </h3>

              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#00165A] text-[#BFCFFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Expert Guidance
                    </h4>
                    <p className="mt-2 text-gray-400">
                      With a team of seasoned professionals, we offer you the
                      expertise you need to make informed insurance decisions.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#00165A] text-[#BFCFFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Tailored Policies
                    </h4>
                    <p className="mt-2 text-gray-400">
                      We understand that one size doesn`t fit all. That`s why we
                      create insurance solutions that are as unique as you are.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#00165A] text-[#BFCFFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Customer-Centric Approach
                    </h4>
                    <p className="mt-2 text-gray-400">
                      Your satisfaction is our priority. We take pride in
                      delivering exceptional service and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={onlineinsurance}
                alt="onlineinsurance"
                className="mx-auto rounded-lg shadow-lg bg-gray-500"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                  Innovation
                </h3>
                <p className="mt-3 text-lg text-gray-400">
                  We embrace the latest technologies to streamline processes and
                  make managing your insurance simple and efficient.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#00165A] text-[#BFCFFF]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Trustworthy Partners{' '}
                      </h4>
                      <p className="mt-2 text-gray-400">
                        We work with reputable insurance providers to ensure you
                        get the coverage you can rely on.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#00165A] text-[#BFCFFF]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Claims Excellence:
                      </h4>
                      <p className="mt-2 text-gray-400">
                        When you need us most, we`re there. Our claims experts
                        are dedicated to helping you navigate the process
                        smoothly and efficiently, ensuring you get the support
                        you deserve.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#00165A] text-[#BFCFFF]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Community Engagement
                      </h4>
                      <p className="mt-2 text-gray-400">
                        We`re not just your insurance agency; we`re your
                        neighbors. Chayil Insurance takes pride in giving back
                        to the communities we serve, making a positive impact
                        beyond insurance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={insurances}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Aboutpage
