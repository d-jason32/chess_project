import React, { useState } from 'react';

const BasicUI: React.FC = () => {
    const [name, setName] = useState('');

    const handleClick = () => {
        alert(`Hello, ${name || 'stranger'}!`);
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Welcome to the App</h1>
            <p>Please enter your name below:</p>
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '0.5rem', marginRight: '1rem' }}
            />
            <button
                onClick={handleClick}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
            >
                Greet
            </button>
        </div>
    );
};

export default BasicUI;