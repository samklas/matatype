"use client";

import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState<string>("");
  const targetText: string = "lorem ipsum";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const renderText = () => {
    return targetText.split("").map((char, index) => {
      const userChar = userInput[index];

      // Tarkistetaan onko kirjain oikein vai väärin
      const color = userChar === char ? "green" : userChar ? "red" : "black";

      return (
        <span key={index} style={{ color: color }}>
          {char}
        </span>
      );
    });
  };

  return (
    <div>
      <h1>Typing Game</h1>
      <p>{renderText()}</p>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Write here..."
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      <p>Characters typed: {userInput.length}</p>
    </div>
  );
}
