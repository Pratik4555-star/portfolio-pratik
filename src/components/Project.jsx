import { Link } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Project() {

  useEffect(()=>{
    const t1= gsap.timeline({
      scrollTrigger:{
          trigger:"#project",
          scroller:"body",
          // markers:true,
          start: "top 70%",
          end:"top -30%",
          scrub:2
      },
  });
  t1.from('#left',{
    x:-30,
    opacity:0,
    duration:0.3,
  }),
  t1.from('#right',{
    x:30,
    opacity:0,
    duration:0.3,
  })

  },[])








  return (
    <div className='w-full h-screen'>
        {/* Project Showcase */}
        <div id="project" className=" flex flex-col gap-4 px-5  mt-10">
       
          <h1 id='pt' className='text-center text-3xl font-semibold font-inner'>Project</h1>
     
        <div
          id="projects"
          className="font-inner text-slate-700 mt-5 md:mt-10 h-auto flex flex-wrap items-center justify-center gap-5 md:gap-20 py-5 w-full"
        >
          <div id="left" className="flex-shrink-0 bg-gray-400 w-64 md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-lg md:text-2xl px-2 py-2 text-center">Todo App</h1>
            <Link to="https://github.com/Pratik4555-star/Mean-Todo-app.git" className="block relative mt-16 md:mt-56 px-2 py-2 ">
              GitHub
            </Link>
          </div>
          <div id="left" className="flex-shrink-0 bg-gray-400 w-64 md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-lg md:text-2xl px-2 py-2 text-center">Food Recipe </h1>
            <Link to="https://github.com/Pratik4555-star/Food-recipe-website.git" className="block relative mt-16 md:mt-56 px-2 py-2 ">
              GitHub
            </Link>
          </div>
          <div id="left" className="flex-shrink-0 bg-gray-400 w-64 md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-lg md:text-2xl px-2 py-2 text-center">Leads Tracking App</h1>
            <Link to="https://github.com/Pratik4555-star/LeadsTrackerAPP.git" className="block relative mt-16 md:mt-56 px-2 py-2 ">
              GitHub
            </Link>
          </div>
          <div id="right" className="flex-shrink-0 bg-gray-400 w-64 md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-lg md:text-2xl px-2 py-2 text-center">React routing project</h1>
            <Link to="https://github.com/Pratik4555-star/React-routing-earn-project.git" className="block relative mt-16 md:mt-56 px-2 py-2 ">
              GitHub
            </Link>
          </div>
          <div id="right" className="flex-shrink-0 bg-gray-400 w-64 md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-lg md:text-2xl px-2 py-2 text-center">Currency-conveter</h1>
            <Link to="https://github.com/Pratik4555-star/Currency-conveter.git" className="block relative mt-16 md:mt-56 px-2  ">
              GitHub
            </Link>
          </div>
          <div id="right" className="flex-shrink-0 bg-gray-400 w-64 md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-lg md:text-2xl px-2 py-2 text-center">Title</h1>
            <Link to="/" className="block relative mt-16 md:mt-56 px-2  ">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project