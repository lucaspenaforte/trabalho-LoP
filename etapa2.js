function setup() {
  createCanvas(400, 400);
}
var x=100, y=0;
function draw() {
  
  ellipse(x,y,55,55)
  rect (180, 300, 55, 55)
	if(keyIsDown(LEFT_ARROW)){
 		x -= 5;
	}
	if(keyIsDown(RIGHT_ARROW)){
		x += 5;
	}
	if(keyIsDown(DOWN_ARROW)){
  		y += 5;
	}
	if(keyIsDown(UP_ARROW)){
		y -= 5;
	}
  clear();
  ellipse(x, y,55,55)
  rect (180, 300, 55, 55)
}
