// ProjectCard.js

import ProjectCard from "./ProjectCard";
import bonVoyage from "../images/Bon-Voyage.png";
import travelbee from "../images/travelbee.png";
import chakraui from "../images/chakra.jpeg";

const Projects = () => {
  const projects = [
    {
      name: "Bon Voyage",
      img: bonVoyage,
      description:
        "Bon Voyage, your ultimate online vacation booking destination, is designed to transform your travel dreams into reality.",
      deployedLink:
        "https://65ae04d77f6077f381dc06a8--cheery-sprite-5f8d56.netlify.app/",
      githubLink: "https://github.com/underiya/Bon_Voyage-Travel",

      techStacks: [
        {
          name: "HTML",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        },
        {
          name: "CSS",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        },
        {
          name: "JavaScript",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        },
        {
          name: "Chakra UI",
          logo: chakraui,
        },
      ],
    },
    {
      name: "Travel Bee",
      img: travelbee,
      description:
        "TravelBee is a website designed to make travel planning easy and convenient",
      deployedLink: "https://travel-bee-b66ab7.netlify.app/",
      githubLink: "https://github.com/underiya/TravelBee",
      techStacks: [
        {
          name: "HTML",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        },
        {
          name: "CSS",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        },
        {
          name: "JavaScript",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          name: "Sass",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
        },
      ],
    },
  ];

  return (
    <section id="projects" className=" text-slate-500 w-11/12 mx-auto my-9">
      <div className="main-text mb-9">
        <h2 className=" text-6xl text-red-400 font-semibold text-center">
          <span>My </span>Projects
        </h2>
      </div>
      <div
        id="nav-link-projects"
        className="grid grid-cols-1 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
      >
        {projects.map((proj, i) => {
          return <ProjectCard key={i} project={proj} i={i} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
