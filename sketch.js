function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(204);

	//Neck
	rectMode(CENTER);
	rect(250, 270, 30, 90);

	//Wheel
	rect(250, 450, 30, 50);
	ellipse(250, 480, 30, 30);
	ellipse(200, 480, 30, 30);
	ellipse(300, 480, 30, 30);
	rect(250, 470, 150, 20);

  //arms
	line(170, 320, 100, 300);
	line(330, 320, 400, 300);
	line(100, 300, 80, 280);
	line(400, 300, 420, 320);
	line(100, 300, 80, 320);
	line(400, 300, 420, 280);
	ellipse(170, 320, 20, 20);
	ellipse(330, 320, 20, 20);
	ellipse(100, 300, 20, 20);
	ellipse(400, 300, 20, 20);


	//Body
	rectMode(CENTER);
	rect(250, 370, 150, 130);
	ellipse(200,340,15,15);
	ellipse(250,340,15,15);
	ellipse(300,340,15,15);
	rectMode(CORNER);
	rect(200,360,100,60);

	//Head
  line(180, 180, 225, 200);
	line(280, 180, 250, 200);
	ellipse(250, 240, 150, 90);

	//eyes
	ellipse(220, 230, 20, 20);
	ellipse(280, 230, 20, 20);
	ellipse(220, 230, 5, 5);
	ellipse(280, 230, 5, 5);
	line(220,230, mouseX, mouseY);
	line(280,230, mouseX, mouseY);
	//mouth
	rectMode(CENTER);
	rect(250, 260, 40, 10);

	//hear
	rect(170, 240, 10, 20);
	rect(160, 240, 15, 30);

	rect(330, 240, 10, 20);
	rect(340, 240, 15, 30);

}
