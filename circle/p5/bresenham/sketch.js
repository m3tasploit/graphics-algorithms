function setup() {
  createCanvas(640, 480);
  background(200);
}
function draw() {
  translate(width / 2, height / 2);
  scale(1, -1);
  stroke("green");
  strokeWeight(5);
  bresenhamCircle(0, 0, 100);
}
function bresenhamCircle(xc, yc, r) {
  let x = 0,
    y = r;
  point(xc, yc);
  point(x + xc, y + yc);
  let p = 3 - 2 * r;
  while (x < y) {
    x++;
    if (p < 0) {
      p = p + 4 * x + 6;
    } else {
      y--;
      p = p + 4 * (x - y) + 10;
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
