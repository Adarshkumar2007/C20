var fixedRect,movingRect;






function preload() {
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
fixedRect = createSprite(200,200,50,80);
fixedRect.shapeColor = "green";
fixedRect.debug = true;
movingRect = createSprite(400,200,80,30);
movingRect.shapeColor = "green";
movingRect.debug = true;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
fixedRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.x - fixedRect < fixedRect/2, + movingRect/2 
    && fixedRect.x - movingRect < fixedRect/2, + movingRect/2
    && movingRect.x - fixedRect < fixedRect/2, + movingRect/2
    && fixedRect.x - movingRect < fixedRect/2, + movingRect/2){
        movingRect.shapeColor = "red";
        fixedRect.shapeColor = "red";
    }

    else{
        fixedRect.shapeColor = "green";
        movingRect.shapeColor = "green";
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
