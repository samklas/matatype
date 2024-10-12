"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState<string>("");
  const targetText: string = "lorem ipsum";
  const [timer, setTimer] = useState<number>(30);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const renderText = () => {
    return targetText.split("").map((char, index) => {
      const userChar = userInput[index];

      if (userChar === char) {
      } else {
      }

      // Tarkistetaan onko kirjain oikein vai väärin
      const color = userChar === char ? "green" : userChar ? "red" : "black";

      return (
        <span key={index} style={{ color: color }}>
          {char}
        </span>
      );
    });
  };

  useEffect(() => {
    if (isStarted) {
      setInterval(() => {
        if (timer > 0) setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);

  return (
    <div>
      <h1>Typing Game</h1>
      <p>{timer}</p>
      <p>{renderText()}</p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          handleInputChange(e);
          if (userInput.length === 0) {
            setIsStarted(true);
            setTimer(timer - 1);
          }
        }}
        placeholder="Write here..."
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      <p>Characters typed: {userInput.length}</p>
    </div>
  );
}
