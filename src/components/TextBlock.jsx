import { useRef, useEffect, useState } from "react";

export const TextBlock = ({
  num,
  letter,
  empty,
  position,
  isFocused,
  onFocus,
  across,
  bottom,
}) => {
  const inputRef = useRef(null);
  const [currentValue, setCurrentValue] = useState("");

  // console.log(position)

  const handleChange = (e) => {
    console.log("Value:", e.target.value,position);
    setCurrentValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    // console.log("Key Pressed:", e.key);
    if (onFocus) {
      onFocus(e.key, position);
    }
  };

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div
      className={`w-[80px] h-[80px] border-2 border-black flex flex-col ${
        empty && "bg-black"
      }   `}
    >
      <div className="text-lg h-6 w-full px-2">{num}</div>

      {!empty && (
        <input
          ref={inputRef}
          maxLength={1}
          className={`text-4xl h-14 capitalize text-center font-serif focus:border-none bg-transparent focus-visible:border-none `}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={currentValue}
        />
      )}
    </div>
  );
};
