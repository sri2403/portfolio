import React from 'react';
import img1 from "../images/hrmd.png";
import img2 from "../images/redux.png";
import img3 from "../images/context.png";
import img4 from "../images/todo.png";
import img5 from "../images/weather.png";

const Projects = () => {
    return (
        <section id="projects" className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ padding: '20px' }}>
            <div className="text-center">
                <h2>My Projects</h2>
                <div className="border rounded p-3 mb-4" style={{ maxWidth: '800px' }}>
                    <img src={img1} className="img-fluid mb-3" alt="HR Management Dashboard" />
                    <div className="mb-3">
                        <h3>HR Management Dashboard</h3>
                        <p>HRMD-Frontend is a web application designed to integrate seamlessly with the HRMD-Backend API, providing a user-friendly interface for managing employee records, leave applications, monitoring attendance, payrolls, job postings, and overseeing the recruitment process.</p>
                    </div>
                    <div className="mb-3">
                        <a href='https://github.com/sri2403/HRMD-Frontend.git' target='_blank' rel='noopener noreferrer' className="btn btn-primary me-3">Code</a>
                        <a href='https://hrmd-frontend-sri2403.netlify.app/' target='_blank' rel='noopener noreferrer' className="btn btn-primary">Demo</a>
                    </div>
                </div>
                <div className="border rounded p-3 mb-4" style={{ maxWidth: '800px' }}>
                    <img src={img2} className="img-fluid mb-3" alt="Redux Shopping Cart" />
                    <div className="mb-3">
                        <h3>Redux Shopping Cart</h3>
                        <p>Redux in the Display component is used for centralized state management of the shopping cart, enabling dispatching actions such as incrementing, decrementing quantities, and removing items, and accessing the cart state via selectors, ensuring predictable state updates and consistent UI behavior.</p>
                    </div>
                    <div className="mb-3">
                        <a href='https://github.com/sri2403/redux---task.git' target='_blank' rel='noopener noreferrer' className="btn btn-primary me-3">Code</a>
                        <a href='https://redux-task-sri2403.netlify.app/' target='_blank' rel='noopener noreferrer' className="btn btn-primary">Demo</a>
                    </div>
                </div>
                <div className="border rounded p-3 mb-4" style={{ maxWidth: '800px' }}>
                    <img src={img3} className="img-fluid mb-3" alt="Shopping Cart using Context API" />
                    <div className="mb-3">
                        <h3>Shopping Cart - Using Context API</h3>
                        <p>This is a simple shopping cart application built using React. It allows users to browse through a list of products and add them to their cart. Users can also adjust the quantity of items in the cart, remove items, and view the total price of items in their cart.</p>
                    </div>
                    <div className="mb-3">
                        <a href='https://github.com/sri2403/contextapi---task.git' target='_blank' rel='noopener noreferrer' className="btn btn-primary me-3">Code</a>
                        <a href='https://contextapi-task-sri2403.netlify.app/' target='_blank' rel='noopener noreferrer' className="btn btn-primary">Demo</a>
                    </div>
                </div>
                <div className="border rounded p-3 mb-4" style={{ maxWidth: '800px' }}>
                    <img src={img4} className="img-fluid mb-3" alt="Todo App" />
                    <div className="mb-3">
                        <h3>Todo App</h3>
                        <p>A Todo App that allows users to save tasks with names, descriptions, and track completion status. It features a view status option to organize tasks by their completion status, enhancing task management efficiency.</p>
                    </div>
                    <div className="mb-3">
                        <a href='https://github.com/sri2403/todo-app.git' target='_blank' rel='noopener noreferrer' className="btn btn-primary me-3">Code</a>
                        <a href='https://sri2403-todo-app.netlify.app/' target='_blank' rel='noopener noreferrer' className="btn btn-primary">Demo</a>
                    </div>
                </div>
                <div className="border rounded p-3 mb-4" style={{ maxWidth: '800px' }}>
                    <img src={img5} className="img-fluid mb-3" alt="Weather API" />
                    <div className="mb-3">
                        <h3>Weather API</h3>
                        <p>This project uses a weather API to display current weather information for various countries. Users can view real-time weather conditions such as temperature, humidity, wind speed, and forecasts, enhancing accessibility to global weather data.</p>
                    </div>
                    <div className="mb-3">
                        <a href='https://github.com/sri2403/DAY-17-TASK-Weather.git' target='_blank' rel='noopener noreferrer' className="btn btn-primary me-3">Code</a>
                        <a href='https://sri2403-weather-api.netlify.app/' target='_blank' rel='noopener noreferrer' className="btn btn-primary">Demo</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
