import { useEffect, useState } from "react";

export default function TestTimer({ duration, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration); // seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp(); // auto submit test
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      className={`text-lg font-semibold ${
        timeLeft <= 60 ? "text-red-600" : "text-green-600"
      }`}
    >
      ⏱️ Time Left: {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}
