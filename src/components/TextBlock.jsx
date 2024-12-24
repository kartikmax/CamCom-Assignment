import React from "react";

export const TextBlock = ({ num, letter, empty }) => {
  return (
    <div className={`w-[80px] h-[80px] border-2 border-black flex ${empty && "bg-black"} `}>
      {num}
      <div className="text-2xl capitalize">{letter}</div>
    </div>
  );
};
