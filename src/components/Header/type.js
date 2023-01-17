import React from "react";
import Typewriter from "typewriter-effect";
import './header.css';

function Type() {
    return (
        <Typewriter 
        options={{
            strings: [
                "Full Stack Developer",
                "MERN Developer",
                "React Developer",
                "Front End Developer",
                "Dog Dad"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
        />
    );
}

export default Type;