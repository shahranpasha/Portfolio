import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  Rocket,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useEffect, useState } from "react";
import Contact from "./Contact";

const services = [
  {
    icon: <Globe size={34} />,
    title: "Website Development",
    desc: "Modern responsive business websites with premium UI and smooth user experience.",
  },

  {
    icon: <Code2 size={34} />,
    title: "Full Stack Development",
    desc: "Scalable MERN stack applications with authentication, APIs and admin dashboards.",
  },

  {
    icon: <Palette size={34} />,
    title: "UI/UX Design",
    desc: "Clean modern interfaces focused on usability, branding and conversion.",
  },

  {
    icon: <Smartphone size={34} />,
    title: "Responsive Design",
    desc: "Mobile friendly layouts optimized perfectly for all devices and screen sizes.",
  },

  {
    icon: <Rocket size={34} />,
    title: "Performance Optimization",
    desc: "Fast loading optimized websites with better SEO and smooth performance.",
  },

  {
    icon: <ShieldCheck size={34} />,
    title: "Website Maintenance",
    desc: "Ongoing support, bug fixing, updates and deployment management for websites.",
  },
];

const Services = () => {

  const [current, setCurrent] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === services.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  /* PREV */
  const prevService = () => {

    if (current === 0) {
      setCurrent(services.length - 1);
    } else {
      setCurrent(current - 1);
    }

  };

  /* NEXT */
  const nextService = () => {

    if (current === services.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }

  };

  return (

    <section
      className="
      relative

      min-h-screen

      pt-28
      pb-16

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

      {/* BLUR */}
      <div
        className="
        absolute

        top-40
        left-1/2

        -translate-x-1/2

        w-[500px]
        h-[500px]

        bg-blue-500/10

        blur-[120px]

        rounded-full
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
        <div className="text-center">

          <p
            className="
            text-blue-500

            uppercase
            tracking-[5px]

            text-sm
            font-semibold
            "
          >
            Services
          </p>

          <h2
            className="
            mt-5

            text-4xl md:text-6xl
            font-black

            text-zinc-900
            dark:text-white
            "
          >
            What I Can Build
          </h2>

          <p
            className="
            mt-6

            max-w-2xl
            mx-auto

            text-base md:text-lg

            text-zinc-600
            dark:text-zinc-400
            "
          >
            Building premium websites and modern
            digital experiences with clean UI,
            smooth performance and scalable architecture.
          </p>

        </div>

        {/* STACKED CARDS */}
        <div className="relative mt-20 h-[650px]">

          {/* BACK CARD */}
          <div
            className="
            absolute

            top-8
            right-0

            w-[94%]
            h-full

            rounded-[35px]

            bg-white/40
            dark:bg-white/[0.03]

            border border-black/10
            dark:border-white/10

            scale-[0.95]

            opacity-50
            "
          />

          {/* SECOND BACK CARD */}
          <div
            className="
            absolute

            top-4
            right-0

            w-[97%]
            h-full

            rounded-[35px]

            bg-white/50
            dark:bg-white/[0.04]

            border border-black/10
            dark:border-white/10

            scale-[0.98]

            opacity-70
            "
          />

          {/* MAIN CARD */}
          <div
            className="
            relative

            w-full
            h-full

            rounded-[35px]

            border border-black/10
            dark:border-white/10

            bg-white/80
            dark:bg-[#0d1224]/90

            backdrop-blur-xl

            overflow-hidden

            shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            dark:shadow-[0_20px_80px_rgba(59,130,246,0.08)]
            "
          >

            <div
              className="
              grid grid-cols-1
              lg:grid-cols-2

              h-full
              "
            >

              {/* LEFT */}
              <div
                className="
                relative

                p-8 md:p-14

                flex flex-col
                justify-center
                "
              >

                {/* NUMBER */}
                <div
                  className="
                  absolute

                  top-8
                  right-8

                  text-6xl md:text-8xl
                  font-black

                  text-black/[0.04]
                  dark:text-white/[0.04]
                  "
                >
                  0{current + 1}
                </div>

                {/* ICON */}
                <div
                  className="
                  w-20 h-20

                  rounded-3xl

                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-500

                  text-white

                  flex items-center justify-center
                  "
                >
                  {services[current].icon}
                </div>

                {/* TITLE */}
                <h3
                  className="
                  mt-10

                  text-3xl md:text-5xl
                  font-black

                  leading-tight

                  text-zinc-900
                  dark:text-white
                  "
                >
                  {services[current].title}
                </h3>

                {/* LINE */}
                <div
                  className="
                  mt-7

                  w-28
                  h-[4px]

                  rounded-full

                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-500
                  "
                />

                {/* DESC */}
                <p
                  className="
                  mt-8

                  max-w-xl

                  text-base md:text-xl
                  leading-relaxed

                  text-zinc-600
                  dark:text-zinc-400
                  "
                >
                  {services[current].desc}
                </p>

                {/* BUTTONS */}
                <div
                  className="
                  mt-10

                  flex items-center
                  gap-4
                  "
                >

                  <button
  onClick={() => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="
  px-6 py-3

  rounded-2xl

  bg-gradient-to-r
  from-blue-500
  to-cyan-500

  hover:from-blue-600
  hover:to-cyan-600

  text-white
  text-sm
  font-semibold

  shadow-[0_10px_40px_rgba(59,130,246,0.35)]

  transition-all duration-300
  "
>
  Get Started
</button>

                  <button
                    className="
                    px-6 py-3

                    rounded-2xl

                    border border-black/10
                    dark:border-white/10

                    hover:border-blue-500

                    text-sm
                    font-semibold

                    transition-all duration-300
                    "
                  >
                    Learn More
                  </button>

                </div>

              </div>

              {/* RIGHT */}
              <div
                className="
                relative

                hidden lg:flex

                items-center
                justify-center
                "
              >

                {/* BIG ICON BG */}
                <div
                  className="
                  absolute

                  w-[320px]
                  h-[320px]

                  rounded-full

                  bg-blue-500/10

                  blur-[40px]
                  "
                />

                {/* CARD */}
                <div
                  className="
                  relative

                  w-[340px]
                  h-[340px]

                  rounded-[40px]

                  border border-white/10

                  bg-white/[0.04]

                  backdrop-blur-xl

                  flex items-center justify-center
                  "
                >

                  <div
                    className="
                    text-[120px]

                    text-blue-500
                    "
                  >
                    {services[current].icon}
                  </div>

                </div>

              </div>

            </div>

            {/* NAVIGATION */}
            <div
              className="
              absolute

              bottom-8
              right-8

              flex items-center
              gap-4
              "
            >

              {/* PREV */}
              <button
                onClick={prevService}
                className="
                w-12 h-12

                rounded-full

                border border-black/10
                dark:border-white/10

                bg-white
                dark:bg-white/[0.06]

                flex items-center justify-center

                hover:bg-blue-500
                hover:text-white

                transition-all duration-300
                "
              >
                <ChevronLeft />
              </button>

              {/* NEXT */}
              <button
                onClick={nextService}
                className="
                w-12 h-12

                rounded-full

                border border-black/10
                dark:border-white/10

                bg-white
                dark:bg-white/[0.06]

                flex items-center justify-center

                hover:bg-blue-500
                hover:text-white

                transition-all duration-300
                "
              >
                <ChevronRight />
              </button>

            </div>

          </div>

        </div>

      </div>
      <Contact/>

    </section>

  );

};

export default Services;