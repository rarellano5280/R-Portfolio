import React from "react";
import Typewriter from "typewriter-effect";
import './header.css';

function Type() {
    return (
        <Typewriter 
        options={{
            strings: [
                "Full-Stack Developer",
                "Mern Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
        />
    );
}

export default Type;