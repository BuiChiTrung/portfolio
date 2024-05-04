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
  return (
    <Card className="max-w-[20px] project-card" shadow="lg" isHoverable="true">
      <CardHeader className="flex gap-3 projName">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={props.proj.logoPath}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{props.proj.name}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="projDesc">{props.proj.desc}</p>
      </CardBody>
      <Divider />
      <CardFooter className="projDemo">
        <Link isExternal showAnchorIcon href={props.proj.srcCodeLink}>
          Source code
        </Link>
        {/* <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Demo
        </Link> */}
      </CardFooter>
    </Card>
  );
}
