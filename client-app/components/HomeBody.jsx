"use client";

import React, { useState } from "react";
import InputForm from "./InputForm";
import TechSummary from "./TechSummary";

const HomeBody = () => {
  const [userInput, setUserInput] = useState("");
  const [isCache, setIsCache] = useState(false);
  const [techList, setTechList] = useState([
    { text: "AWS - priority (high)", id: 1 },
  ]);

  // handle form submit list
  const handleSubmit = async () => {
    console.log("handleSubmit");
  };

  // handle refresh list data
  const handleRefresh = async () => {
    console.log("handleRefresh");
  };

  return (
    <div className="px-8 md:px-0 grid grid-cols-1 md:grid-cols-2">
      <section>
        <InputForm
          setUserInput={setUserInput}
          userInput={userInput}
          handleSubmit={handleSubmit}
        />
      </section>
      <section className="mt-10 pt-4 md:mt-0 border-t md:border-t-0 border-cyan-600/80">
        <TechSummary
          handleRefresh={handleRefresh}
          techList={techList}
          isCache={isCache}
        />
      </section>
    </div>
  );
};

export default HomeBody;
