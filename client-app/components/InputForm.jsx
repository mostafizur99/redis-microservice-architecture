import React from "react";

const InputForm = ({ setUserInput, userInput, handleSubmit }) => {
  return (
    <div>
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setUserInput("");
        }}
      >
        <input
          type="text"
          placeholder="Add here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full max-w-[350px] p-2 my-4 rounded-md border-2 border-gray-300 focus:bg-cyan-50/10 focus:ring-1 focus:ring-cyan-600 focus:outline-none"
          required
        />
        <button className="bg-cyan-600 text-white p-2 rounded-md">
          Add Tech
        </button>
      </form>
    </div>
  );
};

export default InputForm;
