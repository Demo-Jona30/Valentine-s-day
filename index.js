const resizeButton = document.getElementById('resizeButton');
let fontSize = 16; // Initial font size
let padding = 10; // Initial padding
let count = 1;
resizeButton.addEventListener('click', () => {
    // Increase font size and padding
    if(count<5)
    {
        fontSize += 10;
        padding += 20;
    // Apply new styles
            resizeButton.style.fontSize = fontSize + 'px';
            resizeButton.style.padding = padding + 'px ' + (padding * 2) + 'px';
        count = count+1;
    }else{
        window.location.href = 'second.html';
    }
});
