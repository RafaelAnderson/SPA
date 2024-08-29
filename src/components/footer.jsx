import React, { useEffect, useState } from "react";
import '../styles/footer.css'

const Footer = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="barra-inferior">
            <p>Hora: {dateTime.toLocaleTimeString()}</p>
            <p>Fecha: {dateTime.toLocaleDateString()}</p>
        </div>
    );
};

export default Footer;