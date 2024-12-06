import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import image from '../assests/pratiik.jpeg';
import Project from './Project';
// import About from './About';

gsap.registerPlugin(ScrollTrigger);



function Home() {
    useGSAP(()=>{
        gsap.from('#text',{
            x: -300,
            delay:1.5,
            opacity: 0,
            duration: 0.5,
        }),


        gsap.from('#im',{
            opacity: 0,
        duration: 0.5,
        },"=0.07")
 
});

  return (
    <>
    <div className='overflow-x-hidden'>
        {/* hero page */}
    <div id="info" className="flex w-full h-screen flex-col md:flex-row justify-between items-center">
        <div className="title flex  flex-col mt-6 md:mt-20 md:ml-5 w-full md:w-1/2 text-center md:text-left">
          <h1 id='text' className="font-Abs font-semibold ml-11 text-4xl md:text-6xl lg:text-9xl">
            Pratik Mahadik
          </h1>
          <p id='text'className="mt-3 md:mt-7 ml-11 font-inner font-light text-base md:text-xl text-gray-500">
            Tech-Savvy Creator Fueling Startups with Strategic Design.
          </p>
        </div>
        <div  id='im'  className="title flex justify-center mt-6 md:mt-10 w-full md:w-1/2">
          <img
            src={image}
            alt="Image"
            className="w-64 h-64 md:w-[450px] md:h-[550px] rounded-t-[100px] md:rounded-t-[150px] object-cover grayscale hover:grayscale-0 duration-300"
          />
        </div>
      </div>
      {/* About */}
      <div className="px-10 py-5 w-full h-1/2 ">
        <h1 className="text-center text-3xl font-semibold font-inner"> ABOUT</h1>
        <p className="py-4 px-5 mt-3 font-inner tracking-wide text-justify text-2xl">Welcome to Pratik’s Portfolio, where technology and innovation take center stage! I’m Pratik, a fresher with a strong foundation in JavaScript, HTML, CSS, MongoDB, and Express.

Driven by curiosity and a passion for building impactful solutions, I bring fresh perspectives, enthusiasm, and a commitment to clean and efficient code. Currently contributing to exciting projects at a startup, I’m honing my skills and gaining real-world experience in crafting intuitive and responsive web solutions.  </p>

<p className="py-3 px-5  font-inner font-semibold tracking-wide text-justify text-2xl">Specializing in:</p>
<ul className="list-disc px-10 font-inner text-2xl tracking-wide mb-4">
<li > Frontend Development: Creating user-friendly interfaces with HTML, CSS, and JavaScript.</li>
<li> Backend Development: Building robust server-side functionalities using MongoDB and Express.</li>
<li> Full-Stack Projects: Delivering seamless applications through combined expertise.</li>
</ul>
<p className="py-3 px-5  font-inner tracking-wide text-justify text-2xl">
I’m adaptable, eager to learn and thrive in collaborative environments. My vision is to create meaningful solutions that enhance user experiences and solve real problems. Let’s connect and build something extraordinary together!
</p>


      </div>

        {/* project */}
        <Project/>
       
        <div   className=" mt-56 relative w-full h-1/2 mb-20 flex justify-center">
        <h1 className="font-inner text-[10vh] transform-cpu text-center text-gray-400 font-bold">
            Contact: pratikmahadik554@gmail.com
        </h1>
        
        </div>
    </div>
    </>
  );
}

export default Home;
