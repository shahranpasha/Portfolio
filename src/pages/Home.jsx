import {
  FaGoogle,
  FaDiscord,
  FaRedditAlien,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJsSquare,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiHtml5,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiRender,
  SiVercel,
  SiHostinger,
  SiRazorpay,
  SiExpress,
  SiBrave,
  SiNetlify,
} from "react-icons/si";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Contact from "./Contact";
import Resume from "../assets/myresume.pdf";

const stats = [
  {
    number: 2,
    suffix: "+",
    title: "Year of",
    subtitle: "Experience",
  },

  {
    number: 10,
    suffix: "+",
    title: "Projects",
    subtitle: "Completed",
  },

  {
    number: 10,
    suffix: "+",
    title: "Satisfied",
    subtitle: "Happy Clients",
  },

  {
    number: 15,
    suffix: "+",
    title: "Technologies",
    subtitle: "Mastered",
  },
];

const services = [
  {
    icon: "💻",
    title: "Modern Website Development",
    desc: "Responsive and modern business websites with premium UI and smooth user experience.",
  },
  {
    icon: "⚡",
    title: "Full Stack Web Apps",
    desc: "Scalable MERN stack applications with authentication, dashboards and APIs.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Clean and modern interface design focused on performance and visual aesthetics.",
  },
  {
    icon: "🚀",
    title: "Deployment & Optimization",
    desc: "Deployment on Vercel, Render and Hostinger with SEO and performance optimization.",
  },
];
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
    title: "Buyeco E-Commerce",
    subtitle: "Modern Multi-Product E-Commerce Platform",
    image: "/projects/b.png",
    client: "Buyeco",
    time: "Aug 2025 – Nov 2025",
    tech: "React, Node.js, Express.js, Tailwind CSS",
    live: "https://buyeco.com/",
  },
];

const Home = () => {
  const scrollToContact = () => {

  const section = document.getElementById("contact");

  if (section) {

    section.scrollIntoView({
      behavior: "smooth",
    });

  }

};
  const { ref, inView } = useInView({
    triggerOnce: true,
  });


  return (
    <div
      className="
      bg-white
      dark:bg-[#0A0A0A]
      text-black
      dark:text-white
      overflow-hidden
      transition-all
      duration-300
      "
    >
      {/* HERO */}
      <section
        className="
        min-h-screen
        relative
        overflow-hidden
        "
      >
        {/* GRID */}
        <div
          className="
          absolute inset-0

          bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px)]

          dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)]

          bg-[size:40px_40px]
          "
        />

        <div
          className="
          relative z-10
          max-w-7xl mx-auto
          px-8 lg:px-20
          pt-40

          flex flex-col
          lg:flex-row

          items-center
          justify-between

          gap-20
          "
        >
          {/* LEFT */}
          <div className="flex-1">
            <p
              className="
              text-sm uppercase
              tracking-[4px]
              text-blue-500
              mb-5
              "
            >
              HI, I'M
            </p>

            <h1
              className="
              text-5xl md:text-5xl
              font-bold
              leading-tight
              "
            >
              Mohd <br />
              <span className="text-blue-500">Shahran</span> Turki
            </h1>

            <h2
              className="
              mt-5
              text-2xl md:text-3xl
              font-semibold
              text-gray-700
              dark:text-gray-300
              "
            >
              Full Stack Developer
            </h2>

            <p
              className="
              mt-8
              text-gray-600
              dark:text-gray-400
              text-base
              leading-relaxed
              max-w-2xl
              font-mono
              "
            >
              Designing and building modern web applications with clarity,
              performance and long-term maintainability in mind.
            </p>

            {/* BUTTONS */}
<div className="flex gap-5 mt-10 flex-wrap">

  {/* DOWNLOAD RESUME */}
  <a
    href={Resume}
    download

    className="
    px-8 py-4 rounded-full

    bg-blue-600
    hover:bg-blue-700

    transition-all duration-300

    font-medium
    text-white

    shadow-lg shadow-blue-500/20
    "
  >
    Download Resume
  </a>

  {/* HIRE ME */}
  <button

    onClick={scrollToContact}

    className="
    px-8 py-4 rounded-full

    border border-black/10
    dark:border-white/10

    hover:bg-black/5
    dark:hover:bg-white/10

    transition-all duration-300

    font-medium
    "
  >
    Hire Me  →
  </button>

