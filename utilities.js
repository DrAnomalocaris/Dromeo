function print(text) {
    // Create a new div element
    var newDiv = document.createElement('div');
    // Set the text content of the new div
    newDiv.textContent = text;
    // Append the new div to the console div
    document.getElementById('console').appendChild(newDiv);
}
