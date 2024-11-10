import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import mongodb from "../../public/mongodb.jpg";
import node from "../../public/node.png";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
function Experience() {
  const cardItem = [
    {
      id: 1,
      icon: html,
      title: "HTML",
    },
    {
      id: 2,
      icon: css,
      title: "CSS",
    },
    {
      id: 3,
      icon: express,
      title: "Express.js",
    },
    {
      id: 4,
      icon: javascript,
      title: "Javascript",
    },
    {
      id: 5,
      icon: reactjs,
      title: "React.js",
    },
    {
      id: 6,
      icon: mongodb,
      title: "MongoDB",
    },
    {
      id: 7,
      icon: node,
      title: "Node.js",
    },

    {
      id: 8,
      icon: python,
      title: "Python",
    },
    {
      id: 9,
      icon: java,
      title: "Java",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <span className="">I'm fresher in the below technologies.</span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, icon, title }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={icon} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
