import React from "react";
import HyperspeedUsage from "./hyperspeed/usage.jsx";

// PROJECT IMAGES (landscape)
import elite from "../../public/projects/elite.png";
import ruhi from "../../public/projects/ruhi.png";
import buyeco from "../../public/projects/buyeco.png";
import division from "../../public/projects/division.png";
import docuswift from "../../public/projects/docuswift.png";

function Experience() {
  const projects = [
    {
      id: 1,
      title: "Elite Designs & Arcvibe",
      description:
        "Elite Designs & Arcvibe is a professional architectural and interior design firm delivering premium residential and commercial projects. The platform showcases 2D planning, 3D visualization, structural solutions, and construction expertise with a clean, modern presentation.",
      link: "https://www.elitedesignsarcvibe.com/",
      image: elite,
    },
    {
      id: 2,
      title: "Ruhi Interiors",
      description:
        "Ruhi Interiors W.L.L. is a Bahrain-based fit-out design and build company operating across GCC countries. The website highlights their portfolio, corporate credibility, and commitment to high-quality interior solutions.",
      link: "https://ruhiinteriors.com/",
      image: ruhi,
    },
    {
      id: 3,
      title: "BuyEco",
      description:
        "BuyEco is an eco-friendly e-commerce platform focused on sustainable products. I designed a structured informational experience that improves navigation, trust, and product discovery while reinforcing the brand’s environmental mission.",
      link: "https://buyeco.com",
      image: buyeco,
    },
    {
      id: 4,
      title: "Division Exports",
      description:
        "Division Exports is a global handicraft manufacturer and exporter. The website presents their craftsmanship legacy, modern production workflow, and international presence through a strong visual and content-driven layout.",
      link: "http://divisionexport.com/",
      image: division,
    },
    {
      id: 5,
      title: "DocuSwift",
      description:
        "DocuSwift is a fast and secure web tool that converts Word documents into high-quality PDFs instantly. The platform focuses on simplicity, speed, and usability with no sign-ups or watermarks.",
      link: "https://wordtwopdf.netlify.app/",
      image: docuswift,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden  text-white">
      {/* HYPERSPEED FULL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HyperspeedUsage />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-screen-2xl container mx-auto px-4 md:px-20 py-24">
        

        <div className="space-y-8">
          <h1 className="text-3xl font-bold pt-1 md:pt-8 text-center">PROJECTS</h1>
        <p className="text-center mb-16 text-gray-300">
          Selected projects I have designed and developed
        </p>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-14 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* LEFT TEXT */}
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl font-semibold">
                  {project.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="md:w-1/2 relative group">
                <div className="relative transition-transform duration-500 transform rotate-0 group-hover:rotate-[5deg]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full rounded-xl shadow-2xl object-cover"
                  />

                  {/* HOVER OVERLAY */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      absolute inset-0
                      flex items-center justify-center
                      bg-black/70
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-300
                      rounded-xl
                    "
                  >
                    <span className="text-white text-lg font-semibold border border-white px-6 py-2 rounded-full">
                      View Site
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
