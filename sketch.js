let negEdge = -100;
let posEdge = 100;
let count = 0;

function setup() {
	createCanvas(500,500, WEBGL);
}

function draw() {
	background(0);
	ambientLight(255,255,255);

	rotateY(count);
	count = count + (0.003);

	stroke(255);
	drawEdges();
}

function drawEdges() {
	// draw lines here 

}