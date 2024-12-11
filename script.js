// JavaScript to show the "Happy Birthday" message when the button is clicked
document.getElementById('showMessageButton').addEventListener('click', function() {
    var message = document.getElementById('message');
    var button = document.getElementById('showMessageButton');

    // Show the message and hide the button after clicking
    showMessageButton.classList.toggle('fold-up');
    message.style.display = 'block';
    // showMessageButton.style.display = 'none';
    box.style.display='none'
});
