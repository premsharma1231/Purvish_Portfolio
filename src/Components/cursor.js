import React, { useState, useEffect } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return (
        <>
        <div
        className="fixed w-1 h-1 border-none bg-black opacity-65 rounded-full pointer-events-none transition-all duration-0 ease-out z-50"
        style={{
                left: `${position.x - 2}px`,
                top: `${position.y - 2}px`,
            }}
            />
        <div
            className="fixed w-2 h-2 p-3 z-50 border-black border-2 rounded-full pointer-events-none transition-all duration-75 ease-out"
            style={{
                left: `${position.x - 19}px`,
                top: `${position.y - 19}px`,
                // mixBlendMode: 'difference',
            }}
            />
        </>
    );
};

export default Cursor;
