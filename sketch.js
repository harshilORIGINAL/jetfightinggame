var Helicopter,HelicopterImage,EnemyImage,Background;
function preload(){
HelicopterImage=loadImage("sprites/Player.png");
EnemyImage=loadImage("sprites/Enemy.png");
Background=loadImage("sprites/Background.jpg");
}
function setup(){
var canvas = createCanvas(displayWidth/2+260,displayHeight/2+50);
 Helicopter=createSprite(70,displayHeight/4,50,50);
 Helicopter.addImage("HelicopterImage",HelicopterImage);
 Helicopter.scale=0.05;
 BulletGroup=new Group();
 EnemyGroup=new Group();
    }


function draw(){
    background(Background);
    drawSprites();
    if(keyDown("DOWN_ARROW")){
    Helicopter.y=Helicopter.y+10;
    }
    if(keyDown("UP_ARROW")){
    Helicopter.y=Helicopter.y-10;
    }
    if(keyDown("SPACE")){
            CreateBullet();}

SpawnEnemies();
}
function CreateBullet(){
var Bullet=createSprite(50,50,10,2);
Bullet.y=Helicopter.y;
Bullet.velocityX=10;
BulletGroup.add(Bullet);
}
function SpawnEnemies(){
    if(World.frameCount%20===0){
var Enemy=createSprite(900,200,50,50);
Enemy.addImage("EnemyImage",EnemyImage);
Enemy.scale=0.09;
Enemy.y=Math.round(random(10,displayHeight/2-10));
Enemy.velocityX=-10;
EnemyGroup.add(Enemy);
if(BulletGroup.isTouching(EnemyGroup)){
    Enemy.destroyEach();
                }
}
}