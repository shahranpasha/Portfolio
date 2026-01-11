import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import pic from "../../public/pasha.jpg";
import LightRays from "./LightRays";
import About from "./About";

const Home = () => {
  return (
    <>
      {/* ===== HOME HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-black min-h-screen flex items-center">
        
        {/* LIGHT RAYS BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={0.9}
            lightSpread={0.9}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.05}
            noiseAmount={0.05}
            distortion={0.04}
          />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-screen-2xl container mx-auto px-6 md:px-20 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">

            {/* LEFT — TEXT */}
            <div className="md:w-1/2 mt-20 md:mt-0 order-2 md:order-1">
              <div className="relative pl-6 border-l border-white/20">

                {/* NAME */}
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-none">
                  Mohd <br />
                  Shahran
                  <br />
                  <span className="text-white/80">Pasha</span>
                </h1>

                {/* ROLE */}
                <p className="mt-4 text-lg text-gray-400 tracking-wide">
                  Full-Stack Web Developer
                </p>

                {/* TAGLINE */}
                <p className="mt-6 max-w-sm text-sm text-gray-500 leading-relaxed">
                  Designing and building modern web applications with clarity,
                  performance, and long-term maintainability in mind.
                </p>
                <br />

                {/* SOCIAL LINKS */}
                <ul className="flex space-x-5 text-white mt-8 md:mt-6 pb-8 md:pb-0">

                    <li>
                      <a
                        href="www.linkedin.com/in/shahran-pasha-9731952a4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/shahranpasha"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/shahranpasha04"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFacebook className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/shahranpasha04"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaInstagram className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/shahranpasha"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaXTwitter className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                  </ul>
              </div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="md:w-1/2 flex justify-center md:justify-end 
                mt-28 md:mt-0 
                mb-16 md:mb-0 
                order-1 md:order-2">
              <img
                src={pic}
                alt="Shahran Pasha"
                className="
                  rounded-full
                  w-[280px] h-[280px]
                  md:w-[420px] md:h-[420px]
                  object-cover
                  ring-1 ring-white/20
                  shadow-2xl
                "
              />
            </div>

          </div>
        </div>
      </section>

      
    </>
  );
};

export default Home;
