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
// Select the game board and all its squares (cells)#
    var textbox = document.getElementById('status');
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
        
        cell.addEventListener('mouseover',function(){
            if (cell.textContent == "") {
                cell.classList.add('hover');
            }   
        });

        cell.addEventListener('mouseout',function(){
            if (cell.textContent == "") {
                cell.classList.remove('hover');
            }   
        });

        function winner_check(){
            win='';
            if (box[0]===box[1] && box[1]===box[2] & box[1]!="") {
                win=box[0]
            }
            else if (box[3]===box[4] && box[4]===box[5] & box[5]!="") {
                win=box[3]
            }
            else if (box[6]===box[7] && box[7]===box[8] & box[8]!="") {
                win=box[6]
            }



            else if (box[0]===box[3] && box[3]===box[6] & box[3]!="") {
                win=box[0]
            }
            else if (box[1]===box[4] && box[4]===box[7] & box[7]!="") {
                win=box[1]
            }
            else if (box[2]===box[5] && box[2]===box[8] & box[8]!="") {
                win=box[2]
            }




            else if (box[0]===box[4] && box[4]===box[8] & box[0]!="") {
                win=box[4]
            }
            else if (box[2]===box[4] && box[4]===box[6] & box[6]!="") {
                win=box[4]
            }


            if (win==="X"){
                textbox.textContent = "Congratulations! X is the Winner!";
                textbox.classList.add("you-won");
            } 
            else if (win==="O") {
                textbox.textContent = "Congratulations! O is the Winner!";
                textbox.classList.add("you-won");
            }
            else {}
        }

        // Click event for each cell
        cell.addEventListener("click", function() {
            if (cell.textContent === "") { // Check if the cell is empty
                if (switching === 0) {
                    cell.textContent = "X";
                    cell.classList.add("X");
                    box[index] = "X";
                    winner_check()
                    switching = 1;// Next turn is 'O'
                } else {
                    cell.textContent = "O";
                    cell.classList.add("O");
                    box[index] = "O";
                    winner_check()
                    switching = 0; // Next turn is 'X'
                    }
                }
            });
        });
    });
});
