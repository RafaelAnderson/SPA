import React, { useState } from "react";
import facebook from '../images/facebook.png';
import facebook2 from '../images/facebook2.png';
import instagram from '../images/instagram.png';
import instagram2 from '../images/instagram2.png';
import twitter from '../images/x.png';
import twitter2 from '../images/x2.png';
import '../styles/header.css'

const icons = [
    { default: facebook, hover: facebook2 },
    { default: instagram, hover: instagram2 },
    { default: twitter, hover: twitter2 },
];

const Header = () => {
    const [hovered, setHovered] = useState(null);

    const handleMouseEnter = (index) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    return (
        <div className="icons">
            {icons.map((icon, index) => (
                <img
                    className="img-header"
                    key={index}
                    src={hovered === index ? icon.hover : icon.default}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    alt="imagen"
                    width={"75"}
                />
            ))}
        </div>
    );
};

export default Header;