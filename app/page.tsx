"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");

  async function send() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setReply(data.reply);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">My AI Website</h1>

      <textarea
        className="border p-2 w-full max-w-lg"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

 <button
  onClick={send}
  style={{
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    marginTop: "15px",
    cursor: "pointer",
    borderRadius: "8px"
  }}
>
  Send
</button>