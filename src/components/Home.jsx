import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import pic from "../../public/kings.jpg";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className='text-red-700 font-bold'>Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am a dedicated Computer Science student currently pursuing my
              B.Tech at Sharda University, where I am in my third year. With a
              strong foundation in programming and software development, I am
              keen on expanding my technical skills, particularly in MERN stack
              development. I am currently working on a React app as part of a
              financial software project, where I manage both front-end and
              back-end integration and use MongoDB for database management.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-between">
              <div className="space-y-2 ">
                <h1 className="font-bold">Available on </h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="www.linkedin.com/in/shahran-pasha-9731952a4"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/shahranpasha" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/shahranpasha04"
                      target="_blank"
                    >
                      <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/shahranpasha04"
                      target="_blank"
                    >
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/shahranpasha" target="_blank">
                      <FaXTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on </h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.mongodb.com/" target="_blank">
                      <SiMongodb className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://expressjs.com/" target="_blank">
                      <SiExpress className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://react.dev/"
                      target="_blank"
                    >
                      <RiReactjsFill className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nodejs.org/en"
                      target="_blank"
                    >
                      <SiNodedotjs className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-40 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
