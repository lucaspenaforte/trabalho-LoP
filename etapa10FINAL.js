var xj=100, yj=100,dz=1;    //dz é a velocidade cim que o quadrado se move
var disparo = false;
var xd, yd;                // coordendas do disparo
var contFrames = 0;            //taxa de atualização da tela
var vidas = 3, pontos = 0, nivel = 1;
var colisao = false, colisaodisparo = false;
var raiojogador = 25;          //raio da elipse do jogador
var raioinimigo = 30;          //raio da elipse do inimigo
var raiodisparo1 = 10, raiodisparo2 = 4;  //raio 1 e 2 da elipse do disparo
var xinimigo= [], yinimigo= [];
var vtam = [];
var qt = 5;
var tamArea = 500;
var limitepontos=0;
var tela = 1;
var anima; 
var imgsAndando = [];
var meteor; 
var meteoro = [];
var contFrame = 0; 
var img
var img2

var disparos;

function preload() {
  img = loadImage("espaco.jpg")
  img2 = loadImage("espaco2.png")
  disparos =loadImage("tiro.png")
  for (i = 0; i < 9; i++) {
    imgsAndando[i] = loadImage("nave.png");
    meteoro[i] = loadImage("meteoro.png")
  }
  
}

function setup() {            //setup é para executar somente uma vez
  createCanvas(tamArea, tamArea);
  xj = 30;
  xd = xj;                
  yj = 400;
  yd = yj;
  frameRate(30);
  for ( i = 0; i < 100; i++) { 
      xinimigo[i] = random(tamArea-5,10); 
      yinimigo[i] = random(tamArea,tamArea);
    }
}

function draw() {            //Draw é para executar sempre
if ( tela == 1) {
  background(img);
  textSize(34); 
  fill(500,50,10);
   text("JOGO" ,190 , 50)
   text("para comerçar"+"\n"+
       "pressione ENTER", 130, 250);
  if (keyIsDown(ENTER) ) {
           tela = 2;  
  } 
}
  
if ( tela == 2) {
   
    textSize(32); 
    fill(135,206,235);
    text("Tela 2", 50, 160);
    background(img2)
  if(keyIsDown(LEFT_ARROW)){
     if(xj>10){
          xj -= 8;
     }
  }
  if(keyIsDown(RIGHT_ARROW)){
       if(xj<430){
      xj += 8;
      }
  }
clear();                //"clear" mantem a tela limpa
background(img2)
  for ( i = 0; i < qt; i++) {       //para controlar o quantidade de inimigos
    
    meteor = meteoro[contFrame]
    anima = imgsAndando[contFrame];
    image( anima, xj, yj);
    contFrame++;
      if ( contFrame > 1 ) {
         contFrame = 0;  
      }
         image( meteor, xinimigo[i], yinimigo[i]);
         yinimigo[i] = yinimigo[i]+dz
         contFrame++;
      if ( contFrame > 1 ) {
         contFrame = 0;  
      }    
      if(yinimigo[i] > height) {
         yinimigo[i] = random(-200, -10)
      }
 
      if (disparo) {
         image(disparos,xd,yd)    //imagem do disparo       
      }
      if(yinimigo[i] ==0){
         vidas--
      }
   
 //--------------------------textos na tela-----------------------------
 
  textSize(20);
  fill(135,206,235);
  text("Vidas: "+vidas, 10, 20);
  text("Pontos: "+pontos, 350, 20);
  text( "nivel: "+ nivel, 170, 20)
  
  //-----------------------colisão entre os objetos---------------------
  
   if ( dist(xj,yj,xinimigo[i],yinimigo[i]) < raioinimigo+raiojogador ) {
     if ( colisao == false) { 
       vidas= vidas-1;      
       colisao = true;
       yinimigo[i]= random(-100,-5)
     }
 }
 else {
    colisao = false;  
 }
 //------------------------colisão entre disparo e inimigo---------------
  if ( dist(xd,yd,xinimigo[i],yinimigo[i]) < raioinimigo+10+raiodisparo1 ) {
    if(colisaodisparo == false){
      colisaodisparo = true
       yinimigo[i] = random(-100, -10)
       disparo = false
        colisaodisparo = false
       pontos=pontos+5
           limitepontos=limitepontos+5
       yd=yj
    }
  }
  else{
    colisaodisparo = false
  }
  
  
} // for da quantidade de inimigos
   //-------------------------disparo----------------------------
  if (keyIsDown(32) && (! disparo) ){ 
    disparo = true; 
    xd = xj+45;
    yd = yj;     
  }
  // movimentação do disparo 
  // se o disparo estiver ativo 
  if (disparo) {
    // movimenta o disparo / tiro 
    yd = yd -10;
    // se o disparo sumir na tela 
    if (yd < 0) {
      // habilida a ocorrência de um novo disparo 
      disparo = false; 
    }
  }
  //-----------------------subir de nivel---------------------
  if(limitepontos==100){
  nivel++
 limitepontos=0
 qt+=2
  }
  if (vidas == 0 ) {
        tela = 3; 
    }
}
    if ( tela == 3) {
    background(img);
    textSize(32); 
    fill(135,206,235);
    text("FIM DE JOGO", 130, 250);
    if (keyIsDown(32) ) {
       tela = 1;
       
    } 
  }

}                    //chaves do function draw
