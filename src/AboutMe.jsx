import Heading from "./Heading";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import aboutMeImage from "./about-me_cleanup.jpg";

export default function AboutMe() {
  return (
    <section id="about-me">
      <Heading subTitle="Get To Know More" title="About Me" />
      <div id="about-me-content">
        <div id="about-me-img">
          <img src={aboutMeImage} alt="Trung Bui" />
        </div>
        <div id="about-me-text">
          <div id="about-me-cards">
            <Card shadow="lg" className="card">
              <CardHeader className="flex gap-2">
                <i class="fa-solid fa-graduation-cap"></i>
                <p> Education</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>B.Sc Bachelors Degree</p>
              </CardBody>
            </Card>
            <Card shadow="lg" className="card">
              <CardHeader className="flex gap-2">
                <i class="fa-solid fa-scroll"></i>
                <p>Experience</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{new Date().getFullYear() - 2022}+ years</p>
                <p>Software Development</p>
              </CardBody>
            </Card>
          </div>
          <p id="about-me-intro">
            I have worked with various languages including Go, Python, PHP, and
            JavaScript. I have experience in managing large-scale projects and
            optimizing processes for parallel execution across multiple threads
            and nodes. My expertise extends to both REST and gRPC APIs.
          </p>
        </div>
      </div>
    </section>
  );
}
