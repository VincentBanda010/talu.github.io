// script.js
function handleYes() {
    alert("Darling, in the garden of love, you're the most beautiful bloom. Your presence is sweeter than a box of chocolates, and your love is like a melody that serenades my heart. Happy Valentine's Day, my dearest! 🌹💖");
}

function handleNo() {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var buttonContainer = document.querySelector('.button-container');

    // Swap the positions of the Yes and No buttons within the button container
    buttonContainer.insertBefore(noButton, yesButton.nextSibling);

    // Swap the IDs to maintain functionality
    yesButton.id = 'noButton';
    noButton.id = 'yesButton';

    // Alert the user to click Yes after swapping buttons
    alert('Oh no! Please reconsider and click Yes. 🥺');
}
