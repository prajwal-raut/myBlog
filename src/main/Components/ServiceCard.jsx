import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card shadow-card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquam nam nulla voluptatem, non asperiores.
            </p>
            <NavLink to="contact" className="btn btn-primary">
              Check Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
