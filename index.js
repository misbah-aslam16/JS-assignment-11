//====================QUESTION 01====================//
function showAlert() {
    alert("You clicked the link!");
}

//====================QUESTION 02====================//

function showAlert(mobileName) {
    alert("You clicked on " + mobileName);
}

//====================QUESTION 03====================//
function deleteRow(button) {
    
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
//====================QUESTION 04====================//
function changeImage() {
    document.getElementById("hoverImage").src = "./images/mobile4.webp"; // Change to second image
}
function resetImage() {
    document.getElementById("hoverImage").src = "./images/mobile3.webp"; // Revert to first image
}


//====================QUESTION 05====================//

let counter = 0;

        function increaseCounter() {
            counter++;
            document.getElementById("counterValue").innerText = counter;
        }

        function decreaseCounter() {
            counter--;
            document.getElementById("counterValue").innerText = counter;
        }