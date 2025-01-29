import React from "react";

function Card({ title, description, image }) {
  return (
    <div className="relative flex flex-col items-center justify-center p-4 space-y-2">
      <div className="relative">
        <img src={image} alt={title} className="w-100 h-100 rounded-lg" />
        <h2 className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white text-center p-2 rounded-b-lg">
          {title}
        </h2>
      </div>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
}

export default Card;