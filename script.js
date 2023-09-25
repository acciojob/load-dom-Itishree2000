//your JS code here. If required.
// Function to handle DOM load event
function handleDomLoad() {
    // Create a new paragraph element
    const paragraph = document.createElement("p");

    // Set the text content of the paragraph
    paragraph.textContent = "DOM load success";

    // Append the paragraph to the body of the document
    document.body.appendChild(paragraph);
}

// Add an event listener to execute the handleDomLoad function when the DOM is loaded
document.addEventListener("DOMContentLoaded", handleDomLoad);
