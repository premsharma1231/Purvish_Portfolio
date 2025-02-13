import React, { useState, useEffect } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isClicked, setIsClicked] = useState(false);


    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);

        const handleClick = (e) => {
            console.log('true')
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 1000);
        };


        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("click", handleClick);
        };
    }, []);


    return (
        <>
        <div
        className="fixed w-6 h-6 border-none bg-black opacity-40 rounded-full pointer-events-none transition-all duration-0 ease-out z-50"
        style={{
                left: `${position.x - 12}px`,
                top: `${position.y - 12}px`,
            }}
            />
        <div className={`fixed w-2 h-2 ${isClicked ? "p-5" : "p-3"} z-40 border-none opacity-65 bg-yellow-500 rounded-full pointer-events-none transition-all duration-200 ease-out`}
            style={{
                left: `${position.x - 16.52}px`,
                top: `${position.y - 16.5}px`,
            }}
            />
        </>
    );
};

export default Cursor;
