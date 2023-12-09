document.getElementById("preloader").style.display = "flex";

// Set a timeout to hide the preloader and start the game
setTimeout(function() {
    document.getElementById("preloader").style.opacity = "0"; // Fade out the preloader
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none"; // Hide the preloader
    }, 2000); // Wait for the fade-out transition to complete (2 seconds)
}, 3000); // Show the preloader for 3 seconds


function calculate() {
    var dropList1 = document.getElementById("dropList1").value;
    var dropList2 = document.getElementById("dropList2").value;
    var num1 = document.getElementById("num1").value;

    var result;
    if (dropList1 === "binary" && dropList2 === "decimal") {
        result = parseInt(num1, 2).toString(10);
    } else if (dropList1 === "decimal" && dropList2 === "binary") {
        result = parseInt(num1, 10).toString(2);
    } else if (dropList1 === "octal" && dropList2 === "decimal") {
        result = parseInt(num1, 8).toString(10);
    } else if (dropList1 === "decimal" && dropList2 === "octal") {
        result = parseInt(num1, 10).toString(8);
    } else if (dropList1 === "hexadecimal" && dropList2 === "decimal") {
        result = parseInt(num1, 16).toString(10);
    } else if (dropList1 === "decimal" && dropList2 === "hexadecimal") {
        result = parseInt(num1, 10).toString(16).toUpperCase();
    } else {
        // Handle other conversions or show an error message
        alert("Invalid conversion!");
        return;
    }

    document.getElementById("result").value = result;
}

function resetFields(){
    document.getElementById("num1").value = "";
    document.getElementById("result").value = "";
}
