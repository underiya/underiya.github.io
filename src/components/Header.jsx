import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons/css/boxicons.min.css";

export default function Header() {
  const downloadResume = () => {
    try {
      const resumeUrl = "Resume.pdf";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error during resume download:", error);
    }
  };

  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-between w-11/12 m-auto font-montserret "
    >
      <div id="about" className="about section md:w-1/2 p-[32px] m-4">
        <h2 className="mb-5 text-center">
          <span className="text-[22px] font-semibold block mb-2">
            Hello I&#39;m
          </span>
          <span id="user-detail-name" className="text-6xl font-bold block mb-2">
            Deepak Underiya
          </span>
          <span className="text-3xl font-semibold block">
            Full Stack Web Developer
          </span>
        </h2>
        <p
          id="user-detail-intro"
          className="text-[20px] font-[500] tracking-tight text-gray-500 text-justify mb-10"
        >
          About Me :- Resourceful Full-Stack Web Developer equipped with
          expertise in JavaScript, React.js, Node.js, and MongoDB. Collaborates
          effectively with cross-functional teams to deliver innovative and
          scalable web applications. Demonstrates strong problem-solving skills
          and meticulous attention to detail for delivering high-quality
          solutions.
        </p>
        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-3/4 gap-4 mt-4 items-center">
          <button
            id="resume-button-2"
            onClick={downloadResume}
            className="w-full md:w-auto pt-4 pl-8 pr-8 pb-4 text-3xl font-semibold rounded-lg mb-4 md:mb-0 "
          >
            Resume
          </button>
          <div className="flex gap-7">
            <a
              href="https://www.linkedin.com/in/deepak-underiya/"
              target="_blank"
              className=" text-xl"
            >
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a
              href="https://github.com/underiya"
              className=" text-xl"
              target="_blank"
            >
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-2/5 m-4 mt-20">
        <img className="home-img w-full h-full " src={"deepak.jpg"} alt="box" />
      </div>
    </div>
  );
}
