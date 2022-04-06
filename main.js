var noseX=0
var noseY=0
var rightwristX=0
var leftwristX=0
var difference=0










function setup(){
    video=createCapture(VIDEO)
    video.size(550,550)
    canvas=createCanvas(550,450)
    canvas.position(560,150)
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotposes)
}
function modelloaded(){
    console.log("modelloaded")
}
function gotposes(results){
if (results.length>0) {
   console.log(results) 
   noseX=results[0].pose.nose.x
noseY=results[0].pose.nose.y
leftwristX=results[0].pose.leftWrist.x
rightwristX=results[0].pose.rightWrist.x
difference=floor(leftwristX-rightwristX)
}
}
function draw(){
    background("white")
    document.getElementById("ss").innerHTML=" the size of the square is"+difference
    fill("white")
    stroke("black")
  textSize(difference)
  text("hi",noseX,noseY)
}
