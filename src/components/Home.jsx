import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import image from '../assests/pratiik.jpeg';
import Project from './Project';
// import About from './About';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useGSAP(() => {
    gsap.from('#text', {
      x: -300,
      delay: 1.5,
      opacity: 0,
      duration: 0.5,
    });

    gsap.from('#im', {
      opacity: 0,
      duration: 0.5,
    }, "=0.07");
  });

  return (
    <>
      <div className='overflow-x-hidden'>
        {/* Hero Section */}
        <div id="info" className="flex flex-col md:flex-row w-full h-auto md:h-screen justify-between items-center px-6 md:px-10">
          <div className="title flex flex-col mt-6 md:mt-20 md:ml-5 w-full md:w-1/2 text-center md:text-left">
            <h1 id='text' className="font-Abs font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
              Pratik Mahadik
            </h1>
            <p id='text' className="mt-3 md:mt-3 md:tracking-widest text-base sm:text-lg md:text-xl text-gray-500">
              Tech-Savvy Creator Fueling Startups with Strategic Design.
            </p>
          </div>
          <div id='im' className="flex justify-center mt-6 md:mt-10 w-full md:w-1/2">
            <img
              src={image}
              alt="Image"
              className="w-3/4 sm:w-2/3 md:w-[450px] h-[300px] sm:h-[400px] md:h-[550px] rounded-t-[100px] md:rounded-t-[150px] object-cover grayscale hover:grayscale-0 duration-300"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="px-4 sm:px-8 md:px-10 py-5 w-full">
          <h1 className="text-center mt-8 sm:mt-14 text-xl sm:text-2xl md:text-3xl font-semibold font-inner">ABOUT</h1>
          <p className="py-4 px-4 sm:px-6 md:px-10 mt-3 text-gray-500 font-inner text-sm sm:text-lg md:text-xl tracking-wide text-justify">
            Welcome to Pratik’s Portfolio, where technology and innovation take center stage! I’m Pratik, a fresher with a strong foundation in JavaScript, HTML, CSS, MongoDB, and Express.

            Driven by curiosity and a passion for building impactful solutions, I bring fresh perspectives, enthusiasm, and a commitment to clean and efficient code. Currently contributing to exciting projects at a startup, I’m honing my skills and gaining real-world experience in crafting intuitive and responsive web solutions.
          </p>

          <p className="py-3 px-4 sm:px-6 md:px-10 font-inner text-gray-500 text-sm sm:text-lg md:text-xl font-semibold tracking-wide text-justify">Specializing in:</p>
          <ul className="list-disc px-8 sm:px-12 md:px-16 text-gray-500 text-sm sm:text-lg md:text-xl font-inner tracking-wide mb-4">
            <li>Frontend Development: Creating user-friendly interfaces with HTML, CSS, and JavaScript.</li>
            <li>Backend Development: Building robust server-side functionalities using MongoDB and Express.</li>
            <li>Full-Stack Projects: Delivering seamless applications through combined expertise.</li>
          </ul>
          <p className="py-3 px-4 sm:px-6 md:px-10 text-gray-500 font-inner text-sm sm:text-lg md:text-xl tracking-wide text-justify">
            I’m adaptable, eager to learn, and thrive in collaborative environments. My vision is to create meaningful solutions that enhance user experiences and solve real problems. Let’s connect and build something extraordinary together!
          </p>
        </div>

        {/* Project Section */}
        <Project />

        {/* Contact Section */}
        <div className="mt-20 md:mt-40 relative w-full flex items-center justify-center">
          <h1 className="font-inner text-lg sm:text-2xl md:text-6xl text-gray-400 mb-10 font-bold text-center px-4">
            Contact: pratikmahadik554@gmail.com
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
