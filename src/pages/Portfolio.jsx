import { useEffect, useState } from "react";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Contact from "./Contact";

const projects = [
  {
    title: "Elite Design Arcvibe",
    subtitle: "Modern Interior Design & Architecture Platform",
    image: "/projects/el.png",
    client: "Elite Design Arcvibe",
    time: "Currently Working",
    tech: "React, Node.js, Express.js, Tailwind CSS",
    live: "https://elitedesignsarcvibe.com/",
  },
  {
  title: "FinSwipX",
  subtitle: "AI-Powered FinTech & Digital Banking Platform",
  image: "/projects/finswip.png",
  client: "FinSwipX",
  time: "Currently Working",
  tech: "Next.js, React.js, Tailwind CSS, Framer Motion, Three.js",
  live: "https://finswipx.com/",
},
  {
    title: "Ruhi Interiors",
    subtitle: "Modern Interior  Design Platform",
    image: "/projects/r.png",
    client: "Ruhi Interiors",
    time: "Jan 2025 – jul 2025",
    tech: "React, Node.js, Express.js, Tailwind CSS",
    live: "https://ruhiinteriors.com/",
  },
  {
    title: "Buyeco E-Commerce",
    subtitle: "Modern Multi-Product E-Commerce Platform",
    image: "/projects/b.png",
    client: "Buyeco",
    time: "Aug 2025 – Nov 2025",
    tech: "React, Node.js, Express.js, Tailwind CSS",
    live: "https://buyeco.com/",
  },
  {
    title: "LUMINA Restaurant Website",
    subtitle: "Premium Restaurant UI/UX Experience",
    image: "/projects/e.png",
    client: "Personal Project",
    time: "2 Months",
    tech: "React, Node.js, Express.js, MongoDB, Tailwind CSS",
    live: "https://demorestaurant-web.netlify.app/",
  },

  {
    title: "Hospital Management System",
    subtitle: "Smart Clinic & Patient Management Solution",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
    client: "Private Clinic",
    time: "6 Months",
    tech: "MERN Stack, JWT Authentication",
    live: "#",
  },
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* PREVIOUS */
  const prevProject = () => {
    if (current === 0) {
      setCurrent(projects.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  /* NEXT */
  const nextProject = () => {
    if (current === projects.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <section
      className="
      relative

      min-h-[85vh]

      pt-24
      pb-10

      px-4 md:px-10

      overflow-hidden

      bg-[#f5f5f7]
      dark:bg-[#070b1a]
      "
    >
      {/* GRID */}
      <div
        className="
        absolute inset-0

        opacity-[0.04]

        [background-size:40px_40px]

        [background-image:
        linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        "
      />

      <div
        className="
        relative z-10

        max-w-7xl
        mx-auto
        "
      >
        {/* HEADING */}
        <div>
          <p
            className="
            text-blue-500

            uppercase
            tracking-[4px]

            text-xs md:text-sm
            font-semibold
            "
          >
            Portfolio
          </p>

          <h2
            className="
            mt-3

            text-3xl md:text-5xl
            font-bold

            text-zinc-900
            dark:text-white
            "
          >
            Featured Projects
          </h2>
        </div>

        {/* STACKED CARDS */}
        <div className="relative mt-10 ">
          {/* BACK CARD 2 */}
          <div
            className="
            absolute

            top-6
            right-0

            w-[92%]
            h-full

            rounded-[28px]

            bg-white/40
            dark:bg-white/[0.02]

            border border-black/10
            dark:border-white/10

            scale-[0.94]

            opacity-40
            "
          />

          {/* BACK CARD 1 */}
          <div
            className="
            absolute

            top-3
            right-0

            w-[96%]
            h-full

            rounded-[28px]

            bg-white/50
            dark:bg-white/[0.03]

            border border-black/10
            dark:border-white/10

            scale-[0.97]

            opacity-60
            "
          />

          {/* MAIN CARD */}
          {/* MAIN CARD */}
          <div
            className="
  relative

  grid grid-cols-1
  lg:grid-cols-[1.45fr_1fr]

  gap-8

  w-full

  rounded-[32px]

  border border-black/10
  dark:border-white/10

  bg-white/80
  dark:bg-[#0d1224]/90

  backdrop-blur-xl

  p-5 md:p-8

  shadow-[0_20px_80px_rgba(0,0,0,0.08)]
  dark:shadow-[0_20px_80px_rgba(59,130,246,0.08)]

  overflow-hidden

  transition-all duration-700
  "
          >
            {/* IMAGE */}
            {/* IMAGE */}
            <div
              className="
  relative

  overflow-hidden

  rounded-[22px]

  border border-black/10
  dark:border-white/10

  w-full

  aspect-[1920/1030]

  bg-[#0b1120]

  flex items-center justify-center
  "
            >
              <img
                src={projects[current].image}
                alt={projects[current].title}
                className="
    w-full
    h-full

    object-cover
    object-center

    transition-all duration-700
    "
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center">
              <p
                className="
                text-blue-500

                uppercase
                tracking-[3px]

                text-[10px] md:text-xs
                "
              >
                Project 0{current + 1}
              </p>

              <h3
                className="
                mt-3

                text-xl md:text-4xl
                font-bold

                leading-tight

                text-zinc-900
                dark:text-white
                "
              >
                {projects[current].title}
              </h3>

              <p
                className="
                mt-3

                text-sm md:text-base

                text-zinc-600
                dark:text-zinc-400
                "
              >
                {projects[current].subtitle}
              </p>

              {/* INFO */}
              <div className="mt-5 space-y-2">
                <div
                  className="
                  flex items-center
                  justify-between

                  border-b border-black/10
                  dark:border-white/10

                  pb-2
                  "
                >
                  <span
                    className="
                    text-xs md:text-sm

                    text-zinc-500
                    "
                  >
                    Client
                  </span>

                  <span
                    className="
                    text-xs md:text-sm

                    text-zinc-900
                    dark:text-white
                    "
                  >
                    {projects[current].client}
                  </span>
                </div>

                <div
                  className="
                  flex items-center
                  justify-between

                  border-b border-black/10
                  dark:border-white/10

                  pb-2
                  "
                >
                  <span
                    className="
                    text-xs md:text-sm

                    text-zinc-500
                    "
                  >
                    Completion Time
                  </span>

                  <span
                    className="
                    text-xs md:text-sm

                    text-zinc-900
                    dark:text-white
                    "
                  >
                    {projects[current].time}
                  </span>
                </div>

                <div
                  className="
                  flex items-center
                  justify-between

                  border-b border-black/10
                  dark:border-white/10

                  pb-2
                  "
                >
                  <span
                    className="
                    text-xs md:text-sm

                    text-zinc-500
                    "
                  >
                    Technologies
                  </span>

                  <span
                    className="
                    text-xs md:text-sm
                    text-right

                    text-zinc-900
                    dark:text-white
                    "
                  >
                    {projects[current].tech}
                  </span>
                </div>
              </div>

              {/* BUTTONS */}
              <div
                className="
                mt-5

                flex items-center
                gap-3

                flex-wrap
                "
              >
                

                <a
                  href={projects[current].live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex items-center
                  gap-2

                  px-4 py-2.5

                  rounded-xl

                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-500

                  hover:from-blue-600
                  hover:to-cyan-600

                  text-white
                  text-xs md:text-sm
                  font-medium

                  shadow-[0_10px_40px_rgba(59,130,246,0.35)]

                  transition-all duration-300
                  "
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* NAVIGATION */}
            <div
              className="
              absolute

              bottom-4
              right-4

              flex items-center
              gap-2

              z-20
              "
            >
              {/* PREV */}
              <button
                onClick={prevProject}
                className="
                w-9 h-9
                md:w-11 md:h-11

                rounded-full

                border border-black/10
                dark:border-white/10

                bg-white
                dark:bg-white/[0.06]

                backdrop-blur-md

                flex items-center justify-center

                hover:bg-blue-500
                hover:text-white

                transition-all duration-300
                "
              >
                <ChevronLeft size={18} />
              </button>

              {/* NEXT */}
              <button
                onClick={nextProject}
                className="
                w-9 h-9
                md:w-11 md:h-11

                rounded-full

                border border-black/10
                dark:border-white/10

                bg-white
                dark:bg-white/[0.06]

                backdrop-blur-md

                flex items-center justify-center

                hover:bg-blue-500
                hover:text-white

                transition-all duration-300
                "
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default Portfolio;
