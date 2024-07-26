import React from 'react';
import guvi from '../images/guvi.png';

const Certification = () => {
    return (
        <section>
            <h2 className="text-center font-semibold">My Certifications</h2>
        <div className="border text-center rounded p-3 mb-4 bg-light" style={{ maxWidth: '800px', margin: 'auto' }}>
            <img src={guvi} className="img-fluid mb-3 rounded" alt="GUVI Certification" />
            <div className="mb-3">
                <p>
                    I have completed a Full Stack Development program at GUVI, focusing on the MERN stack (MongoDB, Express.js, React.js, and Node.js) from March to June 2024. This intensive course provided me with in-depth knowledge and hands-on experience in building dynamic web applications using these technologies.
                </p>
            </div>
        </div>
        </section>
    );
};

export default Certification;
