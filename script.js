// Function to update main display when hovering on a thumbnail
function upDate(previewPic) {
    let mainDiv = document.getElementById("image");
    
    // Update text to the alt of the image
    mainDiv.innerHTML = previewPic.alt;
    
    // Update background image
    mainDiv.style.backgroundImage = `url('${previewPic.src}')`;
    mainDiv.style.backgroundSize = "cover";   // Cover entire div
    mainDiv.style.backgroundPosition = "center";
}

// Function to reset main display when mouse leaves thumbnail
function undo() {
    let mainDiv = document.getElementById("image");
    mainDiv.innerHTML = "Hover over an image below to display here.";
    mainDiv.style.backgroundImage = "";
}
