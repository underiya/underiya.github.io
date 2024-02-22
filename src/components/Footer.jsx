import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer id="Footer" className=" bg-gray-700">
      <div className=" flex justify-between w-11/12 m-auto p-5">
        <div className=" text-white ">
          <p className=" text-2xl">
            Created by Deepak underiya{" "}
            <i className="fas fa-heart text-yellow-500"></i> 2023 All Rights
            Reserved.
          </p>
        </div>
        <div className=" ">
          <AnchorLink href="#home" className="text-white text-2xl">
            <i className="bx bx-up-arrow-alt"></i>
          </AnchorLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
