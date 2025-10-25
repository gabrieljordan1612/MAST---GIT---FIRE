import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isInteracting, setIsInteracting] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
                setIsInteracting(true);
            }
        };
        
        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
             if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
                setIsInteracting(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);
    
    return (
        <div className="hidden lg:block" aria-hidden="true">
            <div 
                className={`custom-cursor-outline ${isInteracting ? 'cursor-interaction' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }} 
            />
            <div 
                className={`custom-cursor-dot ${isInteracting ? 'cursor-interaction' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }} 
            />
        </div>
    );
};

export default CustomCursor;
