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
  const startRowID = props.key * rowSpan + 1;
  const classStr = `project-card text-5xl mt-20 col-span-full row-start-${startRowID} row-span-${rowSpan} lg:col-span-1 lg:text-3xl md:h-80 lg:text-3xl`;
  return (
    <Card shadow="lg" isHoverable="true" className={classStr}>
      <CardHeader className="projName lg:flex lg:justify-center">
        <Image
          alt="nextui logo"
          // height={40}
          radius="sm"
          src={props.proj.logoPath}
          width={40}
          className="w-16 lg:w-18"
        />
        <p className="text-5xl mx-4 lg:text-4xl">{props.proj.name}</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="projDesc text-5xl lg:text-3xl">{props.proj.desc}</p>
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
