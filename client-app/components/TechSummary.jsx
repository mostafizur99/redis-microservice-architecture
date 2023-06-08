import React from "react";
import TechItemCard from "./TechItemCard";

const TechSummary = ({ techList, isCache, handleRefresh }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-center text-cyan-600/80">
        Tech List{" "}
        <span className="text-sm text-cyan-900/60">({techList.length})</span>
      </h3>
      <div className="mt-2 pb-2 text-center border-b border-cyan-600/20">
        <span
          className={`${
            isCache ? "text-red-500/60" : "text-green-500/80"
          } text-lg font-bold`}
        >
          {isCache ? " cached" : " live"}
        </span>
        <button
          className="ml-3 px-3 py-1 bg-cyan-600 text-white rounded-md"
          onClick={handleRefresh}
        >
          ↻
        </button>
      </div>
      <>
        {techList.map((tech, index) => (
          <TechItemCard text={tech?.text} index={index} key={tech?.id} />
        ))}
      </>
    </div>
  );
};

export default TechSummary;
