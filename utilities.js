function print(text) {
    // Create a new div element
    var newDiv = document.createElement('div');
    // Set the text content of the new div
    newDiv.textContent = text;
    // Append the new div to the console div
    document.getElementById('console').appendChild(newDiv);

}
document.addEventListener('DOMContentLoaded', function() {
    // Select the scrollable element with the class name "console"
    var consoleElement = document.querySelector('.console');

    // Function to scroll to the bottom of the scrollable element
    function scrollToBottom() {
        if (consoleElement) {
            consoleElement.scrollTop = consoleElement.scrollHeight;
        }
    }

    // Example usage:
    // After adding new content to the scrollable element, call scrollToBottom to scroll to the bottom
    scrollToBottom(); // Scroll to the bottom after adding new content
});