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
const clearButton = document.querySelector('#erase');
const coralButton = document.querySelector('#coral');

// Erase
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
});

// Change color to Coral
coralButton.addEventListener('click', () => {
  ctx.strokeStyle = '#FF7F50';
});

// Download Button
downloadButton.addEventListener('click', () => {
  
console.log(canvas.toDataURL());
  
});

// .click()
// bad to use because you can simulate a click and hack people