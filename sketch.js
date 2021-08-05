var hr,mn,sc
var hrangle,mnangle,scangle
function setup() {
  createCanvas(800,400);
 angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  scangle=map(sc,0,60,0,360)
  mnangle=map(mn,0,60,0,360)
  hrangle=map(hr%12,0,12,0,360)

  //drawing seconds hand 
  push();
   rotate(scangle);
   //rotate the hand based on angle calculated 
   stroke(255,0,0);
    strokeWeight(10);
     line(0,0,100,0);
     arc(0,0,300,300,0,scAngle);
      pop()
  drawSprites();



   //drawing min hand 
   push();
   rotate(scangle);
   //rotate the hand based on angle calculated 
   stroke(0,255,0);
    strokeWeight(10);
     line(0,0,10,180);
     arc(0,0,280,280,0,mnAngle);
      pop()
  drawSprites();


   //drawing hour hand 
   push();
   rotate(scangle);
   //rotate the hand based on angle calculated 
   stroke(0,0,255);
    strokeWeight(10);
     line(0,0,80,400);
     arc(0,0,260,260,0,hrAngle);
      pop()
  drawSprites();
}
