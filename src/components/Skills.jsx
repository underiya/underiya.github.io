import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons";

import "boxicons/css/boxicons.min.css";
export default function Skills() {
  return (
    <>
      <div id="skills" className=" w-11/12 m-auto">
        <div className=" main-text text-center">
          <h2 className=" text-6xl font-bold mb-2">
            <span className="text-yellow-500">My </span>Skills
          </h2>
          <p className=" text-7xl">What I am Expert In</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mt-8">
          {/* C++ Skill */}
          <div className="skills-card bg-slate-200 p-8 rounded  text-center shadow-md  hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1  hover:bg-slate-300 duration-300">
            <div className="skills-card-img font-bold text-orange-400">
              <i className=" bx bxl-java text-9xl mb-4 "></i>
            </div>
            <h3 className="skills-card-name text-5xl font-bold mb-3">JAVA</h3>
          </div>
          <div className="skills-card bg-slate-200 shadow-md p-8 rounded transition duration-500 ease-in-out text-center  hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1  hover:bg-slate-300 duration-300 ">
            <div className="skills-card-img">
              <i className="bx bxl-react text-9xl mb-4  text-cyan-400"></i>
            </div>
            <h3 className="skills-card-name text-5xl font-bold mb-3">React</h3>
          </div>

          {/* JavaScript Skill */}
          <div className="skills-card bg-slate-200 shadow-md p-8 rounded transition duration-500 ease-in-out text-center  hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1  hover:bg-slate-300 duration-300">
            <div className="skills-card-img">
              <i className="bx bxl-javascript text-9xl mb-4 text-yellow-400"></i>
            </div>
            <h3 className="skills-card-name text-5xl font-bold mb-3 ">
              JavaScript
            </h3>
          </div>

          {/* HTML Skill */}
          <div className="skills-card bg-slate-200 shadow-md p-8 rounded transition duration-500 ease-in-out text-center  hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1  hover:bg-slate-300 duration-300">
            <div className="skills-card-img">
              <i className="bx bxl-html5 text-9xl mb-4 text-orange-500"></i>
            </div>
            <h3 className="skills-card-name text-5xl font-bold mb-3">HTML</h3>
          </div>
          <div className="skills-card bg-slate-200 shadow-md p-8 rounded transition duration-500 ease-in-out text-center  hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1  hover:bg-slate-300 duration-300">
            <div className="skills-card-img">
              <i className="bx bxl-css3 text-9xl mb-4  text-blue-500"></i>
            </div>
            <h3 className="skills-card-name text-5xl font-bold mb-3">CSS</h3>
          </div>
          <div className="skills-card bg-slate-200 shadow-md p-8 rounded transition duration-500 ease-in-out text-center  hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1  hover:bg-slate-300 duration-300">
            <div className="skills-card-img">
              <i className="bx bxl-tailwind-css text-9xl mb-4  text-blue-400"></i>
            </div>
            <h3 className="skills-card-name text-5xl font-bold mb-3">
              Tailwind CSS
            </h3>
          </div>

          <div className="skills-card bg-slate-200 shadow-md p-8 rounded transition duration-500 ease-in-out text-center  hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1  hover:bg-slate-300 duration-300">
            <div className="skills-card-img">
              <i className="bx bxl-github text-9xl mb-4"></i>
            </div>
            <h3 className="skills-card-name text-5xl font-bold mb-3">Github</h3>
          </div>
          <div className="skills-card bg-slate-200 shadow-md p-8 rounded transition duration-500 ease-in-out text-center  hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1  hover:bg-slate-300 duration-300">
            <div className="skills-card-img">
              <i className="bx bxl-figma text-9xl mb-4 text-red-400"></i>
            </div>
            <h3 className="skills-card-name text-5xl font-bold mb-3 ">Figma</h3>
          </div>
          <div className="skills-card bg-slate-200 shadow-md p-8 rounded text-center  hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1  hover:bg-slate-300 duration-300">
            <div className="skills-card-img">
              <i className="bx bxl-git text-9xl mb-4 text-orange-500"></i>
            </div>
            <h3 className="skills-card-name text-5xl font-bold mb-3">Git</h3>
          </div>
          <div className="skills-card bg-slate-200 shadow-md p-8 rounded transition duration-500 ease-in-out text-center  hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1  hover:bg-slate-300 duration-300">
            <div className="skills-card-img">
              <i className="bx bxl-visual-studio text-9xl mb-4 text-blue-700"></i>
            </div>
            <h3 className="skills-card-name text-5xl font-bold mb-3 ">
              Visual Studio
            </h3>
          </div>
          <div className="skills-card bg-slate-200 shadow-md p-8 rounded transition duration-500 ease-in-out text-center  hover:{bg-slate-300 transition ease-in-out delay-150 bg-blue-500} hover:-translate-y-1  hover:bg-slate-300 duration-300">
            <div className="skills-card-img">
              <i className="bx bx-cube text-9xl mb-4  text-green-800"></i>
            </div>
            <h3 className="skills-card-name text-5xl font-bold mb-3">DSA</h3>
          </div>
        </div>
      </div>
    </>
  );
}
