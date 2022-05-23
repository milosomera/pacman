// const width = 28;
// let pacmanCurrentIndex = 502;
// let blinkyCurrentIndex = 197;

// function getCoordinates(index) {
//   return [index % width, Math.floor(index / width)];
// }

// function moveBlinky() {
//   const [blinkyX, blinkyY] = getCoordinates(blinkyCurrentIndex);
//   console.log(blinkyX, blinkyY);
// }

// moveBlinky();

const pacman = {
  x: 1,
  y: 26,
};

const pacmanFn = () => {
  switch (pacman.x) {
    case pacman.x < 5:
      console.log("left");
      break;
    case pacman.x > 5:
      console.log("right");
  }
};

pacmanFn();
