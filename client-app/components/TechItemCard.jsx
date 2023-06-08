import React from "react";

const TechItemCard = ({ text, index }) => {
  return (
    <article className="bg-cyan-400/10 shadow rounded-md p-4 my-4">
      <p className="font-medium text-gray-700 text-center">
        {index + 1}. {text}
      </p>
    </article>
  );
};

export default TechItemCard;
