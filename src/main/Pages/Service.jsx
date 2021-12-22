import React from "react";
import ServApi from "../Api/ServApi";
import ServiceCard from "../Components/ServiceCard";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {ServApi.map((val, ind) => {
                return (
                  <ServiceCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
