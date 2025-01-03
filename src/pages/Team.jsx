import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { TeamCardBig, TeamCardSmall } from '../components/TeamCard'

function Team() {
  return (
    <div id="team">
      <Navbar />
      <div className=" w-full overflow-hidden text-center ms:my-6 tb:my-8 lg:my-10">
        <h2 className="ms:text-xl ml:text-2xl tb:text-3xl lg:text-4xl font-bold ms:mb-4 tb:mb-6 lg:mb-8 text-gray-800 relative inline-block">
          EXECUTIVE BODY
          <span className="block ms:w-30 ms:mt-1 lg:w-32 h-0.5 bg-black ms:mt-2 lg:mt-3 mx-auto"></span>
        </h2>
      </div>

      <div className="w-[90%] mx-auto ms:p-2 sm:p-3 tb:p-4 ms:grid ms:grid-cols-2 tb:flex ms:gap-4 sm:gap-6 tb:gap-8 justify-evenly ms:mb-6 tb:mb-8">
        <TeamCardBig
          src={'AditiSingh_President.png'}
          position={'PRESIDENT'}
          name={'Aditi Singh'}
        />
        <TeamCardBig
          src={'CHINMAYPATADE_JointPresident.jpg'}
          position={'JOINT PRESIDENT'}
          name={'Chinmay Patade'}
        />
      </div>
      <div className="w-[90%] mx-auto ms:p-2 sm:p-3 tb:p-4 grid ms:grid-cols-2 tb:grid-cols-3 lg:grid-cols-4 ms:gap-4 sm:gap-6 tb:gap-8 justify-evenly ms:mb-6 tb:mb-8">
        <TeamCardSmall
          src={'AkshatRaj_VicePres.png'}
          position={'VICE PRESIDENT'}
          name={'Akshat Raj Sharma'}
        />
        <TeamCardSmall
          src={'AyushKumar_VicePres.jpg'}
          position={'VICE PRESIDENT'}
          name={'Ayush Kumar'}
        />
        <TeamCardSmall
          src={'Abhinav_EventsHead.jpg'}
          position={'EVENT HEAD'}
          name={'Abhinav Dashwant'}
        />
        <TeamCardSmall
          src={'LakshyaMishra_CreativeHead.jpg'}
          position={'CREATIVE HEAD'}
          name={'Lakshya Mishra'}
        />

        <TeamCardSmall
          src={'AryanRajsaxena_TechHead.jpg'}
          position={'TECHNICAL HEAD'}
          name={'Aryan Raj'}
        />
        <TeamCardSmall
          src={'Aditi_PublicityHead.jpg'}
          position={'PUBLICITY HEAD'}
          name={'Aditi'}
        />
        <TeamCardSmall
          src={'RitikRaj_GenSec.jpg'}
          position={'GENERAL SECRETARY'}
          name={'Ritik Raj'}
        />
        <TeamCardSmall
          src={'EkikaKumar_JointSec.jpg'}
          position={'JOINT SECRETARY'}
          name={'Ekika Kumari'}
        />
        <TeamCardSmall
          src={'AdityaIngale_Treasurer.jpg'}
          position={'TREASURER'}
          name={'Aditya Ingale'}
        />
        <TeamCardSmall
          src={'KomalRani_EventCoord.png'}
          position={'EVENT COORDINATOR'}
          name={'Komal Rani'}
        />
        <TeamCardSmall
          src={'HarshVerma_CreativeCoord.jpg'}
          position={'CREATIVE COORDINATOR'}
          name={'Harsh Verma'}
        />
        <TeamCardSmall
          src={'MuaazMurshid_CreativeCoord.jpeg'}
          position={'CREATIVE COORDINATOR'}
          name={'Muaaz Murshid'}
        />
        <TeamCardSmall
          src={'NikhilKumar_TechCord.png'}
          position={'TECHNICAL COORDINATOR'}
          name={'Nikhil Kumar'}
        />
        <TeamCardSmall
          src={'AdyaPandey_ExeMember.jpg'}
          position={'EXECUTIVE MEMBER'}
          name={'Adya Pandey'}
        />
        <TeamCardSmall
          src={'RishabhRaj_ExeMember.jpg'}
          position={'EXECUTIVE MEMBER'}
          name={'Rishabh Raj'}
        />
        <TeamCardSmall
          src={'SaketKumar_ExeMember.jpg'}
          position={'EXECUTIVE MEMBER'}
          name={'Saket Kumar'}
        />
        <TeamCardSmall
          src={'SanjanaKumari_ExeMember.jpg'}
          position={'EXECUTIVE MEMBER'}
          name={'Sanjana Kumari'}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Team
