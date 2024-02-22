const Contact = () => {
  return (
    <section
      id="contact"
      className=" p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
    >
      <div className="nav-link-contact text-3xl">
        <h2 className=" text-5xl mb-4 text-center font-semibold">
          Contact <span>Me!</span>
        </h2>
        <h4>
          Talent wins games, but teamwork and intelligence win championships.
        </h4>
        <p className="mt-4">
          Fill the form to connect if any query{" "}
          <i className="fas fa-smile text-yellow-400"></i>
        </p>
        <div className="list">
          <ul>
            <li className=" mt-3 mb-3 text-2xl">
              <a href="tel:+918821077427" id="contact-phone">
                +91-8821077427
              </a>
            </li>
            <li className=" mb-3 text-2xl">
              <a href="mailto:underiyadeepak@gmail.com" id="contact-email">
                underiyadeepak@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-icons flex gap-3 mt-4">
          <a
            href="https://github.com/underiya"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-github"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-underiya/"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-linkedin"
          >
            <i className="bx bxl-linkedin text-blue-600"></i>
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form
          action="mailto:your-email@example.com"
          method="post"
          encType="text/plain"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full p-4 bg-gray-700 text-white rounded-md mb-4"
            required
          />
          <input
            type="email"
            placeholder="Your Email Address"
            name="email"
            className="w-full p-4 bg-gray-700 text-white rounded-md mb-4"
            required
          />
          <input
            type="tel"
            placeholder="Your Mobile Number"
            name="mobileNumber"
            className="w-full p-4 bg-gray-700 text-white rounded-md mb-4"
            required
          />
          <textarea
            placeholder="How Can I Help You"
            name="message"
            className="w-full p-4 bg-gray-700 text-white rounded-md mb-4 resize-none"
            rows="6"
            required
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="submit inline-block text-white bg-yellow-500 px-6 py-3 text-lg rounded-md transition-all duration-500 ease-in-out hover:transform hover:scale-110 cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
