import React, { useEffect, useState } from "react";
import getAlgo from "../data";
import { getRandomInt } from "../Utilities/utilities";
import "./SortingVisualizer.css";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [numArrayBars, setNumArrayBars] = useState(windowWidth / 20);

  const updateScreenValue = () => {
    setWindowWidth(window.innerHeight);
    setWindowHeight(window.innerHeight);
    setNumArrayBars(windowWidth / 20);
  };

  useEffect(() => {
    resetArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateScreenValue);
    return () => {
      window.removeEventListener("resize", updateScreenValue);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < numArrayBars; i++) {
      array.push(getRandomInt(5, windowHeight - 120));
    }
    // const array = [3, 2, 8, 11, 1, 12];
    // const array = [3, 2, 11, 1];
    setArray(array);
  };

  const [sortingAlgoNames, sortingAlgorithms] = getAlgo(array, animationSpeed);

  const changeAnimationSpeed = () => {
    const slider = document.getElementsByClassName("slider")[0];
    setAnimationSpeed(100 - slider.value);
    const color = `linear-gradient(90deg, slateblue ${slider.value}%, rosybrown ${slider.value}%)`;
    slider.style.background = color;
  };

  return (
    <>
      <div className="alert">
        <p>
          Only Insertion and Merge Sort have been implemented so far. Stay
          tuned!
        </p>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={resetArray}>
          Generate New Array
        </button>
        {sortingAlgoNames.map((algoName, index) => {
          return (
            <button
              key={index}
              className="btn"
              onClick={sortingAlgorithms[index]}
            >
              {algoName}
            </button>
          );
        })}
      </div>
      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          className="slider"
          onChange={changeAnimationSpeed}
        />
      </div>
      <div className="bar-wrapper">
        <div className="bar-container">
          {array.map((value, index) => {
            return (
              <div className="bar" style={{ height: `${value}px` }} key={index}>
                {/* {value} */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SortingVisualizer;
