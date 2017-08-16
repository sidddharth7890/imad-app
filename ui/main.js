console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
var img = document.getElementById('madi');
img.onclick = function () {
    var interval = setInterval(moveLeft, 100); 
    img.style.marginRight = '100px';    
    };