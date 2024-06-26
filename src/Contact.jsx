import Heading from "./Heading";
import { Link } from "@nextui-org/react";
import "./Contact.scss";

class SocialMedia {
  constructor(link, fontAwesomeClass) {
    this.link = link;
    this.fontAwesomeClass = fontAwesomeClass;
  }
}

const socialMediaList = [
  new SocialMedia(
    "https://www.linkedin.com/in/buichitrung/",
    "fa-brands fa-linkedin"
  ),
  new SocialMedia(
    "https://www.facebook.com/buichi.trung.3/",
    "fa-brands fa-square-facebook"
  ),
  new SocialMedia(
    "https://github.com/BuiChiTrung",
    "fa-brands fa-square-github"
  ),
];

export default function Contact() {
  return (
    <section id="contact">
      <Heading subTitle="Get In Touch" title="Contact Me" />
      <div id="email">
        <i class="fa-regular fa-envelope"></i>
        <span>trungcspntl@gmail.com</span>
      </div>

      <div id="social-media">
        {socialMediaList.map((socialMedia, index) => {
          return (
            <Link isExternal key={index} href={socialMedia.link}>
              <i class={socialMedia.fontAwesomeClass}></i>
            </Link>
          );
        })}
      </div>

      <div id="footer">
        <span id="footer-random">
          It's {new Date().toISOString().slice(0, 10)} but I haven't had a gf
          yet. <br />
          This line will be removed once I have one.
        </span>
        <span>© 2024 Bui Chi Trung.</span>
      </div>
    </section>
  );
}
