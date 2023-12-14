import React, { useEffect, useState } from "react";
import "./css/eyes.css"; // Create your CSS file for styling

const Eyes = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    const pupils = document.querySelectorAll(".pupil");
    const pupilLeft = document.getElementById("pupil1");
    const position = pupilLeft.getBoundingClientRect();
    const posX = position.left;
    const posY = position.top;
    const eye1 = document.getElementById("eye1");
    const eye2 = document.getElementById("eye2");
    const eyes = [eye1, eye2];

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            pupils.forEach((pupil) => {
                console.log("old", posX, posY)
                const newPosX = posX + ((screenWidth / 80) + (mouseX / 80))
                const newPosY = posY + ((screenHeight / 80) + (mouseY / 80))
                console.log("new", newPosX, newPosY)
                
                // Set the new position of pupil
                pupil.style.left = newPosX + 'px';
                pupil.style.top = newPosY + 'px';
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [screenWidth, screenHeight]);


    return (
        <div className="eyes-container">
            <div className="eye" id="eye1">
                <div className="pupil" id="pupil1"></div>
            </div>
            <div className="eye" id="eye2">
                <div className="pupil" id="pupil2"></div>
            </div>
        </div>
    );
};

export default Eyes;
