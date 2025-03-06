import React from "react";

interface TextSeparatorProps {
  text: string;
  className?: string;
  lineColor?: string;
  spacing?: string;
}

const TextSeparator: React.FC<TextSeparatorProps> = ({
  text,
  className = "",
  lineColor = "border-gray-300",
  spacing = "px-4",
}) => {
  return (
    <div className={`w-full flex items-center justify-center mb-14 ${className}`}>
      <div className={`flex-grow border-t ${lineColor}`}></div>
      <div className={`${spacing} text-4xl font-bold text-center  dark:text-gray-200`}>{text}</div>
      <div className={`flex-grow border-t ${lineColor}`}></div>
    </div>
  );
};

export default TextSeparator;