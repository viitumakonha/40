const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

function drawBoard() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            if (board[i][j] !== 0) {
                tile.textContent = board[i][j];
                tile.style.backgroundColor = "#f39c12";
            }
            gameBoard.appendChild(tile);
        }
    }
}

function addNewTile() {
    let emptyTiles = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === 0) {
                emptyTiles.push({ x: i, y: j });
            }
        }
    }

    if (emptyTiles.length > 0) {
        let randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        board[randomTile.x][randomTile.y] = 2;
    }
}

function moveLeft() {
    for (let i = 0; i < 4; i++) {
        let row = board[i].filter(tile => tile !== 0);
        for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
                row[j] *= 2;
                row[j + 1] = 0;
            }
        }
        row = row.filter(tile => tile !== 0);
        while (row.length < 4) {
            row.push(0);
        }
        board[i] = row;
    }
    addNewTile();
    drawBoard();
}

function moveRight() {
    for (let i = 0; i < 4; i++) {
      let row = board[i].filter(tile => tile !== 0);
      for (let j = row.length - 1; j > 0; j--) {
        if (row[j] === row[j - 1]) {
          row[j] *= 2;
          row[j - 1] = 0;
        }
      }
      row = row.filter(tile => tile !== 0);
      while (row.length < 4) {
        row.unshift(0); // adiciona zeros no começo
      }
      board[i] = row;
    }
    addNewTile();
    drawBoard();
  }

function moveUp() {
    for (let j = 0; j < 4; j++) {
      let column = [];
      for (let i = 0; i < 4; i++) {
        if (board[i][j] !== 0) {
          column.push(board[i][j]);
        }
      }
  
      for (let i = 0; i < column.length - 1; i++) {
        if (column[i] === column[i + 1]) {
          column[i] *= 2;
          column[i + 1] = 0;
        }
      }
  
      column = column.filter(tile => tile !== 0);
      while (column.length < 4) {
        column.push(0);
      }
  
      for (let i = 0; i < 4; i++) {
        board[i][j] = column[i];
      }
    }
    addNewTile();
    drawBoard();
  }

function moveDown() {
    for (let j = 0; j < 4; j++) {
      let column = [];
      for (let i = 0; i < 4; i++) {
        if (board[i][j] !== 0) {
          column.push(board[i][j]);
        }
      }
  
      for (let i = column.length - 1; i > 0; i--) {
        if (column[i] === column[i - 1]) {
          column[i] *= 2;
          column[i - 1] = 0;
        }
      }
  
      column = column.filter(tile => tile !== 0);
      while (column.length < 4) {
        column.unshift(0);
      }
  
      for (let i = 0; i < 4; i++) {
        board[i][j] = column[i];
      }
    }
    addNewTile();
    drawBoard();
  }
  

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      moveLeft();
    } else if (event.key === "ArrowRight") {
      moveRight();
    } else if (event.key === "ArrowUp") {
      moveUp();
    } else if (event.key === "ArrowDown") {
      moveDown();
    }
  });
  

addNewTile();
drawBoard();
