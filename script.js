// Setup Canvas
const canvas =document.querySelector("canvas")
const ctx = canvas.getContext("2d");
// dimensions
canvas.width = document.body.offsetWidth
canvas.height = document.body.offsetHeight;

console.log(canvas);

// Event Listener Refresh
// click, mousedown, mouseup, mousemove
canvas.addEventListener('click', ( e ) => {
     console.log(e);   
});

// Points
let mousedown = false;
let lastX = 0;
let lastY = 0;

// Set defaults
ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// Draw function
function draw(e){

  if(mousedown === false) return;

  ctx.strokeStyle;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  lastX = e.offsetX
  lastY = e.offsetY

}

// Canvas Event: Watch mouse MOVE, then draw
// line from last point (lastX, lastY) to next point(offsetX, offsetY)
canvas.addEventListener("mousemove", draw );

// Canvas Event: Mouse DOWN, get points
canvas.addEventListener("mousedown", function(e) {
  // check-check
  console.log(e);

  // mousedown, start drawing
  lastX = e.offsetX;
  lastY = e.offsetY;
  mousedown = true
})

// Canvas Event: Mouse UP stop drawing and tracking
canvas.addEventListener("mouseup", function(e) {
  // check-check
  console.log(e);   
  // comment on/off. What happens?
  mousedown = false
});

// Get buttons
const blackButton = document.querySelector("#black");
const whiteButton = document.querySelector('#white');
const coralButton = document.querySelector('#coral');
const redButton = document.querySelector('#red');
const orangeButton = document.querySelector('#orange');
const yellowButton = document.querySelector('#yellow');
const greenButton = document.querySelector('#green');
const blueButton = document.querySelector('#blue');
const purpleButton = document.querySelector('#purple');
const pinkButton = document.querySelector('#pink');
const clearButton = document.querySelector('#erase');


// Erase
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
});

// Change color to black
blackButton.addEventListener('click', () => {
    ctx.strokeStyle = '#161a1d';
} );

// Change color to white
whiteButton.addEventListener('click', () => {
    ctx.strokeStyle = 'white';
} );

// Change color to red
redButton.addEventListener('click', () => {
  ctx.strokeStyle = '#ff0c2c';
});

// Change color to orange
orangeButton.addEventListener('click', () => {
  ctx.strokeStyle = '#F58e16';
});

// Change color to yellow
yellowButton.addEventListener('click', () => {
  ctx.strokeStyle = '#FFFF00';
});

// Change color to green
greenButton.addEventListener('click', () => {
  ctx.strokeStyle = '#29ca40';
});

// Change color to blue
blueButton.addEventListener('click', () => {
  ctx.strokeStyle = '#0c43ff';
});

// Change color to purple
purpleButton.addEventListener('click', () => {
  ctx.strokeStyle = '#8000ff';
});

// Change color to pink
pinkButton.addEventListener('click', () => {
  ctx.strokeStyle = '#ff00ff';
});



// Download Button
downloadButton.addEventListener('click', () => {
  
console.log(canvas.toDataURL());
  
});

// .click()
// bad to use because you can simulate a click and hack people