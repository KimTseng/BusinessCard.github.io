// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + bleedPadW;
var bleedYmin = 0;
var bleedYmax = cardH + bleedPadH;

// dims for centered card area
var cardXmin = 0 + bleedPadW * 0.5;
var cardXmax = cardW;
var cardYmin = 0 + (bleedPadH * 0.5);
var cardYmax = cardH;

// dims for centered padding area
var padXmin = 0 + bleedPadW;
var padXmax = cardW - bleedPadW;
var padYmin = 0 + bleedPadH;
var padYmax = cardH - bleedPadH;


function setup() {
	createCanvas(cardW+bleedPadW, cardH+bleedPadH); // width and height of my canvas
	stroke("purple");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke("pink");
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	stroke("red");
	rect(padXmin, padYmin, padXmax, padYmax); // centered
	background(200, 0, 0, 20);
	noStroke();

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/10);
	fill(55);
	textSize(fontSizeA);
	text("ETP-BIB2C", padXmin+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/14); // maintain aspect ratio with text too
	fill(75);
	textSize(fontSizeNorm);
	text("Kim Tseng", padXmin+bleedPadW, padYmax*0.55);
	fill(50, 90, 0, 200); // note color values - try to improve with cymk-style colors
	text("Student of ETP", padXmin+bleedPadW, (padYmax*0.55)+fontSizeA);
	fill(0, 100, 150, 200); // note 4th value is alpha (transparency)
	text("Phone: 0973916209", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*2));
	fill(100, 30, 150, 200);
	text("E-mail: kimtseng1020@gmail.com", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*3));
	fill(100, 15, 0, 200);
	text("Website: http://www.uscetp.usc.edu.tw", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*4));
	
// Set colors
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);

  // A design for a simple flower
  translate(520, 180);
  noStroke();
  for (var i = 0; i < 100; i ++) {
    rect(0, 0, 25, 90);
    rotate(PI/7);
  }
  ellipseMode(RADIUS); // Set ellipseMode to RADIUS
fill(255); // Set fill to white
ellipse(2, 2, 40, 40); // Draw white ellipse using RADIUS mode

ellipseMode(CENTER); // Set ellipseMode to CENTER
fill(100); // Set fill to gray
ellipse(2, 2, 40, 40); // Draw gray ellipse using CENTER mode





}