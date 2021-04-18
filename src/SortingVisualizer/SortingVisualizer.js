import React, { useEffect, useState } from "react";
import mergeSortAlgo from "../SortingAlgorithms/mergeSort";
import testMergeSort from "../SortingAlgorithmsTest/mergeSortTest";
import insertionSortAlgo from "../SortingAlgorithms/insertionSort";
import testInsertionSort from "../SortingAlgorithmsTest/insertionSortTest";
import { getRandomInt } from "../Utilities/utilities";
import "./SortingVisualizer.css";

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(getRandomInt(5, 750));
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
        arrayBars[i].style.backgroundColor = "grey";
      }, i * 0.5);
    }

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      const [, , isCompare] = animations[i];
      if (isCompare) {
        console.log("Compare!");
        const [bar1Index, bar2Index] = animations[i];
        const bar1Style = arrayBars[bar1Index].style;
        const bar2Style = arrayBars[bar2Index].style;
        const color = i % 2 == 0 ? "wheat" : "slateblue";
        setTimeout(() => {
          bar1Style.backgroundColor = color;
          bar2Style.backgroundColor = color;
        }, i * 1);
      } else {
        console.log("swap!");
        setTimeout(() => {
          const [barIndex, newHeight] = animations[i];
          const barStyle = arrayBars[barIndex].style;
          barStyle.height = `${newHeight}px`;
        }, i * 1);
      }
    }
  };
  const quickSort = () => {};
  const heapSort = () => {};
  const bubbleSort = () => {};

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

      <div className="bar-container">
        {array.map((value, index) => {
          return (
            <div className="bar" style={{ height: `${value}px` }} key={index}>
              {/* {value} */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SortingVisualizer;
