import React from "react";
import LaserFlow from "../components/LaserFlow";

const About = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* LASER BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LaserFlow
          color="#FF79C6"
          horizontalBeamOffset={0.12}
          verticalBeamOffset={0.02}
        />
      </div>

      {/* READABILITY OVERLAY */}
      <div className="absolute inset-0 bg-black/75 z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-20 py-24 text-white">
        {/* HEADER */}
        <header className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl pt-1 md:pt-8 font-semibold tracking-tight">
            About Me
          </h1>
          <div className="mt-4 h-px w-20 mx-auto bg-white/30" />
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm Md Shahran Turki, a web developer focused on building scalable,
            maintainable, and performance-driven applications using the MERN
            stack. I value clean architecture, thoughtful UI, and code that
            survives real-world usage.
          </p>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* EDUCATION */}
          <Card title="Education & Training">
            <p><strong>B.Tech in Computer Science</strong> – Sharda University</p>
            <p>Expected Graduation: 2027</p>
            <p>CGPA: 8.5 / 10</p>
            <p>Senior Secondary (CBSE): 78%</p>
            <p>Secondary (CBSE): 85%</p>
          </Card>

          {/* SKILLS */}
          <Card title="Skills & Expertise">
            <p>Languages: C, Java, Python, JavaScript</p>
            <p>Frontend: React, Tailwind CSS, Bootstrap</p>
            <p>Backend: Node.js, Express.js</p>
            <p>Database: MongoDB, MySQL</p>
            <p>Stack: MERN</p>
            <p>Version Control: Git, GitHub</p>
          </Card>

          {/* EXPERIENCE */}
          <Card title="Professional Experience">
            <p>Developed production-grade MERN applications</p>
            <p>Designed and consumed RESTful APIs</p>
            <p>Implemented secure data handling with MongoDB</p>
            <p>Worked across frontend and backend integration</p>
            <p>Collaborated using Git-based workflows</p>
          </Card>

          {/* PROJECTS */}
          <Card title="Projects & Achievements">
            <p>Calculator App – July 2024</p>
            <p>Weather App – August 2024</p>
            <p>BookStore App – September 2024</p>
            <p>Personal Portfolio – November 2024</p>
          </Card>

          
        </div>
      </div>
    </section>
  );
};

/* CLEAN, PROFESSIONAL CARD */
const Card = ({ title, children }) => {
  return (
    <div className="
      rounded-xl
      border border-white/10
      bg-neutral-900/85
      p-6
    ">
      <h2 className="text-lg font-semibold mb-4 text-white tracking-wide">
        {title}
      </h2>
      <div className="text-gray-400 space-y-2 leading-relaxed text-sm">
        {children}
      </div>
    </div>
  );
};

export default About;
