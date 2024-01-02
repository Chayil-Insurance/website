import Button from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import Layout from '../components/Layout'

const ContactPage = () => {
  return (
    <Layout>
      {/* header */}
      <div className="h-80 bg-center w-full flex justify-center items-center bg-[url(https://livedemo.bolvosites.com/guardwp1/wp-content/uploads/sites/41/2016/03/1-3.jpg)] ">
        <h3 className="text-white text-5xl font-bold">CONTACT US</h3>
      </div>
      {/* header */}

      <div className="container grid md:grid-cols-2 grid-cols-1  md:gap-12 gap-0  md:px-32 px-4 lg:mb-32 mb-0">
        <div className="w-full md:-mt-12 mt-0	px-4 md:px-4 py-12  bg-[#4301B2] rounded">
          <div className="flex flex-col text-white ">
            <h3 className="font-bold uppercase text-xl mt-8">We Always Send</h3>
            <h2 className="font-bold uppercase text-4xl mb-8">
              Quick Response
            </h2>
            <p className="text-white">
              -: Please don&apos;t hesitate to contact us on any related query
              to our service and we will get back to you as soon as possible.
            </p>
            <p className="border-solid border-t-4 w-10 my-6 border-sky-500"></p>

            <div className="flex my-4 lg:mx-4 md:mx-0 mx-0 mt-8">
              <div className="flex flex-col">
                <p className="text-white">-: 0746019481</p>
                <p className="text-white">-: info@Chayilinsurance.co.ke</p>
                <p className="text-white">-: Nairobi, Kenya</p>
                <p className="text-white">
                  -: Monday to Monday: 24hrs Available
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-1/4 mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2136998707871!2d36.800051369594115!3d-1.2592163999205435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172bbd2d1199%3A0x871caf1d0b72af4!2sWestern%20Heights!5e0!3m2!1sen!2ske!4v1702596920697!5m2!1sen!2ske"
            // width="650"
            // height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="lg:w-[650px] md:w-[380px] w-[340px] h-[450px] "></iframe>
        </div>
      </div>

      {/* form */}
      <div className="flex justify-center items-center mx-auto w-screen md:px-32 px-4 container  pb-16 pt-16">
        <div className="w-full  flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
          <div className="flex justify-center flex-col items-center pb-7 md:pb-9 mt-7 md:-mt-1.5">
            <p>Minding your Business</p>
            <h4 className="text-2xl 2xl:text-3xl font-bold text-heading">
              SEND US A MESSAGE
            </h4>
          </div>
          <form
            className="w-full mx-auto flex flex-col justify-center "
            noValidate>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col md:flex-row space-y-0 gap-4">
                <div className="w-full md:w-1/2 ">
                  <Input label="Name" placeholder="Enter name" type="name" />
                </div>
                <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                  <Input label="Email" placeholder="Enter email" type="email" />
                </div>
              </div>
              <div className="relative">
                <Input
                  label="Subject"
                  placeholder="Enter subject"
                  type="text"
                />
              </div>
              <div className="relative mb-4">
                <Textarea label="Message" placeholder="Enter your message" />
              </div>
              <div className="relative">
                <Button type="submit" name="Sumbit Query" color="#4301B2" />
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* form */}
    </Layout>
  )
}

export default ContactPage
