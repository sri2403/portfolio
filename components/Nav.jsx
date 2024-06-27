import React from 'react';
import { Link } from 'react-scroll';
import "./nav.css"

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg p-4">
            <div className="container-fluid">
                <h1 className="navbar-brand text-white" href="#">My Portfolio</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="home"
                                smooth={true}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="about"
                                smooth={true}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="skills"
                                smooth={true}
                                duration={500}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="projects"
                                smooth={true}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white"
                                to="contact"
                                smooth={true}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
