import React, { CSSProperties } from "react";

interface TextRingProps {
  text: string;
  fixedRadius?: number;
}

interface MyCSSProperties extends CSSProperties {
  "--index"?: string | number;
}

const TextRing: React.FC<TextRingProps> = ({ text, fixedRadius = 7.6 }) => {
  const CHARS = text.split("");
  let currentWordIndex = 0;

  return (
    <div className="text-ring-container">
      <span
        className={`text-ring font-tickerbit animate-spin-slow`}
        style={
          {
            "--total": CHARS.length,
            "--radius": fixedRadius,
          } as React.CSSProperties
        }
      >
        {CHARS.map((char, index) => {
          if (char === " ") {
            currentWordIndex += 1;
            console.log("currentWordIndex:", currentWordIndex);
            return char;
          }

          return (
            <span
              key={index}
              className={`ring-char ${
                currentWordIndex === 1
                  ? "text-fuchsia-700"
                  : currentWordIndex === 2
                    ? "text-green-500"
                    : ""
              }`}
              style={{ "--index": index } as MyCSSProperties}
            >
              {char}
            </span>
          );
        })}
      </span>
    </div>
  );
};

export { TextRing };
