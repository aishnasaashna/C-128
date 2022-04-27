song="";
leftwristX=0;
leftwristY=0;
rightwristY=0;
rightwristX=0;

function preload(){
song=loadSound("music.mp3");
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
 
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function draw(){
image(video,0,0,600,500);
}
function play()
{
song.play();
song.setVolume(1);
song.rate(1);

}

function gotPoses(results){
if(results.lenght>0){
    console.log(results);
    leftwristX=results[0].pose.leftWrist.x;
    leftwristY=results[0].pose.leftWrist.y;
    rightwristX=results[0].pose.rightWrist.x;
    rightwristY=results[0].pose.rightWrist.y;
}

}