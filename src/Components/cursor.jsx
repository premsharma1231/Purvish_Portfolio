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
        <div
            className="fixed w-10 h-10 p-3 border-none bg-gray-800 opacity-65 rounded-full pointer-events-none transition-all duration-75 ease-out z-50"
            style={{
                left: `${position.x - 20}px`,
                top: `${position.y - 20}px`,
            }}
        />
    );
};

export default Cursor;
