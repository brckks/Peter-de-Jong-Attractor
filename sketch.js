
var a=1.4, b=1.56, c=1.4, d=-6.56;
//var a=1.6, b=0.8, c=1.9, d=8.6;
var x=1, y=1;

function setup(){
	createCanvas(500, 500);
	// fade the background by giving it a low opacity

	aSlider = createSlider(-2,3,a,0.01);
	bSlider = createSlider(-2,3,b,0.01);
	cSlider = createSlider(-2,3,c,0.01);
	dSlider = createSlider(-2,3,d,0.01);

	var myButton = createButton("Redraw");
	myButton.mousePressed(function() {
		a = aSlider.value();
		b = bSlider.value();
		c = cSlider.value();
		d = dSlider.value();
		background(255);
	});

	
	//Red Green Blue Alfa(alfa is for 3D apperance)
	stroke(220, 40, 95, 20);

}

function draw(){

	for(var i=0;i<1000;i++){

	var oldX = x;
	var oldY = y;
	x = sin(a * oldY) - cos(b * oldX);
	y = sin(c * oldX) - cos(d * oldY);
	
	var scaledX = map(x, -2, 2, 0, width);
	var scaledY = map(y, -2, 2, 0, height);

	point(scaledX, scaledY);
	}

}