</div>

            {/* EXPERIENCE */}
            <p
              className="
              mt-12
              text-gray-600
              dark:text-gray-400
              text-base
              "
            >
              2+ years of experience
            </p>

            {/* TECH STACK */}
            <div
              className="
              flex flex-wrap
              items-center
              gap-5
              mt-8
              "
            >
              <div className="tech-card text-[#68A063]">
                <FaNodeJs />
              </div>

              <div className="tech-card text-[#3178C6]">
                <SiTypescript />
              </div>

              <div className="tech-card text-[#FFCA28]">
                <SiFirebase />
              </div>

              <div className="tech-card text-[#F7DF1E]">
                <FaJsSquare />
              </div>

              <div className="tech-card text-[#61DBFB]">
                <FaReact />
              </div>

              <div className="tech-card text-[#47A248]">
                <SiMongodb />
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-base">
                +more
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
            flex-1
            flex items-center
            justify-center
            relative
            "
          >
            {/* GLOW */}
            <div
              className="
              absolute
              w-[400px]
              h-[400px]
              
              blur-[120px]
              rounded-full
              "
            />

            {/* SHAPE */}
            <div
              className="
              w-[350px]
              h-[350px]

              md:w-[450px]
              md:h-[450px]

              rounded-[40%]

              

              rotate-12
              animate-pulse
              "
            />
            <img className=" rounded-xl" src="/kinh.jpeg" alt="" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={ref} className="py-32">
        <div
          className="
          max-w-7xl mx-auto

          grid grid-cols-2
          md:grid-cols-4

          gap-10
          text-center
          px-8
          "
        >
          {stats.map((item, index) => (
            <div key={index}>
              <h2
                className="
                text-5xl font-bold
                text-blue-500
                "
              >
                {inView && <CountUp end={item.number} duration={3} />}

                {item.suffix}
              </h2>

              <p className="mt-4 text-sm">{item.title}</p>

              <p className="text-gray-600 dark:text-gray-400">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="
  py-32 px-6 md:px-8

  bg-[#f5f5f7]
  dark:bg-[#0b0b12]

  transition-colors duration-500
  "
      >
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-20">
            <p
              className="
        text-violet-500
        uppercase
        tracking-[4px]
        font-semibold
        "
            >
              Services
            </p>

            <h2
              className="
        mt-4

        text-5xl md:text-4xl
        font-bold

        text-zinc-900
        dark:text-white
        "
            >
              What I Can Build
            </h2>
          </div>

          {/* GRID */}
          <div
            className="
      grid grid-cols-1
      md:grid-cols-2

      gap-6
      "
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="
          group

          relative

          rounded-[32px]

          border border-black/10
          dark:border-violet-500/20

          bg-white
          dark:bg-[#141421]

          p-6

          overflow-hidden

          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          dark:shadow-[0_10px_40px_rgba(124,58,237,0.08)]

          hover:-translate-y-3
          hover:border-violet-500/40

          transition-all duration-500
          "
              >
                {/* NUMBER */}
                <div
                  className="
            absolute top-6 right-6

            text-4xl font-black

            text-black/[0.05]
            dark:text-white/[0.04]
            "
                ></div>

                {/* ICON */}
                <div
                  className="
            w-14 h-14

            rounded-2xl

            bg-violet-500/10

            border border-violet-500/20

            flex items-center justify-center

            text-3xl
            "
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3
                  className="
            mt-8

            text-sm font-bold

            text-zinc-900
            dark:text-white

            leading-tight
            "
                >
                  {service.title}
                </h3>

                {/* LINE */}
                <div
                  className="
            mt-5

            w-20 h-[4px]

            rounded-full
            bg-violet-500
            "
                />

                {/* DESC */}
                <p
                  className="
            mt-6

            text-base
            leading-relaxed

            text-zinc-600
            dark:text-zinc-400
            "
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
  className="
  py-32 px-6 md:px-8

  bg-[#f5f5f7]
  dark:bg-[#0b0b12]

  transition-colors duration-500
  "
>
  <div className="max-w-7xl mx-auto">
    
    {/* HEADING */}
    <div className="text-center mb-20">
      <p
        className="
        text-violet-500
        font-semibold
        tracking-[4px]
        uppercase
        "
      >
        Portfolio
      </p>

      <h2
        className="
        mt-4

        text-5xl md:text-4xl
        font-bold

        text-zinc-900
        dark:text-white
        "
      >
        Featured Projects
      </h2>
    </div>

    {/* PROJECT GRID */}
    <div
      className="
      grid grid-cols-1
      md:grid-cols-2

      gap-6
      "
    >

      {projects.slice(0, 2).map((project, i) => (
        <a
          key={i}
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="
          group

          relative

          rounded-[30px]

          border border-black/10
          dark:border-violet-500/20

          bg-white
          dark:bg-[#141421]

          overflow-hidden

          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          dark:shadow-[0_10px_40px_rgba(124,58,237,0.08)]

          hover:-translate-y-2

          transition-all duration-500
          "
        >
          {/* LIVE BUTTON */}
          <div
            className="
            absolute top-5 right-5 z-20
            "
          >
            <button
              className="
              px-4 py-2

              rounded-full

              bg-violet-500
              hover:bg-violet-600

              text-white
              text-sm
              font-medium

              transition-all duration-300
              "
            >
              Live ↗
            </button>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="
              h-64 w-full
              object-cover

              group-hover:scale-110

              transition-transform duration-700
              "
            />
          </div>

          {/* CONTENT */}
          <div className="p-7">
            <h3
              className="
              text-sm font-bold

              text-zinc-900
              dark:text-white
              "
            >
              {project.title}
            </h3>

            <p
              className="
              mt-4

              text-base

              text-zinc-600
              dark:text-zinc-400
              "
            >
              {project.subtitle}
            </p>
          </div>
        </a>
      ))}

    </div>

    {/* VIEW ALL */}
    <div className="flex justify-center mt-16">
      <a
        href="/portfolio"
        className="
        group

        px-8 py-4

        rounded-full

        border border-black/10
        dark:border-violet-500/20

        bg-white
        dark:bg-[#141421]

        text-base font-semibold

        text-zinc-900
        dark:text-white

        hover:bg-violet-500
        hover:text-white

        transition-all duration-300
        "
      >
        View All Projects →
      </a>
    </div>
  </div>
</section>

      {/* RESUME */}
      <section
        className="
  py-32 px-6 md:px-8

  bg-[#f5f5f7]
  dark:bg-[#0b0b12]

  transition-colors duration-500
  "
      >
        <div
          className="
    max-w-7xl mx-auto

    grid grid-cols-1
    lg:grid-cols-2

    gap-10
    "
        >
          {/* EDUCATION */}
          <div
            className="
      relative

      rounded-[32px]

      border border-black/10
      dark:border-violet-500/20

      bg-white
      dark:bg-[#141421]

      p-6 md:p-10

      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      dark:shadow-[0_10px_40px_rgba(124,58,237,0.08)]

      transition-all duration-500
      overflow-hidden
      "
          >
            {/* TOP LINE */}
            <div
              className="
        absolute top-0 left-0
        h-[2px] w-full

        bg-gradient-to-r
        from-transparent
        via-violet-500
        to-transparent
        "
            />

            {/* HEADER */}
            <div className="mb-12">
              <div className="flex items-center gap-5">
                <div
                  className="
            w-14 h-14

            rounded-2xl

            bg-violet-500/10

            border border-violet-500/20

            flex items-center justify-center

            text-2xl
            "
                >
                  🎓
                </div>

                <div>
                  <h2
                    className="
              text-5xl font-bold

              text-zinc-900
              dark:text-white
              "
                  >
                    Education
                  </h2>

                  <div
                    className="
              mt-4
              w-28
              h-[4px]

              rounded-full
              bg-violet-500
              "
                  />
                </div>
              </div>
            </div>

            {/* CARDS */}
            <div className="space-y-8">
              {/* BTECH */}
              <div
                className="
          rounded-3xl

          border border-black/10
          dark:border-violet-500/20

          bg-black/[0.02]
          dark:bg-white/[0.02]

          p-6

          hover:scale-[1.02]
          hover:border-violet-500/40

          transition-all duration-500
          "
              >
                <p className="text-violet-500 font-semibold text-sm">
                  2023 - Present
                </p>

                <h3
                  className="
            mt-5

            text-2xl font-bold

            text-zinc-900
            dark:text-white

            leading-tight
            "
                >
                  Bachelor of Technology (B.Tech)
                </h3>

                <p
                  className="
            mt-6

            text-base leading-relaxed

            text-zinc-600
            dark:text-zinc-400
            "
                >
                  Pursuing Bachelor of Technology from Sharda University with
                  focus on full stack development and software engineering.
                </p>
              </div>

              {/* CERTIFICATE */}
              <div
                className="
          rounded-3xl

          border border-black/10
          dark:border-violet-500/20

          bg-black/[0.02]
          dark:bg-white/[0.02]

          p-6

          hover:scale-[1.02]
          hover:border-violet-500/40

          transition-all duration-500
          "
              >
                <p className="text-violet-500 font-semibold text-sm">2024</p>

                <h3
                  className="
            mt-5

            text-2xl font-bold

            text-zinc-900
            dark:text-white
            "
                >
                  Frontend Development Certification
                </h3>

                <p
                  className="
            mt-6

            text-base leading-relaxed

            text-zinc-600
            dark:text-zinc-400
            "
                >
                  Learned React.js, Tailwind CSS, responsive UI design and
                  modern frontend practices.
                </p>
              </div>

              {/* CERTIFICATE */}
              <div
                className="
          rounded-3xl

          border border-black/10
          dark:border-violet-500/20

          bg-black/[0.02]
          dark:bg-white/[0.02]

          p-6

          hover:scale-[1.02]
          hover:border-violet-500/40

          transition-all duration-500
          "
              >
                <p className="text-violet-500 font-semibold text-sm">2025</p>

                <h3
                  className="
            mt-5

            text-2xl font-bold

            text-zinc-900
            dark:text-white
            "
                >
                  Full Stack Web Development Certification
                </h3>

                <p
                  className="
            mt-6

            text-base leading-relaxed

            text-zinc-600
            dark:text-zinc-400
            "
                >
                  Covered MERN stack development, REST APIs, authentication and
                  deployment workflows.
                </p>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div
            className="
      relative

      rounded-[32px]

      border border-black/10
      dark:border-violet-500/20

      bg-white
      dark:bg-[#141421]

      p-6 md:p-10

      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      dark:shadow-[0_10px_40px_rgba(124,58,237,0.08)]

      transition-all duration-500
      overflow-hidden
      "
          >
            {/* TOP LINE */}
            <div
              className="
        absolute top-0 left-0
        h-[2px] w-full

        bg-gradient-to-r
        from-transparent
        via-violet-500
        to-transparent
        "
            />

            {/* HEADER */}
            <div className="mb-12">
              <div className="flex items-center gap-5">
                <div
                  className="
            w-14 h-14

            rounded-2xl

            bg-violet-500/10

            border border-violet-500/20

            flex items-center justify-center

            text-2xl
            "
                >
                  💼
                </div>

                <div>
                  <h2
                    className="
              text-5xl font-bold

              text-zinc-900
              dark:text-white
              "
                  >
                    Experience
                  </h2>

                  <div
                    className="
              mt-4
              w-28
              h-[4px]

              rounded-full
              bg-violet-500
              "
                  />
                </div>
              </div>
            </div>

            {/* CARDS */}
            <div className="space-y-8">
              {/* ELITE */}
              <div
                className="
          rounded-3xl

          border border-black/10
          dark:border-violet-500/20

          bg-black/[0.02]
          dark:bg-white/[0.02]

          p-6

          hover:scale-[1.02]
          hover:border-violet-500/40

          transition-all duration-500
          "
              >
                <p className="text-violet-500 font-semibold text-sm">
                  2025 - Present
                </p>

                <h3
                  className="
            mt-5

            text-2xl font-bold

            text-zinc-900
            dark:text-white
            "
                >
                  Elite Design Arcvibe
                </h3>

                <p className="mt-3 text-violet-500 text-base font-medium">
                  Self Employed
                </p>

                <p
                  className="
            mt-6

            text-base leading-relaxed

            text-zinc-600
            dark:text-zinc-400
            "
                >
                  Working as a freelance full stack developer building modern
                  business websites, interior design platforms and scalable web
                  applications.
                </p>
              </div>

              {/* RUHI */}
              <div
                className="
          rounded-3xl

          border border-black/10
          dark:border-violet-500/20

          bg-black/[0.02]
          dark:bg-white/[0.02]

          p-6

          hover:scale-[1.02]
          hover:border-violet-500/40

          transition-all duration-500
          "
              >
                <p className="text-violet-500 font-semibold text-sm">
                  Jan 2025 – jul 2025
                </p>

                <h3
                  className="
            mt-5

            text-2xl font-bold

            text-zinc-900
            dark:text-white
            "
                >
                  Ruhi Interiors
                </h3>

                <p
                  className="
            mt-6

            text-base leading-relaxed

            text-zinc-600
            dark:text-zinc-400
            "
                >
                  Worked on responsive website interfaces, UI improvements and
                  frontend optimization.
                </p>
              </div>

              {/* BUYECO */}
              <div
                className="
          rounded-3xl

          border border-black/10
          dark:border-violet-500/20

          bg-black/[0.02]
          dark:bg-white/[0.02]

          p-6

          hover:scale-[1.02]
          hover:border-violet-500/40

          transition-all duration-500
          "
              >
                <p className="text-violet-500 font-semibold text-sm">
                  Aug 2025 – Nov 2025
                </p>

                <h3
                  className="
            mt-5

            text-2xl font-bold

            text-zinc-900
            dark:text-white
            "
                >
                  Buyeco
                </h3>

                <p
                  className="
            mt-6

            text-base leading-relaxed

            text-zinc-600
            dark:text-zinc-400
            "
                >
                  Developed and maintained modern web pages with focus on
                  performance, responsiveness and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-40 px-8">
        <div
          className="
    max-w-7xl mx-auto

    rounded-[28px]

    border border-black/10
    dark:border-white/10

    bg-black/[0.03]
    dark:bg-white/[0.03]

    backdrop-blur-xl

    p-10 md:p-16

    grid grid-cols-1
    lg:grid-cols-2

    gap-20
    items-center

    relative
    overflow-hidden
    "
        >
          {/* BG GLOW */}
          <div
            className="
      absolute
      -top-40
      -left-40

      w-[350px]
      h-[350px]

      bg-blue-500/10

      blur-[120px]
      rounded-full
      "
          />

          {/* LEFT */}
          <div className="relative z-10 overflow-hidden">
            {/* TOP ROW */}
            <div
              className="
        flex gap-6
        mb-6

        w-max
        animate-marquee
        "
            >
              {[
                {
                  icon: <SiHtml5 className="text-[#E34F26]" />,
                  name: "HTML5",
                },

                {
                  icon: <FaCss3Alt className="text-[#1572B6]" />,
                  name: "CSS3",
                },

                {
                  icon: <SiJavascript className="text-[#F7DF1E]" />,
                  name: "JavaScript",
                },

                {
                  icon: <SiTypescript className="text-[#3178C6]" />,
                  name: "TypeScript",
                },

                {
                  icon: <FaReact className="text-[#61DAFB]" />,
                  name: "React.js",
                },

                {
                  icon: <FaNodeJs className="text-[#68A063]" />,
                  name: "Node.js",
                },

                {
                  icon: <SiHtml5 className="text-[#E34F26]" />,
                  name: "HTML5",
                },

                {
                  icon: <FaCss3Alt className="text-[#1572B6]" />,
                  name: "CSS3",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
            min-w-[190px]

            rounded-[30px]

            border border-black/10
            dark:border-white/10

            bg-white/70
            dark:bg-white/[0.03]

            backdrop-blur-xl

            p-6

            hover:-translate-y-2
            hover:border-blue-500/30

            transition-all duration-300
            "
                >
                  <div className="text-5xl mb-6">{item.icon}</div>

                  <h3 className="text-base font-semibold">{item.name}</h3>
                </div>
              ))}
            </div>

            {/* BOTTOM ROW */}
            <div
              className="
        flex gap-6

        w-max
        animate-marquee-reverse
        "
            >
              {[
                {
                  icon: <SiMongodb className="text-[#47A248]" />,
                  name: "MongoDB",
                },

                {
                  icon: <SiFirebase className="text-[#FFCA28]" />,
                  name: "Firebase",
                },

                {
                  icon: <SiTailwindcss className="text-[#38BDF8]" />,
                  name: "Tailwind",
                },

                {
                  icon: <SiNextdotjs className="text-white dark:text-white" />,
                  name: "Next.js",
                },

                {
                  icon: <SiMongodb className="text-[#47A248]" />,
                  name: "MongoDB",
                },

                {
                  icon: <SiFirebase className="text-[#FFCA28]" />,
                  name: "Firebase",
                },

                {
                  icon: <SiTailwindcss className="text-[#38BDF8]" />,
                  name: "Tailwind",
                },

                {
                  icon: <SiNextdotjs className="text-white dark:text-white" />,
                  name: "Next.js",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
            min-w-[190px]

            rounded-[30px]

            border border-black/10
            dark:border-white/10

            bg-white/70
            dark:bg-white/[0.03]

            backdrop-blur-xl

            p-6

            hover:-translate-y-2
            hover:border-blue-500/30

            transition-all duration-300
            "
                >
                  <div className="text-5xl mb-6">{item.icon}</div>

                  <h3 className="text-base font-semibold">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative z-10">
            <p
              className="
        uppercase tracking-[5px]
        text-blue-500
        text-sm mb-5
        "
            >
              Expertise
            </p>

            <h2
              className="
        text-5xl md:text-4xl
        font-bold

        leading-tight
        mb-12
        "
            >
              Technical Expertise
            </h2>

            <div className="space-y-10 text-base">
              <div>
                <span className="font-semibold text-2xl">Front-End</span>

                <p
                  className="
            mt-3

            text-gray-600
            dark:text-gray-400

            leading-relaxed
            "
                >
                  HTML, CSS, JavaScript, React.js, Tailwind CSS, responsive UI
                  and modern animations.
                </p>
              </div>

              <div>
                <span className="font-semibold text-2xl">Back-End</span>

                <p
                  className="
            mt-3

            text-gray-600
            dark:text-gray-400

            leading-relaxed
            "
                >
                  Node.js, Express.js, REST APIs, authentication systems and
                  scalable architecture.
                </p>
              </div>

              <div>
                <span className="font-semibold text-2xl">Databases</span>

                <p
                  className="
            mt-3

            text-gray-600
            dark:text-gray-400

            leading-relaxed
            "
                >
                  MongoDB, PostgreSQL and Firebase for scalable applications.
                </p>
              </div>

              <div>
                <span className="font-semibold text-2xl">
                  Tools & Platforms
                </span>

                <p
                  className="
            mt-3

            text-gray-600
            dark:text-gray-400

            leading-relaxed
            "
                >
                  Git, GitHub, Vercel, Render, Netlify, Hostinger and deployment
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED SECTION */}
      <section className="py-40 overflow-hidden">
        {/* HEADING */}
        <div className="text-center mb-24 px-6">
          <p
            className="
      uppercase tracking-[5px]
      text-blue-500
      text-sm mb-4
      "
          >
            Trusted Stack
          </p>

          <h2
            className="
      text-5xl md:text-4xl
      font-bold
      "
          >
            Trusted by modern technologies
          </h2>

          <p
            className="
      mt-6
      max-w-3xl
      mx-auto

      text-base
      leading-relaxed

      text-gray-600
      dark:text-gray-400
      "
          >
            Building scalable and modern web applications using powerful
            technologies and industry-standard tools.
          </p>
        </div>

        {/* MOVING LOGOS */}
        <div className="relative">
          {/* LEFT FADE */}
          <div
            className="
      absolute left-0 top-0
      z-10
      h-full w-40

      bg-gradient-to-r
      from-white
      dark:from-[#050816]
      to-transparent
      "
          />

          {/* RIGHT FADE */}
          <div
            className="
      absolute right-0 top-0
      z-10
      h-full w-40

      bg-gradient-to-l
      from-white
      dark:from-[#050816]
      to-transparent
      "
          />

          <div
            className="
      group
      overflow-hidden

      [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]
      "
          >
            <div
              className="
        flex items-center
        gap-24

        min-w-max

        animate-marquee

        px-10

        group-hover:[animation-play-state:paused]
        "
            >
              {[
                {
                  icon: <FaGoogle className="text-red-400" />,
                  name: "Google",
                },

                {
                  icon: <SiBrave className="text-orange-500" />,
                  name: "Brave",
                },

                {
                  icon: <FaDiscord className="text-indigo-400" />,
                  name: "Discord",
                },

                {
                  icon: <FaRedditAlien className="text-orange-400" />,
                  name: "Reddit",
                },

                {
                  icon: <FaReact className="text-cyan-400" />,
                  name: "React",
                },

                {
                  icon: <FaNodeJs className="text-green-500" />,
                  name: "Node.js",
                },

                {
                  icon: <SiMongodb className="text-green-400" />,
                  name: "MongoDB",
                },

                {
                  icon: <SiFirebase className="text-yellow-400" />,
                  name: "Firebase",
                },

                {
                  icon: <SiTailwindcss className="text-cyan-400" />,
                  name: "Tailwind CSS",
                },

                {
                  icon: <SiTypescript className="text-blue-500" />,
                  name: "TypeScript",
                },

                {
                  icon: <SiJavascript className="text-yellow-300" />,
                  name: "JavaScript",
                },

                {
                  icon: <SiNextdotjs className="text-white" />,
                  name: "Next.js",
                },

                {
                  icon: <SiRender className="text-blue-400" />,
                  name: "Render",
                },

                {
                  icon: <SiVercel className="text-white" />,
                  name: "Vercel",
                },

                {
                  icon: <SiNetlify className="text-cyan-300" />,
                  name: "Netlify",
                },

                {
                  icon: <SiHostinger className="text-violet-400" />,
                  name: "Hostinger",
                },

                {
                  icon: <SiRazorpay className="text-blue-500" />,
                  name: "Razorpay",
                },

                {
                  icon: <SiExpress className="text-gray-300" />,
                  name: "Express.js",
                },
              ]
                .concat([
                  {
                    icon: <FaGoogle className="text-red-400" />,
                    name: "Google",
                  },

                  {
                    icon: <SiBrave className="text-orange-500" />,
                    name: "Brave",
                  },

                  {
                    icon: <FaDiscord className="text-indigo-400" />,
                    name: "Discord",
                  },

                  {
                    icon: <FaRedditAlien className="text-orange-400" />,
                    name: "Reddit",
                  },

                  {
                    icon: <FaReact className="text-cyan-400" />,
                    name: "React",
                  },

                  {
                    icon: <FaNodeJs className="text-green-500" />,
                    name: "Node.js",
                  },
                ])
                .map((item, index) => (
                  <div
                    key={index}
                    className="
              flex items-center
              gap-5

              shrink-0

              opacity-70
              hover:opacity-100

              transition-all duration-300
              "
                  >
                    {/* ICON */}
                    <div
                      className="
                text-5xl
                
                "
                    >
                      {item.icon}
                    </div>

                    {/* NAME */}
                    <span
                      className="
                text-4xl
                font-bold

                text-black/80
                dark:text-white/80

                hover:text-blue-500

                transition-all duration-300
                "
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-40 overflow-hidden">
        {/* HEADING */}
        <div className="text-center mb-20 px-6">
          <p
            className="
      uppercase tracking-[5px]
      text-blue-500
      text-sm mb-4
      "
          >
            Testimonials
          </p>

          <h2
            className="
      text-5xl md:text-4xl
      font-bold
      "
          >
            What Clients Say
          </h2>

          <p
            className="
      max-w-2xl
      mx-auto
      mt-6

      text-gray-600
      dark:text-gray-400

      text-base
      leading-relaxed
      "
          >
            Clients appreciate modern UI, scalable architecture and
            high-performance development focused on premium user experience.
          </p>
        </div>

        {/* MARQUEE */}
        <div className="relative">
          {/* LEFT FADE */}
          <div
            className="
      absolute left-0 top-0
      z-10
      h-full w-32

      bg-gradient-to-r
      from-white
      dark:from-[#050816]
      to-transparent
      "
          />

          {/* RIGHT FADE */}
          <div
            className="
      absolute right-0 top-0
      z-10
      h-full w-32

      bg-gradient-to-l
      from-white
      dark:from-[#050816]
      to-transparent
      "
          />

          {/* MOVING CONTAINER */}
          <div
            className="
      group
      flex
      overflow-hidden

      [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]
      "
          >
            <div
              className="
        flex
        min-w-full
        shrink-0

        animate-marquee

        gap-6
        px-4

        group-hover:[animation-play-state:paused]
        "
            >
              {[
                {
  name: "Turki Faheem",
  role: "Elite Design Arcvibe",
  text: "Working with Shahran was an excellent experience. The website design, responsiveness and premium UI exceeded our expectations.",
},

{
  name: "Ibrahim Baig",
  role: "Ruhi Interiors",
  text: "Modern design, smooth user experience and professional communication throughout the project delivery.",
},

{
  name: "Buyeco CEO",
  role: "Buyeco E-Commerce",
  text: "The platform was developed with clean UI, fast performance and scalable architecture for future growth.",
},
{
  name: "Daniel Morris",
  role: "LUMINA Restaurant",
  text: "The website perfectly captured our restaurant’s premium atmosphere with elegant UI, smooth animations and mobile responsiveness.",
},

{
  name: "Dr. Arjun Mehta",
  role: "Hospital Management System",
  text: "The dashboard and patient management system streamlined our workflow with a clean interface and reliable performance.",
},
              ]
                .concat([
  {
    name: "Turki Faheem",
    role: "Elite Design Arcvibe",
    text: "Working with Shahran was an excellent experience. The website design, responsiveness and premium UI exceeded our expectations.",
  },

  {
    name: "Ibrahim Baig",
    role: "Ruhi Interiors",
    text: "Modern design, smooth user experience and professional communication throughout the project delivery.",
  },

  {
    name: "Buyeco CEO",
    role: "Buyeco E-Commerce",
    text: "The platform was developed with clean UI, fast performance and scalable architecture for future growth.",
  },

  {
    name: "Daniel Morris",
    role: "LUMINA Restaurant",
    text: "The website perfectly captured our restaurant’s premium atmosphere with elegant UI, smooth animations and mobile responsiveness.",
  },

  {
    name: "Dr. Arjun Mehta",
    role: "Hospital Management System",
    text: "The dashboard and patient management system streamlined our workflow with a clean interface and reliable performance.",
  },
])
                .map((item, i) => (
                  <div
                    key={i}
                    className="
              relative

              w-[430px]
              shrink-0

              rounded-[28px]

              border border-black/10
              dark:border-white/10

              bg-white/80
              dark:bg-white/[0.03]

              backdrop-blur-xl

              p-10

              shadow-[0_10px_40px_rgba(15,23,42,0.05)]

              hover:shadow-[0_20px_80px_rgba(59,130,246,0.18)]

              hover:-translate-y-2

              transition-all
              duration-500
              "
                  >
                    {/* QUOTE */}
                    <div
                      className="
                absolute
                top-6 right-8

                text-5xl
                text-blue-200
                dark:text-blue-500/20
                "
                    >
                      ”
                    </div>

                    {/* PROFILE */}
                    <div className="flex items-center gap-5">
                      <div
                        className="
                  w-14 h-14
                  rounded-full

                  bg-gradient-to-br
                  from-blue-500
                  to-cyan-400

                  flex
                  items-center
                  justify-center

                  text-white
                  font-bold
                  text-sm
                  "
                      >
                        {item.name.charAt(0)}
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold">{item.name}</h3>

                        <p className="text-blue-500">{item.role}</p>
                      </div>
                    </div>

                    {/* TEXT */}
                    <p
                      className="
                mt-8

                text-base
                leading-relaxed

                text-gray-600
                dark:text-gray-400

                whitespace-normal
                "
                    >
                      "{item.text}"
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Home;
