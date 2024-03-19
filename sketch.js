let negEdge = -100;
let posEdge = 100;
let count = 0;
let shape1;
let sphere1

function setup() {
	createCanvas(500,500, WEBGL);
  shape1 = new Shape(random(negEdge,posEdge), random(negEdge,posEdge), random(negEdge,posEdge));
  sphere1 = new Sphere(random(negEdge,posEdge), random(negEdge,posEdge), random(negEdge,posEdge));
}

function draw() {
	background(0);
	ambientLight(255,255,255);

	rotateY(count);
	count = count + (0.003);

	let xVal = random(negEdge,posEdge);
	let yVal = random(negEdge,posEdge);
	let zVal = random(negEdge,posEdge);

	let red = map(xVal, -100, 100, 0, 255);
	let green = map(yVal, -100, 100, 0, 255);
	let blue = map(zVal, -100, 100, 0, 255);
	ambientMaterial(red, green, blue);

	push();
		translate(xVal, yVal, zVal);
		box(10);
	pop();

	stroke(255);
	drawEdges();
	noStroke();

  shape1.update();
  shape1.display();
  shape1.checkEdges(); 

  sphere1.update();
  sphere1.display();
  sphere1.checkEdges(); 
}

function drawEdges() {
  stroke(random(255), random(255), random(255));  

	line(negEdge, posEdge, negEdge, posEdge, posEdge, negEdge);
	line(negEdge, negEdge, negEdge, posEdge, negEdge, negEdge);
	line(negEdge, posEdge, negEdge, negEdge, negEdge, negEdge);
	line(posEdge, posEdge, negEdge, posEdge, negEdge, negEdge);

	line(negEdge, posEdge, posEdge, posEdge, posEdge, posEdge);
	line(negEdge, negEdge, posEdge, posEdge, negEdge, posEdge);
	line(negEdge, posEdge, posEdge, negEdge, negEdge, posEdge);
	line(posEdge, posEdge, posEdge, posEdge, negEdge, posEdge);

	line(negEdge, posEdge, negEdge, negEdge, posEdge, posEdge);
	line(posEdge, posEdge, negEdge, posEdge, posEdge, posEdge);
	line(negEdge, negEdge, negEdge, negEdge, negEdge, posEdge);
	line(posEdge, negEdge, negEdge, posEdge, negEdge, posEdge);
}