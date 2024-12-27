import "./App.css";
import { useState, useEffect } from "react";
import { across, blocks, down } from "./constants/words";
import { TextBlock } from "./components/TextBlock";
import { useDispatch,useSelector } from 'react-redux'
import { increment } from "./features/counter/counterSlice";
import { Dialog } from "./components/Dialogs/Dialog";
import {togglePause,incrementTime} from './features/counter/timerSlice'

const moveFocus = (key, position, setCurrentPosition, grid) => {
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
      if (col > 0) {
        newPosition = [row, col - 1];
      }
      break;
        
  }


  setCurrentPosition(newPosition);
};


function App() {

  const dispatch = useDispatch()
  const { time, isPaused } = useSelector((state) => state.timer);
  const count = useSelector((state)=>state.counter.value)

  const [grid, setGrid] = useState(blocks);
  const [currentPosition, setCurrentPosition] = useState([0, 0]);

  const [currentHint, setCurrentHint] = useState({
    key: "1A",
    hints: across[0].hints,
  });



  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      dispatch(incrementTime());
    }, 1000);

    if (isPaused) {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [dispatch, isPaused]);


  const handleHints = (word,direction) =>{
    console.log(word)
    setCurrentHint({
      key:`${word.no+direction}`,
      hints:word.hints
    })
  }

  

  return (
    <>
      <nav className="flex  h-10 w-screen">
        <div className="flex-1 h-full ">
          <div className=" h-full flex  items-center">
            <img
              src="https://www.nytimes.com/games-assets/v2/assets/icons/settings-gear.svg"
              alt="gear"
              className="pl-3"
            />
          </div>
        </div>
        <div className="flex-1  h-full  flex items-center">
          <button className="flex w-20 justify-around h-full items-center  "
          onClick={() => dispatch(togglePause())}
          >
            <img src="https://www.nytimes.com/games-assets/v2/assets/timer-pause.svg" alt="pause" />
            <div> {formatTime(time)} </div>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-end h-full border">
          <div className="flex-1">Rebus</div>
          <div className="flex-1">Clear</div>
          <div className="flex-1">Reveal</div>
          <div className="flex-1">Check</div>
          <div className="flex-1">
            <img
              src="https://www.nytimes.com/games-assets/v2/assets/pencil-blue.svg"
              alt="pencil"
            />{" "}
          </div>
        </div>
      </nav>

      <Dialog/>

      <section className="flex h-[600px]">
        {/* crossword */}
        <div className="flex-1 flex flex-col gap-2 border justify-center items-center">
          <div className="square border w-full h-20 flex justify-center">
            <div className="h-full w-[400px] border border-black bg-[#dcefff] items-center flex gap-3 px-3">
              <div className="font-bold">{currentHint.key} </div>
              <div>{currentHint.hints}</div>
            </div>
          </div>
          <div className="square grid grid-cols-5 grid-rows-5 border-4 border-black h-[400px] w-[400px]">
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
                  onFocus={(key, position) =>
                    moveFocus(key, position, setCurrentPosition)
                  }
                  across={x.across}
                  bottom={x.bottom}
                  grid={grid}
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
                <div onClick={()=>{handleHints(word,'A')}} key={index} className="py-3 px-2 flex w-full">
                  <strong>{word.no} </strong>
                  <p key={index} className="pl-2">
                    {word.hints}
                  </p>
                </div>
              );
            })}
          </div>
          {/* <div> {count} </div> */}
          <div className="flex flex-1 border bg-cyan-200  flex-col">
            <p className="across font-semibold py-3 px-2 ">Down</p>
            {down.map((word, index) => {
              return (
                <div onClick={()=>{handleHints(word,'D')}} key={index} className="py-3 px-2 flex w-full ">
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
