/***************S A F E  S P A C E ***********************
by Dana Capistrano

*******************************************************/

// Array of images
var images = [];

//Counter 
let PositiveScore = 0;
let NegativeScore = 0;

// variable that is a function 
var drawFunction;

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
    thumbsupimg = loadImage('assets/thumbsup.png');
    thumbsdownimg = loadImage('assets/thumbsdown.png');
    //continue image
    continueimg = loadImage('assets/continue.png');
    playagainimg = loadImage('assets/playagain.png');
    //BUTTONS
    var thumbsupButton;
    var thumbsdownButton;
    var continueButton;
    var playagainButton;
    //fonts
    headlineFont = loadFont('Fonts/GrandSlang Roman.ttf');
    bodyFont = loadFont('Fonts/Technique Sans.otf');
}

// Center drawing, drawFunction will be one for default
function setup() {
    createCanvas(1280, 720);
    makecontinueButton();
    makeThumbsUpButton();
    makeThumbsDownButton();
    makePlayAgainButton();

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
    image(images[1], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}
review2 = function() {
    image(images[2], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}

review3 = function() {
    image(images[3], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}

review4 = function() {
    image(images[4], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}

review5 = function() {
    image(images[7], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}

review6 = function() {
    image(images[8], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}

review7 = function() {
    image(images[9], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}

review8 = function() {
    image(images[10], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}

review9 = function() {
    image(images[13], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}

review10 = function() {
    image(images[14], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}

review11 = function() {
    image(images[15], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}

review12 = function() {
    image(images[16], 0, 0);
    text("Positive Score: " + PositiveScore, 10, 20);
    text("Negative Score" + NegativeScore, 10, 50);
    thumbsupButton.draw();
    thumbsdownButton.draw();
}

/*************ENDINGS******************/

//Good Engings
GoodEnding1 = function() {
    image(images[5], 0, 0);
    continueButton.draw();
}

GoodEnding2 = function() {
    image(images[11], 0, 0);
    continueButton.draw();
}

GoodEnding3 = function() {
    image(images[17], 0, 0);
    playagainButton.draw();
}

//Bad Endings
BadEnding1 = function() {
    image(images[6], 0, 0);
    continueButton.draw();
}

BadEnding2 = function() {
    image(images[12], 0, 0);
    continueButton.draw();
}

BadEnding3 = function() {
    image(images[18], 0, 0);
    playagainButton.draw();
}

/************SPLASH + INTROS ********************/
//Splash Page
drawSplash = function() {
    image(images[0], 0, 0);
    continueButton.draw();
    //title
    fill ('#D4E400');
    textSize (150);
    textFont (headlineFont);
    text ('SafeSpace', 280,height/2 +50);
    //description
    fill (255);
    textSize (20);
    textFont (bodyFont);
    text ('Safe Space is the latest technology in Rest and Relaxation. With Safe Space, you can rest and get away from the hectic world anywhere. In your stress-inducing household, your fast-paced work environment, the overly crowded cafe, and more.' ,22,30,620, 260);
    text ('Safe Space is easy to use and affordable. You will be placed in a safe capsule where you can meditate, breathe, nap, and more. The world is your oyster!', 820, 570, 423, 205);
    fill (214,208,238,0);
}

//Instruction Page
drawInstructions = function() {
    image(images[19], 0, 0);
    continueButton.draw();
}

/**************** Buttons ***********************/
function makecontinueButton() {
    continueButton = new Clickable;
    continueButton.setImage(continueimg);
    continueButton.color = "#00000000";
    continueButton.width = continueimg.width;
    continueButton.height = continueimg.height;
    continueButton.stroke = "#00000000"
    continueButton.locate(1144, 655);
    //callbackfunction for this button
    continueButton.onPress = continueButtonPressed;
}

//moves the page to the next one on various pages
continueButtonPressed = function() {
    if (drawFunction === drawSplash) {
        drawFunction = drawInstructions;
    } else if (drawFunction === drawInstructions) {
        drawFunction = review1;
    } else if (drawFunction === GoodEnding1) {
        drawFunction = review5;
    } else if (drawFunction === BadEnding1) {
        drawFunction = review5;
    } else if (drawFunction === GoodEnding2) {
        drawFunction = review9;
    } else if (drawFunction === BadEnding2) {
        drawFunction = review9;
    }
}

function makeThumbsUpButton() {
    thumbsupButton = new Clickable;
    thumbsupButton.setImage(thumbsupimg);
    thumbsupButton.color = "#00000000";
    thumbsupButton.stroke = "#00000000"
    thumbsupButton.width = thumbsupimg.width;
    thumbsupButton.height = thumbsupimg.height;
    thumbsupButton.locate(313, 322);
    //callback function for this button
    thumbsupButton.onPress = thumbsupPressed;
}

thumbsupPressed = function() {
    //Round 1 of Reviews
    if (drawFunction === review1) {
        drawFunction = review2;
        PositiveScore++;
        if (PositiveScore === 2) {
            drawFunction = GoodEnding1;
        }
    } else if (drawFunction === review2) {
        drawFunction = review3;
        NegativeScore++
        if (NegativeScore === 2) {
            drawFunction = BadEnding1;
        }
    } else if (drawFunction === review3) {
        drawFunction = review4;
        PositiveScore++;
        if (PositiveScore === 2) {
            drawFunction = GoodEnding1;
        }
    } else if (drawFunction === review4) {
        drawFunction = review5;
        NegativeScore++
        if (NegativeScore === 2) {
            drawFunction = BadEnding1;
        } // Round 2 of Reviews
    } else if (drawFunction === review5) {
        drawFunction = review6;
        NegativeScore++;
        if (NegativeScore === 4) {
            drawFunction = BadEnding2;
        }
    } else if (drawFunction === review6) {
        PositiveScore++;
        drawFunction = review7;
        if (PositiveScore === 4) {
            drawFunction = GoodEnding2;
        }
    } else if (drawFunction === review7) {
        PositiveScore++;
        drawFunction = review8;
        if (PositiveScore === 4) {
            drawFunction = GoodEnding2;
        }
    } else if (drawFunction === review8) {
        drawFunction = review9;
        NegativeScore++;
        if (NegativeScore === 4) {
            drawFunction = BadEnding2;
        }
        //Round 3 of Reviews
    } else if (drawFunction === review9) {
        drawFunction = review10;
        NegativeScore++;
        if (NegativeScore === 6) {
            drawFunction = BadEnding3;
        }

    } else if (drawFunction === review10) {
        PositiveScore++;
        drawFunction = review11;
        if (PositiveScore === 6) {
            drawFunction = GoodEnding3;
        }
    } else if (drawFunction === review11) {
        PositiveScore++;
        drawFunction = review12;
        if (PositiveScore === 6) {
            drawFunction = GoodEnding3;
        }
    } else if (drawFunction === review12) {
        NegativeScore++;
        drawFunction = GoodEnding3;
        if (NegativeScore === 6) {
            drawFunction = BadEnding3;
        }
    }
}

function makeThumbsDownButton() {
    thumbsdownButton = new Clickable;
    thumbsdownButton.setImage(thumbsdownimg);
    thumbsdownButton.color = "#00000000";
    thumbsdownButton.stroke = "#00000000"
    thumbsdownButton.width = thumbsdownimg.width;
    thumbsdownButton.height = thumbsdownimg.height;
    thumbsdownButton.locate(155, 322);
    //callback function for this button
    thumbsdownButton.onPress = thumbsdownPressed;
}

thumbsdownPressed = function() {
    //Round 1 of Reviews
    if (drawFunction === review1) {
        NegativeScore++;
        drawFunction = review2;
        if (NegativeScore === 2) {
            drawFunction = BadEnding1;
        }
    } else if (drawFunction === review2) {
        drawFunction = review3;
        PositiveScore++;
        if (PositiveScore === 2) {
            drawFunction = GoodEnding1;
        }
    } else if (drawFunction === review3) {
        NegativeScore++;
        drawFunction = review4;
        if (NegativeScore === 2) {
            drawFunction = BadEnding1;
        }
    } else if (drawFunction === review4) {
        drawFunction = review5;
        PositiveScore++;
        if (PositiveScore === 2) {
            drawFunction = GoodEnding1;
        }
        //Round 2 of Reviews
    } else if (drawFunction === review5) {
        drawFunction = review6;
        PositiveScore++;
        if (PositiveScore === 4) {
            drawFunction = GoodEnding1;
        }
    } else if (drawFunction === review6) {
        NegativeScore++;
        drawFunction = review7;
        if (NegativeScore === 4) {
            drawFunction = BadEnding2;
        }
    } else if (drawFunction === review7) {
        NegativeScore++;
        drawFunction = review8;
        if (NegativeScore === 4) {
            drawFunction = BadEnding2;
        }
    } else if (drawFunction === review8) {
        drawFunction = review9;
        PositiveScore++;
        if (PositiveScore === 4) {
            drawFunction = GoodEnding2;
        }
        //Round 3 of Reviews
    } else if (drawFunction === review9) {
        drawFunction = review10;
        PositiveScore++;
        if (PositiveScore === 6) {
            drawFunction = GoodEnding3;
        }
    } else if (drawFunction === review10) {
        NegativeScore++;
        drawFunction = review11;
        if (NegativeScore === 6) {
            drawFunction = BadEnding3;
        }
    } else if (drawFunction === review11) {
        NegativeScore++;
        drawFunction = review12;
        if (NegativeScore === 6) {
            drawFunction = BadEnding3;
        }
    } else if (drawFunction === review12) {
        drawFunction = BadEnding3;
        PositiveScore++;
        if (PositiveScore === 6) {
            drawFunction = GoodEnding3;
        }
    }
}

function makePlayAgainButton() {
    playagainButton = new Clickable;
    playagainButton.setImage(playagainimg);
    playagainButton.color = "#00000000";
    playagainButton.stroke = "#00000000"
    playagainButton.width = playagainimg.width;
    playagainButton.height = playagainimg.height;
    playagainButton.locate(990, 650);
    //callback function for this button
    playagainButton.onPress = playagainPressed;
}

playagainPressed = function() {
    if (drawFunction === GoodEnding3) {
        drawFunction = drawSplash;
    } else if (drawFunction === BadEnding3) {
        drawFunction = drawSplash;
    }
}