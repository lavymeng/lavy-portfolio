import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "../public/SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Agritech",
    description:
      "Agritech is a project which is focusing on solving the agriculture problem in Cambodia. We were trying to find the problem and solve that problem by using technologies.",
    image: "/agritech.png",
    github: "",
    link: "https://www.figma.com/proto/aTotwBRxukKioXFKBK9RQB?type=design&node-id=0-1&mode=design&t=RaeBG2eGBNUGP3aa-6",
  },
  {
    name: "Technology training",
    description:
      "Join and experience various training such as Mobile game, Flutter app, White hacker, Electron desktop, Fintech.",
    image: "/training.png",
    github: "",
    link: "",
  },
  {
    name: "Proadvisor",
    description:
      "Proadvisor is a platform which provides financial information and help in decision making on loan and saving on bank in Cambodia.",
    image: "/proadvisor.png",
    github: "",
    link: "",
  },
  {
    name: "Self-learning",
    description:
      "Focusing on front-end web development with ReactJS and TailwindCSS",
    image: "/portfolio.png",
    github: "https://github.com/lavymeng/Portfolio",
    link: "https://lavymeng.github.io/Portfolio/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
