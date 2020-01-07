let x0,
  y0,
  x1,
  y1 = 0;
function fetchme() {
  clear();
  x0 = parseInt(document.querySelector("#x0").value);
  y0 = parseInt(document.querySelector("#y0").value);
  x1 = parseInt(document.querySelector("#x1").value);
  y1 = parseInt(document.querySelector("#y1").value);
  stroke(color(random(255), random(255), random(255)));
}
function setup() {
  createCanvas(840, 680);
  stroke("green");
}
function draw() {
  translate(width / 2, height / 2);
  scale(1, -1);
  strokeWeight(5);
  dda(x0, y0, x1, y1);
}

function dda(x0, y0, x1, y1) {
  let dx = x1 - x0;
  let dy = y1 - y0;
  let steps = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);
  let xinc = dx / steps;
  let yinc = dy / steps;
  let x = x0;
  let y = y0;

  for (let i = 0; i <= steps; i++) {
    point(x, y);
    x += xinc;
    y += yinc;
  }
}
