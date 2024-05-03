import { Button } from "@nextui-org/react";
import FrontText from "./FrontText";

export default function Front() {
  return (
    <section id="front">
      <div id="front-text-buttons">
        <FrontText />
        <br />
        <div id="front-buttons">
          <Button radius="full" color="warning" className="btn">
            View my CV
          </Button>
          <Button
            radius="full"
            variant="bordered"
            className="btn"
            color="warning"
          >
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}
