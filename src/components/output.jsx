import React from "react";
import Card from "./card";
import { NavLink } from "react-router-dom";

function Outputs() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <NavLink to="/work">
        <Card
          title="WORK"
          description="A summary of my professional experience."
          image="https://i.pinimg.com/474x/e5/9a/77/e59a77db5ce13395ffe21da2709f6a98.jpg"
        />
      </NavLink>
      <NavLink to="/projects">
        <Card
          title="PROJECTS"
          description="Some projects I have done ever since my first Hello World."
          image="https://i.pinimg.com/474x/e5/9a/77/e59a77db5ce13395ffe21da2709f6a98.jpg"
        />
      </NavLink>
      <NavLink to="/quests">
        <Card
          title="QUESTS"
          description="A collection of my personal hobbies and silly shenanigans I persue on my free time."
          image="https://i.pinimg.com/474x/e5/9a/77/e59a77db5ce13395ffe21da2709f6a98.jpg"
        />
      </NavLink>
    </div>
  );
}
export default Outputs;
