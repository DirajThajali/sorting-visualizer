import insertionSortAlgo from "./insertionSort";

const PRIMARY_COLOR = "slateblue";

const SECONDARY_COLOR = "wheat";

const NEUTRAL_COLOR = "#ccc";

const insertionSortAnimation = (array, animationSpeed) => {
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

export default insertionSortAnimation;
