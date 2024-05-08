import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";

import FrontText from "./FrontText";

export default function Front() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section id="front">
      <div id="front-text-buttons">
        <FrontText />

        <div id="front-buttons">
          <Button
            radius="full"
            color="warning"
            className="btn"
            onPress={onOpen}
          >
            View my CV
          </Button>
          <Modal
            size="full"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            id="cv-modal"
            hideCloseButton={true}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody>
                    <iframe
                      class="pdf"
                      src="/Bui_Chi_Trung_CV.pdf"
                      id="cv-pdf"
                      title="Bui Chi Trung CV"
                    ></iframe>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="warning"
                      onPress={onClose}
                      className="text-4xl w-56 h-20"
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          <Button
            radius="full"
            variant="bordered"
            className="btn"
            color="warning"
            href="#contact"
          >
            <Link color="foreground" href="#contact">
              Contact me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
