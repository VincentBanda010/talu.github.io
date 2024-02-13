function handleYes() {
    alert('Youre my Valentine! 💖');
}

function handleNo() {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var mainSection = document.querySelector('.content-section');

    // Swap the positions of the Yes and No buttons
    mainSection.insertBefore(noButton, yesButton);

    // Alert the user to click Yes after swapping buttons
    alert('Oh no! Please reconsider and click Yes. 🥺');
}
