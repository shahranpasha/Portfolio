import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const circleRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const lineRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const achievementsRef = useRef(null);
  const missionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('data-section'));
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.4 }
    );

    const sections = [
      educationRef.current,
      skillsRef.current,
      experienceRef.current,
      achievementsRef.current,
      missionRef.current
    ].filter(Boolean);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const circle = circleRef.current;
    const aboutSection = aboutSectionRef.current;
    const line = lineRef.current;
    let isDragging = false;
    let startY, scrollStart;

    const updateCirclePosition = () => {
      if (!circle || !aboutSection || !line) return;

      const aboutRect = aboutSection.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect();
      const scrollY = window.scrollY;
      const aboutTop = aboutRect.top + scrollY;
      const aboutHeight = aboutRect.height;

      const progress = Math.min(1, Math.max(0, (scrollY - aboutTop + window.innerHeight / 2) / aboutHeight));
      const lineHeight = lineRect.height;
      const circleTop = Math.min(progress * lineHeight, lineHeight - 12);
      circle.style.top = `${circleTop}px`;
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      startY = e.clientY;
      scrollStart = window.scrollY;
      document.body.style.cursor = 'ns-resize';
      e.preventDefault();
    };

    const handleMouseMove = (e) => {
      if (!isDragging || !aboutSection) return;
      const deltaY = e.clientY - startY;
      const newScroll = Math.min(
        scrollStart + deltaY * 2,
        aboutSection.offsetTop + aboutSection.offsetHeight - window.innerHeight
      );
      window.scrollTo({ top: newScroll, behavior: 'auto' });
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.body.style.cursor = '';
    };

    if (circle) {
      circle.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('scroll', updateCirclePosition);
      updateCirclePosition();
    }

    return () => {
      if (circle) {
        circle.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('scroll', updateCirclePosition);
      }
    };
  }, []);

  const getSectionClasses = (sectionName) => {
    const baseClasses = "w-full md:w-5/12 mb-16 p-6 border border-white rounded-lg bg-slate-900 shadow-md transition-all duration-500 ease-out";
    const focusedClasses = "opacity-100 translate-y-0 scale-100 bg-slate-900";
    const unfocusedClasses = "md:opacity-20 md:scale-90 md:pointer-events-none bg-gray-900";

    return `${baseClasses} ${activeSection === null || activeSection === sectionName ? focusedClasses : unfocusedClasses}`;
  };

  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-black text-white" ref={aboutSectionRef}>
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">ABOUT</h1>
        <p className="text-center">
          Hello, I'm Md Shahran Turki, a passionate Web developer with a keen eye for
          MERN Stack. With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
          <br />I am also actively seeking part-time opportunities to gain
          professional experience and support myself financially. Driven by a
          passion for technology and problem-solving, I am enthusiastic about
          contributing to real-world projects and furthering my career in tech.
        </p>
        <br /><br />

        <div className="relative">
          <div className="relative py-20">
            <div
              ref={lineRef}
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white transform -translate-x-1/2 z-10"
            ></div>

            <div
              ref={circleRef}
              className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full border-2 border-white bg-black transform -translate-x-1/2 z-20 cursor-ns-resize"
              style={{ touchAction: 'none' }}
            ></div>

            <div className="container mx-auto px-4 relative">
              <div
                ref={educationRef}
                data-section="education"
                className={`${getSectionClasses('education')} ${activeSection === 'education' ? 'md:ml-0' : ''}`}
              >
                <h1 className="text-white font-semibold text-xl mb-4">Education & Training</h1>
                <div className="text-gray-300">
                  <div className="flex items-start mb-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span className="font-medium">Bachelor of Technology (B.Tech) in Computer Science</span>
                  </div>
                  <div className="ml-5 mb-3">
                    <div className="flex items-start">
                      <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1.5 mr-2"></span>
                      <span>Sharda University, Expected Graduation: 2027</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1.5 mr-2"></span>
                      <span>Current CGPA: 8.5/10</span>
                    </div>
                  </div>

                  <div className="flex items-start mb-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span className="font-medium">Senior Secondary (12th Grade)</span>
                  </div>
                  <div className="ml-5 mb-3">
                    <div className="flex items-start">
                      <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1.5 mr-2"></span>
                      <span>Board: CBSE (Year: 2021-2022)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1.5 mr-2"></span>
                      <span>Percentage: 78%</span>
                    </div>
                  </div>

                  <div className="flex items-start mb-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span className="font-medium">Secondary (10th Grade)</span>
                  </div>
                  <div className="ml-5">
                    <div className="flex items-start">
                      <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1.5 mr-2"></span>
                      <span>Board: CBSE (Year: 2019-2020)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1.5 mr-2"></span>
                      <span>Percentage: 85%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                ref={skillsRef}
                data-section="skills"
                className={`${getSectionClasses('skills')} ml-auto`}
              >
                <h1 className="text-white font-semibold text-xl mb-4">Skills & Expertise</h1>
                <div className="text-gray-300">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Programming Languages: C, Java, Python, JavaScript, HTML, CSS</span>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Frontend: React.js, responsive design, Tailwind CSS, Bootstrap</span>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Backend: Node.js, Express.js</span>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Database: MongoDB Compass, MySQL</span>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Web Development Stack: MERN (MongoDB, Express.js, React.js, Node.js)</span>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Version Control: Git, GitHub</span>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Project Management: Experience working on team-based projects</span>
                  </div>
                </div>
              </div>

              <div
                ref={experienceRef}
                data-section="experience"
                className={`${getSectionClasses('experience')} ${activeSection === 'experience' ? 'md:ml-0' : ''}`}
              >
                <h1 className="text-white font-semibold text-xl mb-4">Professional Experience</h1>
                <div className="text-gray-300">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Developed a financial software application using the MERN stack</span>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Integrated MongoDB for data storage and used MongoDB Compass</span>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Worked on both front-end and back-end development</span>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Managed RESTful API connections and data flow</span>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Collaborated with peers on GitHub for version control</span>
                  </div>
                </div>
              </div>

              <div
                ref={achievementsRef}
                data-section="achievements"
                className={`${getSectionClasses('achievements')} ml-auto`}
              >
                <h1 className="text-white font-semibold text-xl mb-4">Achievements & Awards</h1>
                <div className="text-gray-300">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Completed Financial Software Project (React App)</span>
                  </div>
                  <div className="ml-4 mt-1">
                    <div className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 border border-white rounded-sm mt-1.5 mr-2"></span>
                      <span>Calculator App [July, 2024]</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 border border-white rounded-sm mt-1.5 mr-2"></span>
                      <span>Weather App [August, 2024]</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 border border-white rounded-sm mt-1.5 mr-2"></span>
                      <span>BookStore App [September, 2024]</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 border border-white rounded-sm mt-1.5 mr-2"></span>
                      <span>Personal Portfolio [November, 2024]</span>
                    </div>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Academic Achievement: Strong performance in Computer Science</span>
                  </div>
                  <div className="flex items-start mt-2">
                    <span className="inline-block w-2 h-2 border border-white rounded-sm mt-1 mr-2"></span>
                    <span>Independent Learning: Web development through self-study</span>
                  </div>
                </div>
              </div>

              <div
                ref={missionRef}
                data-section="mission"
                className={`${getSectionClasses('mission')} ${activeSection === 'mission' ? 'md:ml-0' : ''}`}
              >
                <h1 className="text-white font-semibold text-xl mb-4">Mission Statement</h1>
                <div className="text-gray-300">
                  My mission is to leverage my skills and creativity to deliver
                  innovative Software Development solutions that exceed client expectations and
                  contribute positively to the digital landscape. I am committed to
                  continuous learning and growth, always seeking new challenges and
                  opportunities to expand my horizons.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;