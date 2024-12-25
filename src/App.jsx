import "./App.css";
import { useState, useEffect } from "react";
import { across, blocks, down } from "./constants/words";
import { TextBlock } from "./components/TextBlock";

const moveFocus = (key, position, setCurrentPosition) => {
  const [row, col] = position;
  let newPosition = [...position];
  console.log(position)

  switch (key) {
    case "ArrowUp":
      if (row > 0) newPosition = [row - 1, col];
      break;
    case "ArrowDown":
      if (row < 4) newPosition = [row + 1, col];
      break;
    case "ArrowLeft":
      if (col > 0) newPosition = [row, col - 1];
      break;
    case "ArrowRight":
      if (col < 4) newPosition = [row, col + 1];
      break;

    case "Backspace":
      if(key==='Backspace'){
        if(col>0){
          newPosition = [row, col - 1];
          break;
        }
      }
    default:
      break;
  }

  // Update the current position
  setCurrentPosition(newPosition);
};

function App() {
  const [grid, setGrid] = useState(blocks);
  const [currentPosition, setCurrentPosition] = useState([0, 0]);
  // const [currentValue,setCurrentValue]= useState('')

  // console.log(currentValue)

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
            {grid.map((x, index) => {
              const isFocused =
                x.position[0] === currentPosition[0] &&
                x.position[1] === currentPosition[1];
              return (
                <TextBlock
                  num={x.keyNo}
                  letter={x.letter}
                  key={index}
                  empty={x.empty}
                  position={x.position}
                  isFocused={isFocused}
                  onFocus={(key, position) => moveFocus(key, position, setCurrentPosition)}
                  // currentValue={currentValue}
                  // setCurrentValue={setCurrentValue}
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
                <div key={index} className="py-3 px-2 flex w-full">
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
                <div key={index} className="py-3 px-2 flex w-full ">
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
