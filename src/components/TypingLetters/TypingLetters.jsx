import React from "react";
import { ReactTyped } from "react-typed";

function TypingLetters() {
    return (
        <>
            <ReactTyped
                className="text-3xl font-semibold text-center text-orange-400"
                strings={[
                    "Software Engineer",
                    "Fullstack Developer",
                    "Smart Contract Developer",
                    "Web3 Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
        </>
    );
}

export default TypingLetters;
