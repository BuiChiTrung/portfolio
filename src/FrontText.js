
import { useState, useEffect } from "react";

const jobs = ["Back-end Developer", "GPU Software Engineer"];

export default function FrontText() {

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     setIndex(prevIndex => (prevIndex + 1) % jobs.length);
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, [jobs]);

    // return (
    //     <div>
    //         <h1>I'm a {jobs[index]}</h1>
    //     </div>
    // );

    const job = "Software Engineer";
    const [index, setIndex] = useState(0);
    const [displayJobIdx, setDisplayJobIdx] = useState(0);
    const [ep, setEp] = useState(1);
    console.log("displayJobIdx: ", displayJobIdx);
    console.log("ep: ", ep);

    useEffect(() => {
        if (displayJobIdx >= job.length) {
            setEp(-1);
        } else if (displayJobIdx == 0) {
            setEp(1);
        }
    }, [displayJobIdx]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayJobIdx(prevDisplayJobIdx => prevDisplayJobIdx + ep);
        }, 150);
        return () => clearInterval(interval);
    }, [ep]);

    return <p>I'm a {job.slice(0, displayJobIdx)}</p>
}