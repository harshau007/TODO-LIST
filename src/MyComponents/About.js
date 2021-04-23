import React from "react";

export const About = () => {
  let Styless = {
    minHeight: "70vh"
  };
  return (
    <div className="jumbotron bg-dark text-white" style={Styless}>
      <h1 className="display-4">Hello, My name is Harsh!!</h1>
      <h3 className="lead">
        This is my Site
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque nulla aspernatur omnis exercitationem cum ullam quidem natus enim est.
      </p>
    </div>
  );
};
