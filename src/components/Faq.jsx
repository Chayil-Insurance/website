import { faq } from "../data";

const Faq = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracki text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          {faq.map((item, index) => (
            <details key={index}>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {item.title}
              </summary>
              <div className="px-4 pb-4">
                <p>{item.description}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
