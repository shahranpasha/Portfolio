import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import mongodb from "../../public/mongodb.jpg";
import node from "../../public/node.png";
import javascript from "../../public/javascript.png";
function Portfolio() {
  const cardItem = [
    {
      id: 1,
      icon: express,
      title: "Express.js",
      description: "I have experience in Express.js framework",
      link: "https://expressjs.com/",
    },
    {
      id: 2,
      icon: reactjs,
      title: "React.js",
      description: "I have experience in React.js framework",
      link: "https://reactjs.org/",
    },
    {
      id: 3,
      icon: mongodb,
      title: "MongoDB",
      description: "I have experience in MongoDB database",
      link: "https://www.mongodb.com/",
    },
    {
      id: 4,
      icon: node,
      title: "Node.js",
      description: "I have experience in Python programming",
      link: "https://www.python.org/",
    },
    {
      id: 5,
      icon: javascript,
      title: "Javascript",
      description: "I have experience in Java programming",
      link: "https://www.javascript.com/",
    },
    {
      id: 6,
      icon: html,
      title:"Html",
      description: "I have experience in html programming",
      link: "https://html.com/",
  },
    {
      id: 7,
      icon: css,
      title: "Css",
      description: "I have experience in css programming",
      link: "https://web.dev/learn/css",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5 ">
          {cardItem.map(({ id, icon, title, description, link }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200"
              key={id}
            >
              <img
                src={icon}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="font-bold tet-xl mb -2 ">{title}</div>
                <p className="px-2 text-gray-600">{description}</p>
              </div>
              <div className="  py-5  justify-center ">
                <button className="bg-black-500 hover:bg-black-700 text-white font-bold x-4 py-2 rounded justify-center">
                  {" "}
                  <a
                    href={link}
                    target="_blank"
                    className="text-green-500 hover:text-green-600 pl-20"
                  >
                    Visit Site
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
