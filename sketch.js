const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJson = await response.json();
        
    
    //change the data in JSON format
    var dateTime = responseJson.datetime;
    // write code slice the datetime
    var time = dateTime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset

    if (time>=04 && time<= 06)
    {
bg = "sunrise1.png";
    }
    else if (time>=06 && time<=08)
    {
bg = "sunrise2.png"
    }
    else if (time>=23 && time==0)
    {
bg = "sunset10.png"
    }
    else if (time==0 && time<=03)
    {
bg = "sunset11.png"
    }
    else 
    {
        bg = "sunset12.png"
    }
    
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
