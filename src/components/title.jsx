import React, { useState } from "react";

const Title = () => {
    const [titleStyle, setTitleStyle] = useState({});

    const handleMouseEnter = () => {
        setTitleStyle({ color: 'blue', cursor: 'pointer' });
    };

    const handleMouseLeave = () => {
        setTitleStyle({});
    };

    return (
        <div>
            <h1
                style={titleStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Samsung
            </h1>
        </div>
    );
};

export default Title;