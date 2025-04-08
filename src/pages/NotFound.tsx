import React from "react";

const HelloWorld: React.FC = () => {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Hello World</h1>
            <button
                onClick={handleClick}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Click Me
            </button>
        </div>
    );
};

export default HelloWorld;