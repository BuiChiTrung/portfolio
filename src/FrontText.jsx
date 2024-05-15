import { useState, useEffect } from "react";

const titles = ["Back-end Developer", "GPU Engineer"];

export default function FrontText() {
  const [index, setIndex] = useState(0);
  const [displayJobIdx, setDisplayJobIdx] = useState(0);
  const [ep, setEp] = useState(1);

  useEffect(() => {
    // If the cursor reaches the end of the title, wait for 500ms seconds before moving to the next title
    if (displayJobIdx >= titles[index].length + 5) {
      setEp(-1);
    } else if (displayJobIdx === 0) {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setEp(1);
    }
  }, [displayJobIdx]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayJobIdx((prevDisplayJobIdx) => prevDisplayJobIdx + ep);
    }, 100);
    return () => clearInterval(interval);
  }, [ep]);

  return (
    <div id="front-text">
      <p class="hello-text">Hello, I'm Trung</p>
      <p class="title-text">
        <span>I'm a </span>
        <span class="title">{titles[index].slice(0, displayJobIdx)}</span>
        <span class="cursor">|</span>
      </p>
    </div>
  );
}
