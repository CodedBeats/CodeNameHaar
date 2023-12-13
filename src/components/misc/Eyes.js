import React, { useEffect } from "react";
import "./css/eyes.css"; // Create your CSS file for styling

//imgs
import rand1 from "../../imgs/rand1.png";
import rand2 from "../../imgs/rand2.jpg";

const Eyes = () => {
    const angle = (cx, cy, ex, ey) =>{
        const dx = cx - ex;
        const dy = ey - cy;
        const rad = Math.atan2(dx, dy); // range (-PI, PI)
        const deg = rad * 180 / Math.PI; // rads to degs, range (-180, 180)
        return deg;
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const anchor = document.getElementById('anchor');
            const rekt = anchor.getBoundingClientRect();
            const anchorX = rekt.left + rekt.width / 2;
            const anchorY = rekt.top + rekt.height / 2;

            const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
            
            // console.log(angleDeg);

            const eyes = document.querySelectorAll('.eye');
            eyes.forEach(eye => {
                eye.style.transform = `rotate(${90 + angleDeg}deg)`;    
                anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
            })
        };
        window.addEventListener("mousemove", handleMouseMove);
    }, []);


    return (
        <div className="circle-container">
            <img id="anchor" src={rand1} alt="anchor-img"></img>
            <div id="eyes">
                <img className="eye" src={rand2} alt="eye-img" style={{top: "372px", left: "297px"}}></img>
                <img className="eye" src={rand2} alt="eye-img" style={{top: "371px", left: "161px"}}></img>
            </div>
        </div>
    )
};

export default Eyes;
