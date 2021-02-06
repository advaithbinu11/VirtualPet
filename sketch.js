//Create variables here
var Dogsprite, foodS, happyDog,database,dog;
function preload(){
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  Dogsprite=createSprite(250,250,80,80)
  Dogsprite.addImage(dog)
  Dogsprite.scale=0.1
  database=firebase.database()
  foodStock=database.ref('Food')
  foodStock.on(("value",readStock))
}


function draw() { 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodStock-1)
    dogSprite.addImage(happyDog)
  } 
  background(46, 139, 87)
  drawSprites();
  //add styles here
  textSize(12)
  text("Press the up arrow to feed doggo!",200,50)
}
function readFunction(data){
  foodStock=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



