import React, { useEffect, useState } from "react";
import '../styles/banner.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpg';

const Banner = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [img1, img2, img3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % 3);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner">
            <img src={images[currentImage]} alt="banner" />
        </div>
    );
};

export default Banner;