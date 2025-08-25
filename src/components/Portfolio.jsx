import React, { useEffect, useRef } from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import mongodb from "../../public/mongodb.jpg";
import node from "../../public/node.png";
import javascript from "../../public/javascript.png";
import java from "../../public/java.png";
import python from "../../public/python.webp";

function Portfolio() {
  const circleRef = useRef(null);
  const portfolioSectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const portfolioSection = portfolioSectionRef.current;
    const line = lineRef.current;
    let isDragging = false;
    let startY, scrollStart;

    const updateCirclePosition = () => {
      if (!circle || !portfolioSection || !line) return;

      const portfolioRect = portfolioSection.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect();
      const scrollY = window.scrollY;
      const portfolioTop = portfolioRect.top + scrollY;
      const portfolioHeight = portfolioRect.height;

      const progress = Math.min(1, Math.max(0, (scrollY - portfolioTop + window.innerHeight / 2) / portfolioHeight));
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
      if (!isDragging || !portfolioSection) return;
      const deltaY = e.clientY - startY;
      const newScroll = Math.min(
        scrollStart + deltaY * 2,
        portfolioSection.offsetTop + portfolioSection.offsetHeight - window.innerHeight
      );
      window.scrollTo({ top: newScroll, behavior: 'auto' });
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.body.style.cursor = '';
    };

    const handleTouchStart = (e) => {
      isDragging = true;
      startY = e.touches[0].clientY;
      scrollStart = window.scrollY;
      e.preventDefault();
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !portfolioSection) return;
      const deltaY = e.touches[0].clientY - startY;
      const newScroll = Math.min(
        scrollStart - deltaY * 2,
        portfolioSection.offsetTop + portfolioSection.offsetHeight - window.innerHeight
      );
      window.scrollTo({ top: newScroll, behavior: 'auto' });
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    if (circle) {
      circle.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      circle.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
      window.addEventListener('scroll', updateCirclePosition);
      updateCirclePosition();
    }

    return () => {
      if (circle) {
        circle.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        circle.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('scroll', updateCirclePosition);
      }
    };
  }, []);

  const cardItem = [
    { id: 1, icon: java, title: "Java", description: "Object-oriented programming language for enterprise applications", link: "https://www.java.com/" },
    { id: 2, icon: python, title: "Python", description: "High-level programming language for general-purpose coding", link: "https://www.python.org/" },
    { id: 3, icon: mongodb, title: "MongoDB", description: "NoSQL database for modern applications", link: "https://www.mongodb.com/" },
    { id: 4, icon: express, title: "Express.js", description: "Backend framework for building efficient server-side applications", link: "https://expressjs.com/" },
    { id: 5, icon: reactjs, title: "React.js", description: "Frontend library for building interactive user interfaces", link: "https://reactjs.org/" },
    { id: 6, icon: node, title: "Node.js", description: "JavaScript runtime for server-side development", link: "https://nodejs.org/" },
    { id: 7, icon: javascript, title: "JavaScript", description: "Versatile programming language for web development", link: "https://www.javascript.com/" },
    { id: 8, icon: html, title: "HTML5", description: "Markup language for structuring web content", link: "https://html.com/" },
    { id: 9, icon: css, title: "CSS3", description: "Styling language for beautiful web designs", link: "https://web.dev/learn/css" },
  ];

  return (
    <div name="Tech Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-black text-white" ref={portfolioSectionRef}>
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">TECH SKILLS</h1>
        <p className="text-center mb-10">My technical skills and expertise areas</p>

        <div className="relative">
          <div className="relative py-10">
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
              {cardItem.map(({ id, icon, title, description, link }, index) => (
                <div
                  key={id}
                  className={`w-full md:w-5/12 mb-16 p-6 border border-white rounded-lg bg-slate-900 shadow-md ${index % 2 === 0 ? "" : "ml-auto"}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full border-2 border-white overflow-hidden mr-4">
                      <img
                        src={icon}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-white font-semibold text-xl">{title}</h2>
                  </div>
                  <p className="text-gray-300 mb-4">{description}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                  >
                    Visit Site
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;