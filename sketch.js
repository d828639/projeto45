var bg,bgImg;
var baloon,baloonImg;
var bottonGround;
var topGround;

function preload(){
    bgImg = loadImage("./assets/cityImage.png");
    baloonImg = loadAnimation("./assets/balloon1.png","./assets/balloon2.png","./assets/balloon3.png");


}

function setup(){
    createCanvas(700,560);

    //imagem de fundo
    bg = createSprite(350,280);
    bg.addImage(bgImg);
    bg.scale = 0.4;

    //criando balão
    baloon = createSprite(100,200,20,50);
    baloon.addAnimation("baloon",baloonImg);
    baloon.scale = 0.25;

    //criando as bordas superiores e inferiores
    bottonGround = createSprite(350,560,700,10);
    bottonGround.visible = true;

    topGround = createSprite(350,0,700,10);
    topGround.visible = true;

    rectMode(CENTER)

}

function draw() {
    background("black");

    bg.velocityX = -1;
    
    //fazendo o fundo se repetir
    if(bg.x < 200){
        bg.x = bg.width/2-750;
    }

    //fazendo o balão de ar pular
    if(keyDown("space")){
        baloon.velocityY = -4;
    }

    //gravidade
    baloon.velocityY += 0.5;
  
   

    drawSprites();
}
