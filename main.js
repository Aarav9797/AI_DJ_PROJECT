var m1="";
var m2="";
var left_wrist_x=0;
var left_wrist_y=0;
var right_wrist_x=0;
var right_wrist_y=0;
var score_left_wrist=0;
var score_right_wrist=0;
var SS= music.mp3_m1.isPlaying();
function setup(){
    canvas=createCanvas(600,500)
    canvas.center()
    video=createCapture(600,500)
    video.hide()
    poseNet=ml5.poseNet(video,modelloaded)
 poseNet.on("pose",gotposes);
 m2.isPlaying()
 m1.isPlaying()
}
function draw(){
    image(video,0,0,600,500)
    if(right_wrist_x+right_wrist_y>0.2){
        m2.play()
        fill(255,0,0) 
        circle(right_wrist_x,right_wrist_y,20)
    }
    if(left_wrist_x+left_wrist_y>0.2){
        m1.play()
        fill(255,0,0) 
        circle(left_wrist_x,left_wrist_y,20)
    }

}
function preload(){
    m1=loadSound("music.mp3");
    m2=loadSound("music2.mp3")
}
function modelloaded(){
    console.log("Your model has been loaded")
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
       right_wrist_x=results[0].pose.rightWrist.x;
       right_wrist_y=results[0].pose.rightWrist.y;
       left_wrist_x=results[0].pose.leftWrist.x;
       left_wrist_y=results[0].pose.leftWrist.y;
       score_left_wrist=results[0].pose.keypoints[9].score;
       score_right_wrist=results[0].pose.keypoints[10].score;
    }
    }