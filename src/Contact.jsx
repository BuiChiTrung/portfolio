import Heading from "./Heading";
import { Link } from "@nextui-org/react";

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
        {socialMediaList.map((socialMedia) => {
          return (
            <Link isExternal href={socialMedia.link}>
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
      
      <div class="grid gap-4 grid-cols-3 grid-rows-3">
        <span class="inline-grid grid-cols-3 gap-4">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </span>
        <span class="inline-grid grid-cols-3 gap-4">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </span>
      </div>
    </section>
  );
}
