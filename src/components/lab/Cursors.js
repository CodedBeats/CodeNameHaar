// styles
import "./css/cursors.css"


// == this can be changed to something like this (for the react way and more efficient) ==
// <Cursor1 onMouseEnter={enableCursor} onMouseLeave={disableCursor} onMouseMove={moveCursor} />
export const Cursor1 = () => {
    // set initial coords
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".cursor1-circle");
    // set possition of circle divs at initial cords
    circles.forEach(function (circle) {
        circle.x = 0;
        circle.y = 0;
    });
    // get coords of mouse possition
    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    // handle animation
    function animateCircles() {
        // get coords
        let x = coords.x;
        let y = coords.y;
        // update every circle
        circles.forEach(function (circle, index) {
            // align circle with cursor
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";
            // circle gets progressivley smaller as train goes
            circle.style.scale = (circles.length - index) / circles.length;
            // assign coords to circle poss
            circle.x = x;
            circle.y = y;
            // set following circles
            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.4; // change these values to increase tail length
            y += (nextCircle.y - y) * 0.4;
        });
        requestAnimationFrame(animateCircles);
    }
    animateCircles();
    // hide fancy cursor when leaving div
    function hideTrail() {
        circles.forEach(function (circle) {
            circle.style.display = "none"
        });
    }
    // show fancy cursor when entering div
    function showTrail() {
        circles.forEach(function (circle) {
            circle.style.display = "block"
        });
    }

    return (
        <div className="cursor-container">
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor1-circle"></div>
            <div className="cursor-box"
                onMouseLeave={hideTrail} 
                onMouseEnter={showTrail}
            ></div>
        </div>
    );
}

