import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function ProjectCard(props) {
  const rowSpan = 2;
  const smStartRowID = props.proj.id * rowSpan + 3;
  const classStr = `project-card text-5xl mt-20 col-span-full row-start-${smStartRowID} row-span-${rowSpan} md:h-96 lg:row-start-4 lg:mx-16 lg:col-span-1 lg:text-3xl lg:text-3xl`;
  console.log(smStartRowID);
  return (
    <Card shadow="lg" isHoverable="true" className={classStr}>
      <CardHeader className="projName lg:flex lg:justify-center">
        <Image
          alt="nextui logo"
          radius="sm"
          src={props.proj.logoPath}
          width={40}
          className="w-16 lg:w-18"
        />
        <p className="text-5xl mx-4 md:text-4xl">{props.proj.name}</p>
      </CardHeader>
      <Divider />
      <CardBody className="px-5">
        <p className="projDesc text-5xl md:text-3xl my-auto">
          {props.proj.desc}
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="projDemo flex justify-center">
        <Link
          isExternal
          showAnchorIcon
          href={props.proj.srcCodeLink}
          className="text-3xl"
        >
          Source code
        </Link>
      </CardFooter>
    </Card>
  );
}
