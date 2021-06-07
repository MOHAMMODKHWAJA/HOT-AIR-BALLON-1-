var ball;
var ballon,database,position;
var ballon1position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    
    console.log(database);
   
    ballon =createSprite(250,250,10,10);
    ballom.shapeColor = "green";

ball1position=database.ref('ball/position');
ball1position.on("value",readPosition,showError);



}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ballon/position').set({
'x':position.x + x,
'y':position.y + y,
    })

}

function readPosition(data){
position=data.val();
console.log(position.x);
ballon.x=position.x;
ballon.y=position.y;

}


function showError(){
console.log("there is an error");




}

