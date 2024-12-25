import React, { useRef, useEffect } from "react";
import { useState } from "react";

export const TextBlock = ({
  num,
  letter,
  empty,
  position,
  isFocused,
  onFocus,
}) => {
  const inputRef = useRef(null);
  const [currentValue,setCurrentValue]= useState('')

  const handleChange = (e) => {
    console.log("Value:", e.target.value);
    setCurrentValue(e.target.value)
  };

  const handleKeyDown = (e) => {
    console.log("Key Pressed:", e.key);
    if (onFocus) {
      onFocus(e.key, position); // Trigger the onFocus function passed from the parent
    }
  };

  // Focus the input field when `isFocused` is true
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div
      className={`w-[80px] h-[80px] border-2 border-black flex flex-col ${
        empty && "bg-black"
      } `}
    >
      <div className="text-lg h-6 w-full px-2">{num}</div>

      {!empty && (
        <input
          ref={inputRef}
          maxLength={1}
          className="text-4xl h-14 capitalize text-center font-serif focus:border-none bg-transparent focus-visible:border-none"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={currentValue}
        />
      )}
    </div>
  );
};
