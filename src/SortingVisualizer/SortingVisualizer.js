import React, { useEffect, useState } from "react";
import mergeSortAlgo from "../SortingAlgorithms/mergeSort";
import "./SortingVisualizer.css";

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 6; i++) {
      array.push(getRandomInt(5, 750));
    }

    setArray(array);
  };

  const mergeSort = () => {
    const sortedArr = array.slice().sort((a, b) => a - b);

    mergeSortAlgo(array);

    console.log(areArraysEqual(sortedArr, array));
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
              {value}
            </div>
          );
        })}
      </div>
    </>
  );
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const testMergeSort = (array) => {};

export default SortingVisualizer;
