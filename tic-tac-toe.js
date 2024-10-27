// document.addEventListener("DOMContentLoaded", function() {
//     // Select all div elements within the game board

//     const board = document.getElementById('board');

//     const button = document.querySelector(".btn");

//     const cells = board.querySelectorAll('div');

//     let switching = 0;

//     const box = ["", "", "", "", "", ""];


//     button.addEventListener("click", function() {
//         // var switching= 0;
//         // Add the "square" class to each div
//         cells.forEach(cells => {
//             cells.classList.add("square");

//             cells.addEventListener("click", function() {
//                 if (cells.textContent === "") { // Check if the cell is empty
//                     if (switching === 0) {
//                         cells.textContent = "X";
//                         cells.classList.add("X");
//                         box[index] = "X";
//                         switching = 1;; // Next turn is 'O'
//                     } else {
//                         cells.textContent = "O";
//                         cells.classList.add("O");
//                         box[index] = "O";
//                         switching = 0; // Next turn is 'X'
//                     }
//                 }
//             });
//         });
//     });

//       });

  
      document.addEventListener("DOMContentLoaded", function() {
        // Select the game board and all its squares (cells)
        const board = document.getElementById('board');
        const cells = board.querySelectorAll('div');
        const button = document.querySelector(".btn");
    
        // Initialize an empty array for tracking the game state
        const box = ["", "", "", "", "", "", "", "", ""];
    
        // Set a variable to track whose turn it is
        let switching = 0; // 0 for 'X', 1 for 'O'
    
        // Add "square" class and click event listener to each cell
        button.addEventListener("click", function() {
        cells.forEach((cell, index) => {
            cell.classList.add("square");
    
            // Click event for each cell
            cell.addEventListener("click", function() {
                if (cell.textContent === "") { // Check if the cell is empty
                    if (switching === 0) {
                        cell.textContent = "X";
                        cell.classList.add("X");
                        box[index] = "X";
                        switching = 1; // Next turn is 'O'
                    } else {
                        cell.textContent = "O";
                        cell.classList.add("O");
                        box[index] = "O";
                        switching = 0; // Next turn is 'X'
                    }
                }
            });
        });
    });
});
