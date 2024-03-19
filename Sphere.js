class Sphere extends Shape {

    constructor(startX, startY, startZ){
		super(startX,startY,startZ);
		this.x = startX;
		this.y = startY;
		this.z = startZ;
		this.r = 10;
		
		this.xVel = random(1,5);
		this.yVel = random(1,5);
		this.zVel = random(1,5);
	}

	update() {
		this.x += random(-this.xVel, this.xVel);
		this.y += random(-this.yVel, this.yVel);
		this.z += random(-this.zVel, this.zVel);
	}

	display() {
		let red = map(this.x, -100, 100, 0, 255);
		let green = map(this.y, -100, 100, 0, 255);
		let blue = map(this.z, -100, 100, 0, 255);
		ambientMaterial(red, green, blue);

		push();
			translate(this.x, this.y, this.z);
			sphere(this.r);
		pop();
	}

    checkEdges() {
        super.checkEdges();
    }

}