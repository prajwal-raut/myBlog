import React from "react";
import Covid from "../images/CovidApp.png";
import Todo from "../images/TodoApp.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <-- Alert --> */}
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong> Hurry up..!</strong>&nbsp;Now I provide
        <strong>&nbsp;free Consultation Service.</strong>&nbsp;Book your
        appointment.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      {/* <-- Intro section --> */}
      <div className="card bg-dark text-white h-card">
        <div className="h-sm">
          <h1 className="h-text">I'm Prajwal Raut</h1>
          <div className="h-main">
            <div className="h-text">A</div>
            <ul className="option">
              <li>
                <span>Designer</span>
              </li>
              <li>
                <span>Developer</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
            </ul>
          </div>
          <NavLink to="contact" className="text-uppercase btn btn-danger">
            contact me
          </NavLink>
        </div>
      </div>

      {/* <-- Project section --> */}
      <div className="my-3 dis-none">
        <h1 className="text-center"> Recent Project </h1>
      </div>
      <div>
        <div className="container my-4 dis-none">
          <div className="row mb-2">
            {/* <-- Card 1 --> */}
            <div className="col-md-6">
              <div className="bg-blue row g-0 border  overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0 card-head">My-Todolist</h3>
                  <p className="card-text-h mb-auto">
                    Now Schedule your daily important task with myTodolist App.
                  </p>
                  <a
                    href="https://github.com/prajwal-raut/myTodoList"
                    target="_blank"
                    rel="noreferrer"
                    className="stretched-link link-a"
                  >
                    View Project&nbsp;
                    <span className="fas fa-arrow-circle-right"></span>
                  </a>
                </div>
                <div className="col-auto d-lg-block">
                  <img src={Todo} className="pri-image" alt="..." />
                </div>
              </div>
            </div>

            {/* <-- Card 2 --> */}
            <div className="col-md-6">
              <div className="bg-blue row g-0 border  overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0 card-head">Covid-19 App</h3>
                  <p className="card-text-h mb-auto">
                    Covid-19 App tells you how many Covid cases are there in
                    your State.
                  </p>
                  <a
                    href="https://github.com/prajwal-raut/Covid-19_ReactApp"
                    target="_blank"
                    rel="noreferrer"
                    className="stretched-link link-a"
                  >
                    View Project&nbsp;
                    <span className="fas fa-arrow-circle-right"></span>
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img src={Covid} className="pri-image" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
