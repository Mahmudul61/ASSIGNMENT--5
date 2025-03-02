document.getElementById('Click-button').addEventListener('click' , function(){
    const colors = ['red', 'black', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('body').style.backgroundColor = randomColor ;
    
})