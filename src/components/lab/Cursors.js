// styles
import "./css/cursors.css"

// dependencies


export const Cursor1 = () => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".cursor1-circle");

    circles.forEach(function (circle) {
        circle.x = 0;
        circle.y = 0;
    });

    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";

            circle.style.scale = (circles.length - index) / circles.length;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.4;
            y += (nextCircle.y - y) * 0.4;
        });
        requestAnimationFrame(animateCircles);
    }
    animateCircles();

    function hideTrail() {
        circles.forEach(function (circle) {
            circle.style.display = "none"
        });
    }
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

