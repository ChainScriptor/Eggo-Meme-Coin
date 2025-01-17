import React from 'react';

const FloatingElements = () => {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="star absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`
                    }}
                ></div>
            ))}
        </div>
    );
};

export default FloatingElements;
