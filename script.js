document.addEventListener("DOMContentLoaded", () => {
  const displayWorld = document.querySelector("#world");
  const displayPacman = document.querySelector("#pacman");
  const displayBlinky = document.querySelector("#blinky");
  const displayClyde = document.querySelector("#clyde");
  const displayInky = document.querySelector("#inky");
  const displayPinky = document.querySelector("#pinky");
  const displayScore = document.querySelector("#score");
  const buttonStart = document.querySelector("#btn_new_game");

  // 0 - coin; 1 - wall; 2 - ghost_lair; 3 - cherry; 4 - empty
  // prettier-ignore
  const worlds = [
    [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
      [1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1],
      [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
      [1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1],
      [1,1,1,1,1,1,0,1,1,4,1,1,4,2,2,4,1,1,4,1,1,0,1,1,1,1,1,1],
      [1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1],
      [1,4,4,4,4,4,0,0,0,4,4,2,2,2,2,2,2,4,4,0,0,0,4,4,4,4,4,1],
      [1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1],
      [1,1,1,1,1,1,0,1,1,4,1,1,4,1,1,4,1,1,4,1,1,0,1,1,1,1,1,1],
      [1,1,1,1,1,1,0,1,1,4,1,1,4,1,1,4,1,1,4,1,1,0,1,1,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
      [1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1],
      [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
      [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
      [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
      [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
      [1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1],
      [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
      [1,0,0,3,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,3,0,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1],
      [1,0,0,0,1,1,0,1,1,4,4,4,1,1,1,1,4,4,4,1,1,0,1,1,0,0,0,1],
      [1,1,1,0,1,1,0,1,1,4,1,4,4,4,4,4,4,1,4,1,1,0,1,1,0,1,1,1],
      [1,1,1,0,0,0,0,0,0,4,1,1,4,2,2,4,1,1,4,0,0,0,0,0,0,1,1,1],
      [1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1],
      [1,4,4,4,4,4,0,1,1,4,4,2,2,2,2,2,2,4,4,1,1,0,4,4,4,4,4,1],
      [1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1],
      [1,1,1,1,1,1,0,1,1,4,1,1,4,1,1,4,1,1,4,1,1,0,1,1,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,4,4,4,4,1,1,4,4,4,4,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,4,4,4,4,4,4,1,1,1,1,0,1,1,1,1,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1],
      [1,0,0,3,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,3,0,0,1],
      [1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1],
      [1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1],
      [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
      [1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1],
      [1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1],
      [1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
  ];
  const world = worlds[Math.floor(Math.random() * worlds.length)];

  let score = 0;
  class Character {
    constructor(name, x, y) {
      this.name = name;
      this.x = x;
      this.y = y;
    }
  }
  const pacman = new Character("pacman", 2, 26);
  const blinky = new Character("blinky", 11, 12);
  const clyde = new Character("clyde", 16, 12);
  const inky = new Character("inky", 11, 14);
  const pinky = new Character("pinky", 16, 14);

  const displayWorldFn = () => {
    const output = document.createElement("div");
    for (let i = 0; i < world.length; i++) {
      const row = document.createElement("div");
      row.setAttribute("class", "row");
      output.appendChild(row);

      for (let j = 0; j < world[i].length; j++) {
        const cell = document.createElement("div");
        row.appendChild(cell);

        if (world[i][j] === 0) {
          cell.classList.add("coin");
        } else if (world[i][j] === 1) {
          cell.classList.add("wall");
        } else if (world[i][j] === 2) {
          cell.classList.add("ghost_lair");
        } else if (world[i][j] === 3) {
          cell.classList.add("cherry");
        } else if (world[i][j] === 4) {
          cell.classList.add("empty");
        }
      }
    }
    displayWorld.innerHTML = output.innerHTML;
  };

  const displayCharacter = (char, obj) => {
    char.style.top = obj.y * 20 + "px";
    char.style.left = obj.x * 20 + "px";
  };

  const displayScoreFn = () => {
    if (world[pacman.y][pacman.x] === 0) {
      world[pacman.y][pacman.x] = 4;
      score += 10;
    }
    if (world[pacman.y][pacman.x] === 3) {
      world[pacman.y][pacman.x] = 4;
      score += 30;
    }
    displayWorldFn();
    displayScore.innerHTML = score;
  };

  const gameOver = () => {
    if (
      (pacman.x === blinky.x && pacman.y === blinky.y) ||
      (pacman.x === clyde.x && pacman.y === clyde.y) ||
      (pacman.x === inky.x && pacman.y === inky.y) ||
      (pacman.x === pinky.x && pacman.y === pinky.y)
    ) {
      alert("Game Over");
      pacman.x = 1;
      pacman.y = 26;
      blinky.x = 11;
      blinky.y = 12;
      clyde.x = 16;
      clyde.y = 12;
      inky.x = 11;
      inky.y = 14;
      pinky.x = 16;
      pinky.y = 14;
      location.reload();
    }
  };

  const chaseAlgorithm = (ghost) => {
    const directions = ["up", "down", "left", "right"];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    switch (direction) {
      case "up":
        if (
          pacman.y < ghost.y &&
          world[ghost.y - 1][ghost.x] == 1 &&
          world[ghost.y][ghost.x - 1] == 1 &&
          world[ghost.y][ghost.x + 1] == 1 &&
          world[ghost.y + 1][ghost.x] != 1
        ) {
          ghost.y++;
        } else if (
          pacman.y < ghost.y &&
          world[ghost.y - 1][ghost.x] == 1 &&
          world[ghost.y][ghost.x - 1] == 1 &&
          world[ghost.y][ghost.x + 1] != 1
        ) {
          ghost.x++;
        } else if (
          pacman.y < ghost.y &&
          world[ghost.y - 1][ghost.x] == 1 &&
          world[ghost.y][ghost.x - 1] != 1
        ) {
          ghost.x--;
        } else if (pacman.y < ghost.y && world[ghost.y - 1][ghost.x] != 1) {
          ghost.y--;
        }
        break;
      case "down":
        if (
          pacman.y > ghost.y &&
          world[ghost.y + 1][ghost.x] == 1 &&
          world[ghost.y][ghost.x - 1] == 1 &&
          world[ghost.y][ghost.x + 1] == 1 &&
          world[ghost.y + 1][ghost.x] != 1
        ) {
          ghost.y--;
        } else if (
          pacman.y > ghost.y &&
          world[ghost.y + 1][ghost.x] == 1 &&
          world[ghost.y][ghost.x - 1] == 1 &&
          world[ghost.y][ghost.x + 1] != 1
        ) {
          ghost.x++;
        } else if (
          pacman.y > ghost.y &&
          world[ghost.y + 1][ghost.x] == 1 &&
          world[ghost.y][ghost.x - 1] != 1
        ) {
          ghost.x--;
        } else if (pacman.y > ghost.y && world[ghost.y + 1][ghost.x] != 1) {
          ghost.y++;
        }
        break;
      case "left":
        if (
          pacman.x < ghost.x &&
          world[ghost.y][ghost.x - 1] == 1 &&
          world[ghost.y - 1][ghost.x] == 1 &&
          world[ghost.y + 1][ghost.x] == 1 &&
          world[ghost.y][ghost.x + 1] != 1
        ) {
          ghost.x++;
        } else if (
          pacman.x < ghost.x &&
          world[ghost.y][ghost.x - 1] == 1 &&
          world[ghost.y - 1][ghost.x] == 1 &&
          world[ghost.y + 1][ghost.x] != 1
        ) {
          ghost.y++;
        } else if (
          pacman.x < ghost.x &&
          world[ghost.y][ghost.x - 1] == 1 &&
          world[ghost.y - 1][ghost.x] != 1
        ) {
          ghost.y--;
        } else if (pacman.x < ghost.x && world[ghost.y][ghost.x - 1] != 1) {
          ghost.x--;
        }
        break;
      case "right":
        if (
          pacman.x > ghost.x &&
          world[ghost.y][ghost.x + 1] == 1 &&
          world[ghost.y - 1][ghost.x] == 1 &&
          world[ghost.y + 1][ghost.x] == 1 &&
          world[ghost.y][ghost.x - 1] != 1
        ) {
          ghost.x--;
        } else if (
          pacman.x > ghost.x &&
          world[ghost.y][ghost.x + 1] == 1 &&
          world[ghost.y - 1][ghost.x] == 1 &&
          world[ghost.y + 1][ghost.x] != 1
        ) {
          ghost.y++;
        } else if (
          pacman.x > ghost.x &&
          world[ghost.y][ghost.x + 1] == 1 &&
          world[ghost.y - 1][ghost.x] != 1
        ) {
          ghost.y--;
        } else if (pacman.x > ghost.x && world[ghost.y][ghost.x + 1] != 1) {
          ghost.x++;
        }
        break;
    }
  };

  document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 37:
        displayPacman.style.transform = "rotate(180deg)";
        if (world[pacman.y][pacman.x - 1] != 1) {
          pacman.x--;
        }
        break;
      case 39:
        displayPacman.style.transform = "rotate(0deg)";
        if (world[pacman.y][pacman.x + 1] != 1) {
          pacman.x++;
        }
        break;
      case 38:
        displayPacman.style.transform = "rotate(-90deg)";
        if (world[pacman.y - 1][pacman.x] != 1) {
          pacman.y--;
        }
        break;
      case 40:
        displayPacman.style.transform = "rotate(90deg)";
        if (world[pacman.y + 1][pacman.x] != 1) {
          pacman.y++;
        }
        break;
    }

    displayScoreFn();
    displayCharacter(displayPacman, pacman);
    gameOver();
  });

  buttonStart.addEventListener("click", () => {
    location.reload();
  });

  const gameLoop = () => {
    setInterval(() => {
      displayCharacter(displayBlinky, blinky);
      displayCharacter(displayClyde, clyde);
      displayCharacter(displayInky, inky);
      displayCharacter(displayPinky, pinky);
      chaseAlgorithm(blinky);
      chaseAlgorithm(clyde);
      chaseAlgorithm(inky);
      chaseAlgorithm(pinky);
      gameOver();
    }, 500);
  };

  displayWorldFn();
  displayCharacter(displayPacman, pacman);
  displayScoreFn();
  gameLoop();
});
