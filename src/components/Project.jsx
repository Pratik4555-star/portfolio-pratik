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
    <div className='w-full h-auto mb-3'>
        {/* Project Showcase */}
        <div id="project" className=" md:mt-10 flex flex-col gap-4 px-5 mt-14">
       
          <h1 id='pt' className='text-center text-2xl md:text-3xl font-semibold font-inner'>Project</h1>
     
        <div
          id="projects"
          className="font-inner text-slate-700 mt-5 md:mt-10 h-auto flex flex-col md:flex-wrap md:flex-row items-center justify-center gap-5 md:gap-20 py-5 w-full"
        >
          <div id="left" className="flex-shrink-0 bg-gray-400 w-72 sm:w-full md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-base md:text-2xl px-2 py-2 text-center">Todo App</h1>
            <Link to="https://github.com/Pratik4555-star/Mean-Todo-app.git" className="block relative mt-40 md:mt-56 px-2 py-2 text-sm md:text-base">
              GitHub
            </Link>
          </div>
          <div id="left" className="flex-shrink-0 bg-gray-400 w-72 sm:w-full md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-base md:text-2xl px-2 py-2 text-center">Food Recipe</h1>
            <Link to="https://github.com/Pratik4555-star/Food-recipe-website.git" className="block relative mt-40 md:mt-56 px-2 py-2 text-sm md:text-base">
              GitHub
            </Link>
          </div>
          <div id="left" className="flex-shrink-0 bg-gray-400 w-72 sm:w-full md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-base md:text-2xl px-2 py-2 text-center">Leads Tracking App</h1>
            <Link to="https://github.com/Pratik4555-star/LeadsTrackerAPP.git" className="block relative mt-40 md:mt-56 px-2 py-2 text-sm md:text-base">
              GitHub
            </Link>
          </div>
          <div id="right" className="flex-shrink-0 bg-gray-400 w-72 sm:w-full md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-base md:text-2xl px-2 py-2 text-center">React Routing Project</h1>
            <Link to="https://github.com/Pratik4555-star/React-routing-earn-project.git" className="block relative mt-40 md:mt-56 px-2 py-2 text-sm md:text-base">
              GitHub
            </Link>
          </div>
          <div id="right" className="flex-shrink-0 bg-gray-400 w-72 sm:w-full md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-base md:text-2xl px-2 py-2 text-center">Currency Converter</h1>
            <Link to="https://github.com/Pratik4555-star/Currency-conveter.git" className="block relative mt-40 md:mt-56 px-2 text-sm md:text-base">
              GitHub
            </Link>
          </div>
          <div id="right" className="flex-shrink-0 bg-gray-400 w-72 sm:w-full md:w-96 h-64 md:h-80 rounded-md">
            <h1 className="text-base md:text-2xl px-2 py-2 text-center">Portfolio</h1>
            <Link to="https://github.com/Pratik4555-star/portfolio-pratik.git" className="block relative mt-40 md:mt-56 px-2 text-sm md:text-base">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}




export default Project