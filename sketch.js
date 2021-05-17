/***************S A F E  S P A C E ***********************
by Dana Capistrano

*******************************************************/

// Array of images
var images = [];
var thumbsup;
var thumbsdown;

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// fonts
let headlineFont;
let bodyFont;

// load all images into an array
function preload() {
    images[0] = loadImage('assets/CAPSULE.gif');
    images[1] = loadImage('assets/Review1.png');
    images[2] = loadImage('assets/Review10.png');
    images[3] = loadImage('assets/Review11.png');
    images[4] = loadImage('assets/Review12.png');
    images[5] = loadImage('assets/GoodReview1.png');
    images[6] = loadImage('assets/BadReview1.png');
    images[7] = loadImage('assets/Review2.png');
    images[8] = loadImage('assets/Review7.png');
    images[9] = loadImage('assets/Review8.png');
    images[10] = loadImage('assets/Review9.png');
    images[11] = loadImage('assets/GoodReview2.png');
    images[12] = loadImage('assets/BadReview2.png');
    images[13] = loadImage('assets/Review3.png');
    images[14] = loadImage('assets/Review4.png');
    images[15] = loadImage('assets/Review5.png');
    images[16] = loadImage('assets/Review6.png');
    images[17] = loadImage('assets/GoodReview3.png');
    images[18] = loadImage('assets/BadReview3.png');
    images[19] = loadImage('assets/intructions.png');
    //thumbs for rating
    thumbsup = loadImage('assets/thumbsup.png');
    thumbsdown = loadImage('assets/thumbsdown.png');
    //continue Button
    continueimg = loadImage('assets/continue.png');
    //BUTTONS
    var thumbsupButton;
    var thumbsdownButton;
    var continueButton1;
    //fonts
    headlineFont = loadFont('Fonts/GrandSlang Roman.ttf');
    bodyFont = loadFont('Fonts/Technique Sans.otf');
}

// Center drawing, drawFunction will be one for default
function setup() {
    createCanvas(1280, 720);

    // Center our drawing objects
    imageMode(CENTER);
    textAlign(CENTER);
    textSize(24);

    makecontinueButton1();

    // set to one for startup
    drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
    // will call your state machine function
    drawFunction();
}

//Using State Machine to cycle through pages:

//The Reviews pages
review1 = function() {
    image(images[1], 640, 360);
}
review2 = function() {
    image(images[2], 640, 360);
}

review3 = function() {
    image(images[3], 640, 360)
}

review4 = function() {
    image(images[4], 640, 360);
}

review5 = function() {
    image(images[7], 640, 360);
}

review6 = function() {
    image(images[8], 640, 360);
}

review7 = function() {
    image(images[9], 640, 360);
}

review8 = function() {
    image(images[10], 640, 360);
}

review9 = function() {
    image(images[13], 640, 360);
}

review10 = function() {
    image(images[14], 640, 360);
}

review11 = function() {
    image(images[15], 640, 360);
}

review12 = function() {
    image(images[16], 640, 360);
}

/*************ENDINGS******************/

//Good Engings
GoodEnding1 = function() {
    image(images[5], 640, 360);
}

GoodEnding2 = function() {
    image(images[11], 640, 360);
}

GoodEnding3 = function() {
    image(images[17], 640, 360);
}

//Bad Endings
BadEnding1 = function() {
    image(images[6], 640, 360);
}

BadEnding1 = function() {
    image(images[12], 640, 360);
}

BadEnding1 = function() {
    image(images[18], 640, 360);
}

/************SPLASH + INTROS ********************/
//Splash Page
drawSplash = function() {
    image(images[0], 640, 360);
    continueButton1.draw();
}

//Instruction Page
drawInstructions = function() {
    image(images[19], 640, 360);
}

/**************** Buttons ***********************/
function makecontinueButton1() {
    continueButton1 = new Clickable;
    continueButton1.setImage(continueimg);
    continueButton1.color = "#00000000";
    continueButton1.width = continueimg.width;
    continueButton1.height = continueimg.height;
    continueButton1.locate(1144, 655);
    //callbackfunction for this button
    // continueButton1.onPress = continueButton1Pressed;
    // continueButton1.onHover = continueButton1Hover;
    // continueButton1.onOutside = continueButton1Outside
}

// continueButton1Pressed = function () {
// 	if (drawFunction === drawSplash) {
// 		drawFunction = drawInstructions;
// 	}
// }


function mousePressed() {
    // only change state if we are in splash screen
    if (drawFunction === drawSplash) {
        drawFunction = drawInstructions;
    } if (drawFunction === drawInstructions) {
    	drawInstructions = review1;
    }if (drawFunction === review1){
    	drawFunction = review2;
    }
}