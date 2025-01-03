import React from 'react'

const WhoWeAre = () => {
  return (
    <div className="text-center p-5 font-sans">
      <h1 className="mb-5 text-3xl">WHO WE ARE</h1>
      <div className="flex flex-col lg:flex-row justify-between items-center my-5 lg:my-10">
        <div className="flex-1 mx-5 text-left mb-5 lg:mb-0">
          <h2 className="text-blue-600 text-xl mb-3">ABOUT US</h2>
          <p className="leading-7">
            BIOTS is dedicated to advancing biotechnology through education and
            innovation. Founded in 2017, our mission is to provide a dynamic
            platform for students to engage with cutting-edge biotechnological
            developments and contribute to solving real-world problems. We host
            a variety of webinars and seminars focusing on research and
            prospects in biotechnology, offering invaluable learning
            opportunities and fostering a vibrant community for future engineers
            and entrepreneurs. Through these activities, BIOTS aims to foster
            innovation, nurture talent, and drive progress across all realms.
          </p>
        </div>
        <div className="flex-1 mx-5">
          <img
            src="main.jpeg"
            alt="Institute building"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center my-5 lg:my-10">
        <div className="flex-1 mx-5">
          <img
            src="dna.webp"
            alt="DNA illustration"
            className="w-full rounded-lg"
          />
        </div>
        <div className="flex-1 mx-5 text-left mb-5 lg:mb-0">
          <h2 className="text-blue-600 text-xl mb-3">VISION</h2>
          <p className="leading-7">
            To be a leading community for biotechnologists, fostering innovation
            and professional growth. We believe in focusing on the development
            of knowledge, skills, networks, and shaping experiences that are
            integral for success in the professional world.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
