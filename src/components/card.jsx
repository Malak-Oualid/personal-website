import React from "react";

function Card({ title, description, image }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 space-y-2">
        <img src={image} alt={title} className="w-40 h-40 rounded-full" />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-center">{description}</p>
        </div>
    );
    }
export default Card;