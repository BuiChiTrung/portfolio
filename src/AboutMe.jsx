import Heading from "./Heading";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="container m-auto grid grid-rows-12 grid-cols-2 lg:grid-rows-8 lg:grid-cols-12 gap-8"
    >
      <Heading subTitle="Get To Know More" title="About Me" />
      <div
        id="about-me-img"
        className="col-span-full w-2/3 row-start-3 md:w-1/2 lg:w-full lg:col-start-2 lg:col-span-3 lg:row-start-4"
      >
        <img src={"./imgs/about-me.jpg"} alt="Trung Bui" className="w-1/3" />
      </div>
      <Card
        shadow="lg"
        className="card text-5xl row-start-8 row-span-2 lg:text-3xl lg:col-start-6 lg:col-span-3 lg:row-start-4 lg:h-52 2xl:text-2xl 2xl:h-40"
      >
        <CardHeader className="flex gap-2">
          <i class="fa-solid fa-graduation-cap"></i>
          <p> Education</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>B.Sc Bachelors Degree</p>
        </CardBody>
      </Card>
      <Card
        shadow="lg"
        className="card text-5xl row-start-8 row-span-2 lg:text-3xl lg:col-start-9 lg:col-span-3 lg:row-span-1 lg:row-start-4 lg:h-52 2xl:text-2xl 2xl:h-40"
      >
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
      <p
        id="about-me-intro"
        className="col-span-full row-start-10 text-5xl mx-5 mt-24 lg:text-3xl lg:col-start-6 lg:col-span-6 lg:row-start-5 lg:mt-20 2xl:text-2xl 2xl:mt-10"
      >
        I have worked with various languages including Go, Python, PHP, and
        JavaScript. I have experience in managing large-scale projects and
        optimizing processes for parallel execution across multiple threads and
        nodes. My expertise extends to both REST and gRPC APIs.
      </p>
    </section>
  );
}
