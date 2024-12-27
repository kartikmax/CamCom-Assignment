import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTime, togglePause } from "../../features/counter/timerSlice";

export const Dialog = () => {
  const dispatch = useDispatch();
  const { time, isPaused } = useSelector((state) => state.timer);

  if (!isPaused) return null;

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleReset = () => {
    dispatch(resetTime());
    return null;
  };

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Time is Paused</h2>
        <p className="text-lg mb-6">Current time: {formatTime(time)}</p>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(togglePause())}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Resume
          </button>
          {/* <button
            onClick={handleReset}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Reset Time
          </button> */}
        </div>
      </div>
    </div>
  );
};
