import React, { useEffect, useState } from "react";
import mergeSortAlgo from "../SortingAlgorithms/mergeSort";
// import testMergeSort from "../SortingAlgorithmsTest/mergeSortTest";
import insertionSortAlgo from "../SortingAlgorithms/insertionSort";
// import testInsertionSort from "../SortingAlgorithmsTest/insertionSortTest";
import { getRandomInt } from "../Utilities/utilities";
import "./SortingVisualizer.css";

const PRIMARY_COLOR = "slateblue";

const SECONDARY_COLOR = "wheat";

const NEUTRAL_COLOR = "#ccc";

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

  const mergeSort = () => {
    // testMergeSort(array);
    mergeSortAlgo(array);
  };

  const insertionSort = () => {
    // testInsertionSort(array);
    const animations = insertionSortAlgo(array);

    for (let i = 0; i < array.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      setTimeout(() => {
        arrayBars[i].style.backgroundColor = NEUTRAL_COLOR;
      }, (i * animationSpeed) / 10);
    }

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      const [, , isCompare] = animations[i];
      if (isCompare) {
        // compare animation
        const [bar1Index, bar2Index] = animations[i];
        const bar1Style = arrayBars[bar1Index].style;
        const bar2Style = arrayBars[bar2Index].style;
        const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          bar1Style.backgroundColor = bar2Style.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        // swap animation
        setTimeout(() => {
          const [barIndex, newHeight] = animations[i];
          const barStyle = arrayBars[barIndex].style;
          barStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };
  const quickSort = () => {};
  const heapSort = () => {};
  const bubbleSort = () => {};

  const changeAnimationSpeed = () => {
    const slider = document.getElementsByClassName("slider")[0];
    setAnimationSpeed(100 - slider.value);
    const color = `linear-gradient(90deg, slateblue ${slider.value}%, rosybrown ${slider.value}%)`;
    slider.style.background = color;
  };

  return (
    <>
      <div className="btn-container">
        <button className="btn" onClick={resetArray}>
          Generate New Array
        </button>
        <button className="btn" onClick={insertionSort}>
          Insertion Sort
        </button>
        <button className="btn" onClick={mergeSort}>
          Merge Sort
        </button>
        <button className="btn" onClick={quickSort}>
          Quick Sort
        </button>
        <button className="btn" onClick={heapSort}>
          Heap Sort
        </button>
        <button className="btn" onClick={bubbleSort}>
          Bubble Sort
        </button>
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
