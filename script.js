//your code here
document.addEventListener("DOMContentLoaded", function () {
    let draggedDiv = null;

    document.addEventListener("dragstart", function (event) {
        if (event.target.classList.contains("draggable")) {
            draggedDiv = event.target;
        }
    });

    document.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    document.addEventListener("drop", function (event) {
        event.preventDefault();

        if (draggedDiv && event.target.classList.contains("draggable")) {
            const targetDiv = event.target;

            // Swap the background images
            const tempBackground = draggedDiv.style.backgroundImage;
            draggedDiv.style.backgroundImage = targetDiv.style.backgroundImage;
            targetDiv.style.backgroundImage = tempBackground;
        }

        draggedDiv = null;
    });
});

