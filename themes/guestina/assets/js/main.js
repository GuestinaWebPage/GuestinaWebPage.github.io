// Fetch the styles applied to the root element
const rootStyles = getComputedStyle(document.documentElement);

// Access the values of the CSS variables
const orange = rootStyles.getPropertyValue('--orange').trim();
const teal = rootStyles.getPropertyValue('--teal').trim();
const beige = rootStyles.getPropertyValue('--beige').trim();
const light = rootStyles.getPropertyValue('--light').trim();
const dark = rootStyles.getPropertyValue('--dark').trim();

const canvas = document.querySelector("#bg-canvas")



console.log(JSON.stringify(canvas));
// Initialize the GL context
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
var width = 0;
var height = 0;

function resizeCanvas() {
  const canvasStyle = getComputedStyle(canvas);
  const dpi = window.devicePixelRatio;
  console.log(dpi);
  height = parseInt(canvasStyle.height) * dpi;
  width = parseInt(canvasStyle.width) * dpi;
  console.log(width, height);
  canvas.height = height;
  canvas.width = width;
}
resizeCanvas();

addEventListener( "resize", resizeCanvas, false);


function animate() {
  
  ctx.fillStyle = orange;
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = beige;
  ctx.fillRect(30, 30, 50, 50);


  requestAnimationFrame(animate);
}

animate();


