"use client";

import { JSX, useEffect, useState } from "react";
import axios from "axios";

const messages: string[] = [
  "Currently deployed on free version of Vercel...",
  "Server sleeps after 15 minutes of inactivity...",
  "Waking up backend server...",
  "Please wait, it may take around 1 minute...",
];

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function BackendLoader(): JSX.Element | null {
  const [visible, setVisible] = useState(true);
  const [serverLive, setServerLive] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [index, setIndex] = useState(0);

  // 🔁 Message loop
  useEffect(() => {
    if (!serverLive) {
      const t = setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [index, serverLive]);

  // ⏳ Countdown loop
  useEffect(() => {
    if (!serverLive) {
      const t = setTimeout(() => {
        setSeconds((prev) => (prev === 0 ? 60 : prev - 1));
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [seconds, serverLive]);

  // 🚀 Fast ping when server is down (3s)
  useEffect(() => {
    if (serverLive) return;

    const interval = setInterval(async () => {
      try {
        const res = await axios.get(`${API_URL}/health`);
        if (res.status === 200) {
          setServerLive(true);
          setTimeout(() => setVisible(false), 1500);
          clearInterval(interval);
        }
      } catch {}
    }, 3000);

    return () => clearInterval(interval);
  }, [serverLive]);

  // 🔍 Slow monitoring when server is live (15s)
  useEffect(() => {
    if (!serverLive) return;

    const interval = setInterval(async () => {
      try {
        await axios.get(`${API_URL}/health`);
      } catch {
        // 🚨 Backend went down again
        setServerLive(false);
        setVisible(true);
        setSeconds(60);
        setIndex(0);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [serverLive]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl px-6 py-5 shadow-lg text-center w-[85%] max-w-sm">

        {!serverLive ? (
          <>
            <div className="h-6 w-6 mx-auto mb-3 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
            
            <p className="text-sm text-gray-700 transition-all duration-300">
              {messages[index]}
            </p>

            <p className="text-xs text-gray-500 mt-2">
              ~{seconds}s
            </p>
          </>
        ) : (
          <p className="text-sm font-medium text-gray-800">
            Backend server has started. All APIs will work now.
          </p>
        )}

      </div>
    </div>
  );
}