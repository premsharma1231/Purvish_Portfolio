import React, { useState, useEffect } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isClicked, setIsClicked] = useState(false);

    // Mousemove event listener
    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updatePosition);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);

    // Click event listener
    useEffect(() => {
        const handleClick = () => {
            console.log("true");
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 100);
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <>
            {/* Outer Cursor */}
            <div
                className="fixed w-6 h-6 border-none bg-black opacity-50 rounded-full pointer-events-none transition-all duration-0 ease-out z-50"
                style={{
                    left: `${position.x - 12}px`,
                    top: `${position.y - 12}px`,
                }}
            />

            {/* Inner Cursor with Click Effect */}
            <div
                className={`fixed w-2 h-2 p-4 ${
                    isClicked ? "p-5" : "p-4"
                } z-50 border-none opacity-65 bg-yellow-500 rounded-full pointer-events-none transition-all duration-200 ease-out`}
                style={{
                    left: `${position.x - (isClicked ? 20 : 17)}px`,
                    top: `${position.y - (isClicked ? 20 : 16)}px`
                }}
            />
        </>
    );
};

export default Cursor;
