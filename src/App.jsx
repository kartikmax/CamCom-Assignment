import "./App.css";
import { useState } from "react";
import { across, blocks, down } from "./constants/words";
import { TextBlock } from "./components/TextBlock";

function App() {
  const [count, setCount] = useState(0);
  // const numbers = Array.from({ length: 25 }, (_, index) => index + 1);
  // console.log(numbers)

  return (
    <>
      <nav className="flex border h-10 bg-yellow-500 w-screen">
        <div className="flex-1 h-full border">
          <i className="text-xl">s</i>
        </div>
        <div className="flex-1 h-full border">
          <div>time</div>
        </div>
        <div className="flex-1 flex items-center justify-end h-full border">
          <div className="flex-1">Rebus</div>
          <div className="flex-1">Clear</div>
          <div className="flex-1">Reveal</div>
          <div className="flex-1">Check</div>
          <div className="flex-1">P</div>
        </div>
      </nav>

      <section className="flex h-[600px]">
        {/* crossword */}
        <div className="flex-1 flex flex-col border justify-center items-center">
          <div className="square border w-full h-12"></div>
          <div className="square grid grid-cols-5 grid-rows-5 border-4 border-black h-[400px] w-[400px] bg-green-300 ">
            {blocks.map((x, index) => {
              return (
                <TextBlock
                  num={x.keyNo}
                  letter={x.letter}
                  key={index}
                  empty={x.empty}
                />
              );
            })}
          </div>
        </div>
        {/* hints */}
        <div className="flex-1 flex border">
          <div className="flex flex-1 border bg-orange-300 flex-col">
            <p className="across font-semibold py-3 px-2 ">Across</p>
            {across.map((word, index) => {
              return (
                <div className="py-3 px-2 flex w-full">
                  <strong>{word.no} </strong>
                  <p key={index} className="pl-2">
                    {word.hints}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-1 border bg-cyan-200  flex-col">
            <p className="across font-semibold py-3 px-2 ">Down</p>
            {down.map((word, index) => {
              return (
                <div className="py-3 px-2 flex w-full ">
                  <strong>{word.no} </strong>
                  <p key={index} className="pl-2">
                    {word.hints}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
