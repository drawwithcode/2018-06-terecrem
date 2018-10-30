var myData;
var myImage;
//variabile vuota mydata

function preload() {
myData=loadJSON('assets/fruits.json');
myImage=loadImage('assets/back.png');
}
//numero palline vuoto
var balls = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
textSize(25)
    textFont('courier');

  frameRate(12)
for(var i=0; i < myData.fruits.length; i++ ){
    var fru = myData.fruits[i];
//creo  variabili x y per mia newball
var x=random(width);
var y=random(height);
// diametro in base ai giorni nello space
var d=fru.name;
var p=fru.price;

//aggiungo 5 nel caso qualcuno avesse zero giorni

//creo nuova variabile ball
var newBall= new Ball(x,y,d,p);

balls.push(newBall);
    console.log(fru);
}
}

function mousePressed() {
  for (var j = 0; j < balls.length; j++) {
    balls[j].click();
      balls[j].disappear()
  }
}

function draw() {
image(myImage,0,0,windowWidth, windowHeight);

	for(var j = 0; j < balls.length; j++) {
		balls[j].move();
		balls[j].display();
		 balls[j].scritta();


	}
}

function Ball(_x, _y, _label,_price) {
	// Properties defined by constructor

	this.x = _x;
	this.y = _y;
  this.label=_label;
  this.price=_price;
	// Hardcoded properties
	this.color = 'orange';
	this.speed = 2;
	this.size= 25;

	this.yDir = 1;
	this.xDir = 1;
	// Methods
	this.move = function() {
		this.x += this.speed * this.xDir;
		this.y += this.speed * this.yDir;

		if (this.y >= height || this.y <= 0) {
			// if 1, set to -1, if -1, set to 1
			this.yDir *= -1;
		}
		if (this.x >= width || this.x <= 0) {
			this.xDir *= -1;
		}
	}

	this.display = function() {
		fill(this.color);
		ellipse(this.x, this.y, this.size,this.size);

				fill('black');
    text(this.label, this.x-30,this.y-20);

	}

{
		fill('black');

		text("/ Click to change color",85,560);

	}

	this.click = function() {
			 var d = dist(mouseX, mouseY, this.x, this.y);
			 if (d < this.size) {
				 this.display = function() {


							fill('#2F2F2F');
					 text(this.price,this.x,this.y);
				 }
			 }
		 }
		 this.disappear= function(){

		 }

	this.scritta = function(){
	 textSize(20);
	 noStroke()
	 fill('lightgray')
	 rect(width/2-12,height/2,300,55)
	 fill('#2F2F2F')
	 text('How much is the fruit?',width/2,height/2+20);

	 fill('#2F2F2F')
	 text('Click to discover',width/2+30,height/2+45);

 }


 }
