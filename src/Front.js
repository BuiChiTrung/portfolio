import me from './logo512.png';
import {Button} from "@nextui-org/react";
import FrontText from './FrontText';

export default function Front() {
    return (
        <section id="front">
            <div id="front-img">
                <img src={me} className="App-logo" alt="logo" />
            </div>
            <div id="front-text-buttons">
                <div id="front-text">
                    Hello, I'm Trung.<br/>
                    {/* I am a software engineer. */}
                    <FrontText/>
                </div>
                <br/>
                <div id="front-buttons">
                    <Button radius="full" variant="bordered" className="btn bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                        Download my CV
                    </Button>
                    <Button radius="full" variant="bordered" className="btn bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                        Contact me
                    </Button> 
                </div>
            </div>
        </section>
    )
}