import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Karan Sharma",
    role: "Chairman",
    message:
      "The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.",
    image: "test1.png",
  },
  {
    id: 2,
    name: "Krish Kumar",
    role: "Associate",
    message:
      "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.",
    image: "test1.png",
  },
  {
    id: 3,
    name: "Smriti Prabha",
    role: "Member",
    message:
      "Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again.",
    image: "test1.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="my-10">
      <div className="sm:10/12 lg:w-7/12 mx-auto text-center font-sans ">
        <h2 className="text-4xl font-bold mb-5">
          TESTIMONIALS
          <span className="block w-40 h-0.5 bg-black mt-4 mx-auto"></span>
        </h2>
        <div className="grid grid-rows-1 pb-16">
          <div className="absolute">
            <svg
              className="sm:hidden lg:block"
              enable-background="new 796 698 200 200"
              height="100"
              viewBox="796 698 200 200"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m885.208 749.739v-40.948c-49.189 0-89.208 40.019-89.208 89.209v89.209h89.208v-89.209h-48.26c0-26.61 21.65-48.261 48.26-48.261z" />
              <path d="m996 749.739v-40.948c-49.19 0-89.209 40.019-89.209 89.209v89.209h89.209v-89.209h-48.26c0-26.61 21.65-48.261 48.26-48.261z" />{" "}
            </svg>
          </div>
          <div className="flex justify-center relative top-16">
            <div className="sm:w-8/12 lg:w-5/6 lg:h-56 sm: h-96 bg-neutral-700 text-neutral-50 rounded-lg flex items-center justify-center p-5 relative shadow-lg">
              <div className="grid grid-cols-1 place-items-center lg:flex lg:items-center text-justify">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover lg:mr-5 sm:mb-4 "
                />
                <div>
                  <h3 className="text-lg sm:text-center lg:text-justify font-bold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm sm:text-center lg:text-justify text-gray-300 mb-2">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-md leading-relaxed">
                    {testimonials[currentIndex].message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative mt-4">
        <button
          onClick={handlePrev}
          className="text-gray-600 text-2xl mx-3 hover:text-gray-800 transition"
        >
          <svg
            class="h-8 w-8 text-gray-800"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-2.5 h-2.5 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
        <button
          onClick={handleNext}
          className="text-gray-600 text-2xl mx-3 hover:text-gray-800 transition"
        >
          <svg
            class="h-8 w-8 text-gray-800"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
