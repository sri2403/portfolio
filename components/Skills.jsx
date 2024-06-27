import React from 'react';

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '20px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }} >My Skills</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center', width: '200px', marginBottom: '20px' }}>
                        <i className="fab fa-html5 fa-4x" style={{ color: '#e34c26' }}></i>
                        <p>HTML</p>
                    </div>
                    <div style={{ textAlign: 'center', width: '200px', marginBottom: '20px' }}>
                        <i className="fab fa-css3-alt fa-4x" style={{ color: '#1572b6' }}></i>
                        <p>CSS</p>
                    </div>
                    <div style={{ textAlign: 'center', width: '200px', marginBottom: '20px' }}>
                        <i className="fab fa-bootstrap fa-4x" style={{ color: '#563d7c' }}></i>
                        <p>Bootstrap</p>
                    </div>
                    <div style={{ textAlign: 'center', width: '200px', marginBottom: '20px' }}>
                        <i className="fab fa-js fa-4x" style={{ color: '#f0db4f' }}></i>
                        <p>JavaScript</p>
                    </div>
                    <div style={{ textAlign: 'center', width: '200px', marginBottom: '20px' }}>
                        <i className="fab fa-react fa-4x" style={{ color: '#61dafb' }}></i>
                        <p>React</p>
                    </div>
                    <div style={{ textAlign: 'center', width: '200px', marginBottom: '20px' }}>
                        <i className="fas fa-database fa-4x" style={{ color: '#007acc' }}></i>
                        <p>SQL, MongoDB</p>
                    </div>
                    <div style={{ textAlign: 'center', width: '200px', marginBottom: '20px' }}>
                        <i className="fab fa-node-js fa-4x" style={{ color: '#3c873a' }}></i>
                        <p>Node.js, Express.js</p>
                    </div>
                    <div style={{ textAlign: 'center', width: '200px', marginBottom: '20px' }}>
                        <i className="fab fa-git fa-4x" style={{ color: '#f34f29' }}></i>
                        <p>Git-Github</p>
                    </div>
                    <div style={{ textAlign: 'center', width: '200px', marginBottom: '20px' }}>
                        <i className="fas fa-file fa-4x" style={{ color: '#6cc24a' }}></i>
                        <p>API documentation</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
