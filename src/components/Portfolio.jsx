import React from "react";
import ChromaGrid from "./ChromaGrid";
import java from '../../public/java.png'

function Portfolio() {
  const items = [
    
    {
      image: "https://cdn.simpleicons.org/html5/E34F26",
      title: "HTML5",
      subtitle: "Markup Language",
      handle: "Structure",
      borderColor: "#E34F26",
      gradient: "linear-gradient(145deg, #E34F26, #000)",
      url: "https://html.com/",
    },
    {
      image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg",
      title: "CSS3",
      subtitle: "Styling Language",
      handle: "Design & Layout",
      borderColor: "#1572B6",
      gradient: "linear-gradient(145deg, #1572B6, #000)",
      url: "https://web.dev/learn/css",
    },
    {
      image: "https://cdn.simpleicons.org/javascript/F7DF1E",
      title: "JavaScript",
      subtitle: "Programming Language",
      handle: "Web Core",
      borderColor: "#F7DF1E",
      gradient: "linear-gradient(145deg, #F7DF1E, #000)",
      url: "https://www.javascript.com/",
    },
    {
      image: "https://cdn.simpleicons.org/typescript/3178C6",
      title: "TypeScript",
      subtitle: "Typed JavaScript",
      handle: "Scalable JS",
      borderColor: "#3178C6",
      gradient: "linear-gradient(145deg, #3178C6, #000)",
      url: "https://www.typescriptlang.org/",
    },
    {
      image: "https://cdn.simpleicons.org/mongodb/10B981",
      title: "MongoDB",
      subtitle: "NoSQL Database",
      handle: "Scalable Storage",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #10B981, #000)",
      url: "https://www.mongodb.com/",
    },
    {
      image: "https://cdn.simpleicons.org/express/ffffff",
      title: "Express.js",
      subtitle: "Backend Framework",
      handle: "REST APIs",
      borderColor: "#ffffff",
      gradient: "linear-gradient(145deg, #ffffff, #000)",
      url: "https://expressjs.com/",
    },
    {
      image: "https://cdn.simpleicons.org/react/61DAFB",
      title: "React.js",
      subtitle: "Frontend Library",
      handle: "SPA & UI",
      borderColor: "#61DAFB",
      gradient: "linear-gradient(145deg, #61DAFB, #000)",
      url: "https://react.dev/",
    },
    {
      image: "https://cdn.simpleicons.org/nodedotjs/3C873A",
      title: "Node.js",
      subtitle: "Runtime Environment",
      handle: "Server-side JS",
      borderColor: "#3C873A",
      gradient: "linear-gradient(145deg, #3C873A, #000)",
      url: "https://nodejs.org/",
    },
    
    
    {
      image: "/java.png",
      title: "Java",
      subtitle: "Enterprise & OOP",
      handle: "Core Java",
      borderColor: "#f89820",
      gradient: "linear-gradient(145deg, #f89820, #000)",
      url: "https://www.java.com/",
    },
    {
      image: "https://cdn.simpleicons.org/python/3776AB",
      title: "Python",
      subtitle: "General Purpose",
      handle: "Automation",
      borderColor: "#3776AB",
      gradient: "linear-gradient(145deg, #3776AB, #000)",
      url: "https://www.python.org/",
    },
    {
      image: "https://cdn.simpleicons.org/tailwindcss/38BDF8",
      title: "Tailwind CSS",
      subtitle: "Utility-first CSS",
      handle: "Modern Styling",
      borderColor: "#38BDF8",
      gradient: "linear-gradient(145deg, #38BDF8, #000)",
      url: "https://tailwindcss.com/",
    },
    {
      image: "https://cdn.simpleicons.org/bootstrap/7952B3",
      title: "Bootstrap",
      subtitle: "CSS Framework",
      handle: "Responsive UI",
      borderColor: "#7952B3",
      gradient: "linear-gradient(145deg, #7952B3, #000)",
      url: "https://getbootstrap.com/",
    },
    
    
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-black text-white">
      <h1 className="text-3xl font-bold mb-5 pt-3 md:pt-8 text-center">TECH SKILLS</h1>
      <p className="text-center mb-10 text-gray-400">
        My technical skills and expertise areas
      </p>

      {/* CHROMA GRID */}
      <div className="relative min-h-[700px] pb-32">
        <ChromaGrid
          items={items}
          radius={320}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </div>
  );
}

export default Portfolio;
