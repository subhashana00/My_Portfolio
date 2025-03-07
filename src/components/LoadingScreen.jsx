import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< Welcome />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      {/* Animated Text */}
      <div className="mb-4 text-3xl sm:text-4xl md:text-5xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1"> </span>
      </div>

      {/* Progress Bar */}
      <div className="w-[200px] sm:w-[300px] h-[4px] bg-gray-800 rounded-full relative overflow-hidden">
        <div className="w-full h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>

      {/* Additional Animation (Optional) */}
      <div className="mt-8 flex space-x-2">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: `${item * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};