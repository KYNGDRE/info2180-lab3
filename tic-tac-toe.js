document.addEventListener("DOMContentLoaded", function() {
    var textbox = document.getElementById('status');
    const board = document.getElementById('board');
    const cells = board.querySelectorAll('div');
    const button = document.querySelector(".btn");

    // Initialize an empty array for tracking the game state
    var box = ["", "", "", "", "", "", "", "", ""];

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
                if (box[0]===box[1] && box[1]===box[2] && box[1]!="") {
                    win=box[0]
                }
                else if (box[3]===box[4] && box[4]===box[5] && box[5]!="") {
                    win=box[3]
                }
                else if (box[6]===box[7] && box[7]===box[8] && box[8]!="") {
                    win=box[6]
                }



                else if (box[0]===box[3] && box[3]===box[6] && box[3]!="") {
                    win=box[0]
                }
                else if (box[1]===box[4] && box[4]===box[7] && box[7]!="") {
                    win=box[1]
                }
                else if (box[2]===box[5] && box[2]===box[8] && box[8]!="") {
                    win=box[2]
                }




                else if (box[0]===box[4] && box[4]===box[8] && box[0]!="") {
                    win=box[4]
                }
                else if (box[2]===box[4] && box[4]===box[6] && box[6]!="") {
                    win=box[4]
                }
                else if (box[0]!="" && box[1]!="" && box[2]!="" && box[3]!="" && box[4]!="" && box[5]!="" && box[6]!="" && box[7]!="" && box[8]!=""){
                    win='D'
                }
                else{}


                if (win==="X"){
                    textbox.textContent = "Congratulations! X is the Winner!";
                    textbox.classList.add("you-won");
                } 
                else if (win==="O") {
                    textbox.textContent = "Congratulations! O is the Winner!";
                    textbox.classList.add("you-won");
                }
                else if (win==="D") {
                    textbox.textContent = "Well Done Both of You! It is a Draw!";
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

        button.addEventListener("click", function() {
            switching= 0;
            box = ["", "", "", "", "", "", "", "", ""];
            cells.forEach((cell, index) => {
                cell.textContent = "";
                cell.classList.remove('hover');
                textbox.textContent = "Move your mouse over a square and click to play an X or an O.";
                textbox.classList.remove('you-won');
                cell.classList.remove("X");
                cell.classList.remove("O");
                });
            });
        });
    });
});
