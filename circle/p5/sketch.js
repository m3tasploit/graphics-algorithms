function setup() {
  createCanvas(640, 480);
  background(200);
}
function draw() {
  translate(width / 2, height / 2);
  scale(1, -1);
  stroke("purple");
  strokeWeight(5);
  midpointCircle(0, 0, 100);
}
function midpointCircle(xc, yc, r) {
  let x = 0,
    y = r;
  point(xc, yc);
  point(x + xc, y + yc);
  let p = 1 - r;
  while (x < y) {
    if (p < 0) {
      x++;
      p = p + 2 * x + 1;
    } else {
      x++;
      y--;
      p = p + 2 * x + 1 - 2 * y;
    }
    point(x + xc, y + yc);
    point(-x + xc, y + yc);
    point(-x + xc, -y + yc);
    point(x + xc, -y + yc);
    if (x != y) {
      point(y + xc, x + yc);
      point(-y + xc, x + yc);
      point(y + xc, -x + yc);
      point(-y + xc, -x + yc);
    }
  }
}
