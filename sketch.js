function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(1);
	stroke(170);
}

function draw() {
	background(95, 222,199);

	//Neck
	fill(233,96,6);
	rectMode(CENTER);
	rect(250, 270, 30, 90);

	//Wheel
	fill(233,96,6);
	rect(250, 450, 30, 50);
	fill(233,96,6);
	ellipse(250, 480, 30, 30);
	ellipse(200, 480, 30, 30);
	ellipse(300, 480, 30, 30);
	fill(13,153,124);
	rect(250, 470, 150, 20,5);

  //arms
	strokeWeight(6);
	stroke(178,0,0);
	line(170, 320, 100, 300);
	line(330, 320, 400, 300);
	line(100, 300, 80, 280);
	line(400, 300, 420, 320);
	line(100, 300, 80, 320);
	line(400, 300, 420, 280);
	noStroke();
	fill(11,80,76);
	ellipse(170, 320, 20, 20);
	ellipse(330, 320, 20, 20);
	ellipse(100, 300, 20, 20);
	ellipse(400, 300, 20, 20);


	//Body
	fill(178,0,0);
	rectMode(CENTER);
	rect(250, 370, 150, 130, 5);
	fill(13,153,124);
	ellipse(200,340,15,15);
	ellipse(250,340,15,15);
	ellipse(300,340,15,15);
	fill(233,96,6);
	rectMode(CORNER);
	rect(200, 360, 100, 60, 5);

	//Head
	strokeWeight(2);
	stroke(178,0,0);
  line(180, 180, 225, 200);
	line(280, 180, 250, 200);
	noStroke();
	ellipse(180,180,10,10);
	ellipse(280,180,10,10);
	fill(13,153,124);
	ellipse(250, 240, 150, 90);


	//eyes
	fill(178,0,0);
	ellipse(220, 230, 30, 30);
	ellipse(280, 230, 25, 25);
	fill(0,0,0);
	ellipse(220, 230, 15, 15);
	ellipse(280, 230, 10, 10);
	//laser
	strokeWeight(20);
	stroke(248,255,7,70);
	line(220,230, mouseX, mouseY);
	line(280,230, mouseX, mouseY);
	noStroke();

	//mouth
	fill(11,80,76);
	rectMode(CENTER);
	arc(255, 257, 150, 80,  TWO_PI, PI);

	//hear
	fill(233,96,6);
	rect(172, 240, 10, 20);
	fill(13,153,124);
	rect(162, 240, 15, 30,5);

	fill(233,96,6);
	rect(328, 240, 10, 20);
	fill(13,153,124);
	rect(338, 240, 15, 30, 5);

}
