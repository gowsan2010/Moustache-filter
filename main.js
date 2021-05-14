function preload(){
}
let moustache;
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center(); 
    moustache = loadImage("filter.png");  
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide(); 
}
function draw(){
    image(video, 0, 0, 300, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    image(moustache, nose_x-30, nose_y, 50, 20);
}
function modelLoaded(){
    console.log("ml5.js is loaded");
}
function take_snapshot(){
    save('My moustache filter selfie');
}
var last=0;
var nose_y = 0;
var nose_x = 0;
function gotPoses(results){
    last = results.length-1;
    if(results.length > 0){
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.x);
        nose_x = results[last].pose.nose.x;
        nose_y = results[last].pose.nose.y;

}
}