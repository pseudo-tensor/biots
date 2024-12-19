import React from "react";

const EventsSection = () => {
  return (
    <section className="text-center my-10">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 relative inline-block">
        EVENTS
        <span className="block w-40 h-0.5 bg-black mt-4 mx-auto"></span>
      </h2>

      <div className="main-event">
        <img
          src="mainEvent.jpg"
          alt="Main Event"
          className="cursor-pointer w-3/5 mx-auto shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        />
      </div>
      <div className="flex justify-center">
        <div className="lg:flex lg:justify-center w-3/5 gap-5 mt-8">
          <div>
            <img
              src="event1.jpg"
              alt="Sub Event 1"
              className="sm:mb-8 lg:m-0 cursor-pointer w-fit h-full shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
          <div>
            <img
              src="event2.jpg"
              alt="Sub Event 2"
              className="sm:mb-8 lg:m-0 cursor-pointer w-fit h-full shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
