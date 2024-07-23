import React from 'react';
import me from "../images/pic.jpg";

const Home = () => {
    return (
        <section id="home" className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '90vh', padding: '20px' }}>
            <div className="text-center">
                <img src={me} alt="Sri Harini Muthukrishnan" className="img-fluid rounded-circle mb-4" style={{ width: '300px', height: '250px' }} />
                <h1>Hello, I'm Sri Harini Muthukrishnan</h1>
                <h3 className="mb-4">Full Stack Developer (MERN)</h3>
                <div className="mb-4">
                    <a href='https://github.com/sri2403' target='_blank' rel='noopener noreferrer' className="btn btn-outline-primary me-3"><i className="fab fa-github"></i> Github</a>
                    <a href='https://www.linkedin.com/in/sriharini-muthukrishnan-122259290/' target='_blank' rel='noopener noreferrer' className="btn btn-outline-primary me-3"><i className="fab fa-linkedin"></i> LinkedIn</a>
                    <a href='https://drive.google.com/file/d/1Wt3UWa2S2yNjVmyLVZgLdzJO2V3wJgus/view' target='_blank' rel='noopener noreferrer' className="btn btn-outline-primary"><i className="fas fa-file"></i> Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Home;

