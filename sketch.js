var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10,maze11,maze12,maze13,maze14;
var maze15,maze16,maze17,maze18,maze19,maze20,maze21,maze22,maze23,maze24,maze25,maze26,maze27,maze28;
var maze29,maze30,maze31;
var man, wallGroup;
var virus1,virus2,virus3,virus4;
var virsu1Img;
var wall1,wall2,wall3,wall4;
var man1Img;
var house,houseImg;
var dot1, capsuleImg;
var dot2,dot3,dot4,dot4,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1;
var dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1,dot1;
var dot1,dot1,dot1,dot1,dot1,dot1;
var dotGroup;
var live1,live2,live3, liveImg;
var score=0;



function preload(){
  virus1Img = loadImage("2ndImg.png")
  houseImg = loadImage("house.png")
  man1Img = loadAnimation("man1.png","man2.png","man3.png");
  capsuleImg= loadImage("capsule.png")
  liveImg = loadImage("live.png")
}
function setup(){
  createCanvas(1100,500)
  
  man= createSprite(50,440,10,10)
  man.addAnimation("walking", man1Img)
  man.scale=0.1;
  wallGroup = createGroup();
  dotGroup = createGroup();
  wall1 = createSprite(350,300,100,10)
  wall2 = createSprite(350,350,100,10)
  wall3 = createSprite(300,325,10,50)
  wall4 = createSprite(400,325,10,50)
  wallGroup.add(wall1)
  wallGroup.add(wall2)
  wallGroup.add(wall3)
  wallGroup.add(wall4)

  virus1 = createSprite(325,320,10,10)
  virus1.addImage(virus1Img)
  virus1.scale=0.2;
  
  //corners
  maze1 = createSprite(650,5,1300,10)
  maze2 = createSprite(5,250,10,600)
  maze3 = createSprite(1095,250,10,600)
  maze4 = createSprite(650,495,1300,10)
  //down 
  maze5 = createSprite(166,450,40,10)
  maze6 = createSprite(216,465,10,70)
  maze7 = createSprite(266,450,40,10)
  maze8 = createSprite(316,465,10,70)
  maze9 = createSprite(406,450,120,10)
  maze10 = createSprite(496,465,10,70)
  maze11 = createSprite(636,450,200,10)
  maze12 = createSprite(766,465,10,120)
  maze13 = createSprite(916,450,290,10)
 //upper
  maze14 = createSprite(200,50,300,10)
  maze15 = createSprite(550,50,300,10)
  maze16 = createSprite(900,50,300,10)

  live1 = createSprite(1000,30,10,10)
  live1.addImage(liveImg)
  live1.scale=0.1;
  live2 = createSprite(1030,30,10,10)
  live2.addImage(liveImg)
  live2.scale=0.1;

  live3 = createSprite(1060,30,10,10)
  live3.addImage(liveImg)
  live3.scale=0.1;




  house = createSprite(60,440,30,30)
  house.addImage(houseImg)
  house.scale=0.6
  dot1 = createSprite(50,30,10,10)
  dot1.addImage(capsuleImg)
  dot1.scale=0.1

  dot2 = createSprite(80,30,10,10)
  dot2.addImage(capsuleImg)
  dot2.scale=0.1

  dotGroup.add(dot1)


  

  



}
function draw(){
  background("black")
  drawSprites()
  wallGroup.setColorEach("golden")
  textSize(20)
  stroke("yellow")
  text(" "+score,1050,480)

  if(keyDown("up")){
    man.y= man.y-2;
    man.rotation=360
  }
  if(keyDown("down")){
    man.y= man.y+2;
  }
  if(keyDown("right")){
    man.x= man.x+2;
  }
  if(keyDown("left")){
    man.x= man.x-2;
  }
  if(man.isTouching(dot1)){
    dot1.destroy()
    score+=1;
  }

}