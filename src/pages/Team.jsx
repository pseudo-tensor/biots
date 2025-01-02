import image from '../assets/avatar.jpg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { TeamCardBig, TeamCardSmall } from '../components/TeamCard'

function Team() {
  return (
    <div id="team">
      <Navbar />
      <div className=" w-full overflow-hidden text-center ms:my-6 tb:my-8 lg:my-10">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
          EVENTS
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>
      <div className="w-[90%] mx-auto ms:p-2 sm:p-3 tb:p-4 flex ms:gap-4 sm:gap-6 tb:gap-8 justify-evenly">
        <TeamCardBig
          src={image}
          position={'PRESIDENT'}
          name={'Aditi Singh'}
        />
        <TeamCardBig
          src={image}
          position={'JOINT PRESIDENT'}
          name={'Chinmay Patade'}
        />
      </div>
      <div className="w-[90%] mx-auto ms:p-2 sm:p-3 tb:p-4 grid ms:grid-cols-2 tb:grid-cols-3 lg:grid-cols-4 ms:gap-4 sm:gap-6 tb:gap-8 justify-evenly ms:mb-6 tb:mb-8">
        <TeamCardSmall
          src={image}
          position={'VICE PRESIDENT'}
          name={'Akshat Raj Sharma'}
        />
        <TeamCardSmall
          src={image}
          position={'VICE PRESIDENT'}
          name={'Ayush Kumar'}
        />
        <TeamCardSmall
          src={image}
          position={'EVENT HEAD'}
          name={'Abhinav Dashwant'}
        />
        <TeamCardSmall
          src={image}
          position={'CREATIVE HEAD'}
          name={'Lakshya Mishra'}
        />
        <TeamCardSmall
          src={image}
          position={'CONTENT HEAD'}
          name={'Shreya Suman'}
        />
        <TeamCardSmall
          src={image}
          position={'TECHNICAL HEAD'}
          name={'Aryan Raj'}
        />
        <TeamCardSmall
          src={image}
          position={'PUBLICITY HEAD'}
          name={'Aditi'}
        />
        <TeamCardSmall
          src={image}
          position={'GENERAL SECRETARY'}
          name={'Ritik Raj'}
        />
        <TeamCardSmall
          src={image}
          position={'JOINT SECRETARY'}
          name={'Ekika Kumari'}
        />
        <TeamCardSmall
          src={image}
          position={'TREASURER'}
          name={'Aditya Ingale'}
        />
        <TeamCardSmall
          src={image}
          position={'EVENT COORDINATOR'}
          name={'Komal Rani'}
        />
        <TeamCardSmall
          src={image}
          position={'CREATIVE COORDINATOR'}
          name={'Harsh Verma'}
        />
        <TeamCardSmall
          src={image}
          position={'CREATIVE COORDINATOR'}
          name={'Muaaz Murshid'}
        />
        <TeamCardSmall
          src={image}
          position={'CONTENT COORDINATOR'}
          name={'Mayank Milind'}
        />
        <TeamCardSmall
          src={image}
          position={'TECHNICAL COORDINATOR'}
          name={'Nikhil Kumar'}
        />
        <TeamCardSmall
          src={image}
          position={'PUBLICITY COORDINATOR'}
          name={'Archeet Bandhul'}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Team
