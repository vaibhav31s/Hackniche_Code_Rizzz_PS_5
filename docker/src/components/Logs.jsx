import React, { useState, useEffect } from 'react';
import textfile from "./Logs.txt";

const Logs = () => {
    const [logsss, setLoggss] = useState("");

    useEffect(() => {
        fetch(textfile)
            .then((response) => response.text())
            .then((textContent) => {
                setLoggss(textContent);
            });
    }, []); // Empty dependency array to ensure this effect runs only once

    return (
        <div className="">
            <div className='bg-white text-red-600' >
                {logsss.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
        </div>
    );
}

export default Logs;
