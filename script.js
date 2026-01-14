function upDate(previewPic) {
    console.log("Hovered on:", previewPic);

    let mainDiv = document.getElementById("image");

    mainDiv.innerHTML = previewPic.alt;

    mainDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
    let mainDiv = document.getElementById("image");

    mainDiv.innerHTML = "Hover over an image below to display here.";

    mainDiv.style.backgroundImage = "url('')";
}
