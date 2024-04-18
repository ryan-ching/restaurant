import React from "react";

const PageView = ({ 
    children, 
    isDarkBackground = false, 
    backgroundColor = "white",
    color = isDarkBackground ? "#fff" : "#000",
    justifyContent='center',
    alignItems = 'center',
    ...boxProps
}) => {
    return (
        <div 
            style={{
                backgroundColor,
                color,
                display: 'flex', // Enable flexbox for alignment
                justifyContent,
                alignItems,
                maxWidth: '100%',
                maxHeight: '50vh',
                border: '3px solid black',
                ...boxProps
            }}>
                {children}
        </div>
    )
}

export default PageView;