"use client";

import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import TechSummary from "./TechSummary";
import { createTech, getTech } from "@/libs/mysqlDb";

const HomeBody = () => {
  const [userInput, setUserInput] = useState("");
  const [isCache, setIsCache] = useState(false);
  const [techList, setTechList] = useState([
    { text: "AWS - priority (high)", id: 1 },
  ]);

  // set tech-list on first render
  useEffect(() => {
    const loadTech = async () => {
      try {
        const { isCached, data } = await getTech();
        setTechList(data);
        setIsCache(isCached);
      } catch (error) {
        console.error("Error loading techList:", error);
      }
    };
    loadTech();
  }, []);

  // handle form submit list
  const handleSubmit = async () => {
    await createTech(userInput);
    const { isCached, data } = await getTech();
    setTechList(data);
    setIsCache(isCached);
  };

  // handle refresh list data
  const handleRefresh = async () => {
    const { isCached, data } = await getTech();
    setTechList(data);
    setIsCache(isCached);
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
