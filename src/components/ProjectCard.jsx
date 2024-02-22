// ProjectCard.js

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card shadow-md  p-2">
      <h5 className="project-title text-3xl font-semibold">{project.name}</h5>
      <img src={project.img} alt="" className="w-full rounded" />
      <div className="layer my-4">
        <p className="project-description text-2xl">{project.description}</p>
        <p className="project-tech-stack text-2xl flex justify-center gap-2">
          {project.techStacks.map((el) => {
            return <img src={el.logo} alt={el.name} className="w-10" />;
          })}
          {/* <span className="font-bold ">Tech-Stack</span> : {techStack} */}
        </p>
        <div className="links-deployed my-2 flex justify-center align-middle gap-2">
          <div className="project-deployed-link my-2">
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" bg-slate-400  p-5">
                <i className="bx bxl-netlify text-2xl text-black">
                  Deployed-Link
                </i>
              </button>
            </a>
          </div>
          <div className="project-github-link my-2">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" bg-slate-400  p-5">
                <i className="bx bxl-github text-2xl text-black">Github</i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
