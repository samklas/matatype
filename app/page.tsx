"use client";

import { useState } from "react";

export default function Home() {
  const text: string = "lorem ipsum";
  const [input, setInput] = useState<string>("");

  return (
    <div className="bg-slate-500 h-full flex flex-col justify-center items-center">
      <div id="timer">timer</div>
      <div>{text}</div>
      <input
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Type here..."
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </div>
  );
}
