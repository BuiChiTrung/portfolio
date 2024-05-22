import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";

class Project {
  constructor(id, name, desc, logoPath, srcCodeLink) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.logoPath = logoPath;
    this.srcCodeLink = srcCodeLink;
  }
}

const myProjects = [
  new Project(
    0,
    "Kong Custom Plugin",
    "A custom plugin integrated with Kong API Gateway to cache GraphQL request routing through Kong API Gateway using Redis.",
    "./imgs/kong-logo.png",
    "https://github.com/BuiChiTrung/kong-custom-plugin"
  ),
  new Project(
    1,
    "4Room",
    "A forum for educational purposes. Users can enhance their productivity with features such as video streaming and a Pomodoro timer.",
    "./imgs/4room-logo.png",
    "https://github.com/BuiChiTrung/4Room-FE"
  ),
  new Project(
    2,
    "Xiangqi-VR",
    "A Unity-based Chinese chess game with 3D graphics, designed for VR headset gameplay or mouse/keyboard controller.",
    "./imgs/xiangqi-logo.png",
    "https://github.com/UET-CacVDHD"
  ),
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-10 grid grid-rows-12 lg:grid-cols-3 lg:grid-rows-8 lg:px-20"
    >
      <Heading subTitle="Have A Look At My Recent" title="Projects" />
      {myProjects.map((project, index) => (
        <ProjectCard key={index} proj={project} />
      ))}
    </section>
  );
}
