// script.js
function handleYes() {
    alert("You're my Valentine! 💖");
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
