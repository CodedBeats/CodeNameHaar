import { useEffect, useRef } from 'react'

function OrbitParticles({cursorPosition, onCursorPositionChanged}) {
    const canvasRef = useRef(null);

    const cursorPositionRef = useRef(cursorPosition);
    const lastRenderTimeRef = useRef(Date.now());
    const revolvingCircleRotationRef = useRef(0);

    const animationFrameRequestRef = useRef(null);

    useEffect(() => {
        lastRenderTimeRef.current = Date.now();
        animationFrameRequestRef.current = requestAnimationFrame(renderFrame);
        return () => {
            if (animationFrameRequestRef.current != null) {
                cancelAnimationFrame(animationFrameRequestRef.current);
            }
        };
    }, []);

    useEffect(() => {
        cursorPositionRef.current = cursorPosition;
    }, [cursorPosition]);

    function renderFrame() {
        const context = canvasRef.current?.getContext('2d');
        if (context != null) {
            const timeNow = Date.now();
            const deltaTime = timeNow - lastRenderTimeRef.current;
            clearBackground(context);
            drawMainCircle(context, cursorPositionRef.current);
            drawRevolvingCircle(context, cursorPositionRef.current, deltaTime);
            lastRenderTimeRef.current = timeNow;
        }
        animationFrameRequestRef.current = requestAnimationFrame(renderFrame);
    }

    function clearBackground(context) {
        const { width, height } = context.canvas;
        context.rect(0, 0, width, height);
        context.fillStyle = 'black';
        context.fill();
    }

    function drawMainCircle(context, position) {
        context.beginPath();
        context.arc(position.x, position.y, 10, 0, Math.PI * 2);
        context.fillStyle = 'red';
        context.fill();
    }

    function drawRevolvingCircle(context, position, deltaTime) {
        revolvingCircleRotationRef.current += deltaTime * 0.01;
        if (revolvingCircleRotationRef.current > 2 * Math.PI) {
            revolvingCircleRotationRef.current -= 2 * Math.PI;
        }
        const xOffset = 20 * Math.cos(revolvingCircleRotationRef.current);
        const yOffset = 20 * Math.sin(revolvingCircleRotationRef.current);
        context.beginPath();
        context.arc(position.x + xOffset, position.y + yOffset, 5, 0, Math.PI * 2);
        context.fillStyle = 'blue';
        context.fill();
    }

    function handleMouseMoved(event) {
        const canvas = canvasRef.current;
        if (canvas == null) {
            return;
        }
        const canvasBoundingRect = canvas.getBoundingClientRect();
        const cursorXPos = event.clientX - canvasBoundingRect.left;
        const cursorYPos = event.clientY - canvasBoundingRect.top;
        onCursorPositionChanged({ x: cursorXPos, y: cursorYPos });
    }

    return (
        <>
            <h1>React - Interactive Canvas Demo</h1>
            <canvas ref={canvasRef} height={480} width={720} onMouseMove={handleMouseMoved}>
                Oops! Your browser doesn't support the canvas component.
            </canvas>
        </>
    );
}

export default OrbitParticles;
