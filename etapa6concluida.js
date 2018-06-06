var xj=100, yj=100, xinimigo=180,yinimigo=0,dz=1;		//dz é a velocidade cim que o quadrado se move
var disparo = false;
var xd, yd;								// coordendas do disparo
var contFrames = 0;						//taxa de atualização da tela
var vidas = 3, pontos = 0; 
var colisao = false, colisaodisparo = false;
var raiojogador = 25;					//raio da elipse do jogador
var raioinimigo = 30;					//raio da elipse do inimigo
var raiodisparo1 = 10, raiodisparo2 = 4;	//raio 1 e 2 da elipse do disparo

function setup() {  					//setup é para executar somente uma vez
	createCanvas(500, 500);
	xj = 30;
	xd = xj;  							
	yj = 470;
	yd = yj;
	frameRate(30);
}

function draw() {						//Draw é para executar sempre
 
  ellipse(xj,yj,2*raiojogador,2*raiojogador)
  ellipse (180, 300, 60, 30)
	if(keyIsDown(LEFT_ARROW)){
 		if(xj>30){
      	xj -= 8;
        }
	}
	if(keyIsDown(RIGHT_ARROW)){
    	if(xj<470){
		xj += 8;
    	}
	}
								
	
  clear();								//"clear" mantem a tela limpa
  ellipse (xj, yj,55,55)		
  ellipse (xinimigo,yinimigo , 60, 30)
  	yinimigo= yinimigo+dz
  
  	if(yinimigo > height) {
   		yinimigo = random(-500, -10)
  	}
  	
  //-------------------------disparo----------------------------
  if (keyIsDown(CONTROL) && (! disparo) ){ 
    disparo = true; 
    xd = xj;
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
  if (disparo) {
    ellipse(xd,yd,2*raiodisparo2,2*raiodisparo1); // desenha a elipse / disparo 
    
  }
 //--------------------------textos na tela-----------------------------
  textSize(20);
  fill(135,206,235);
  text("Vidas: "+vidas, 10, 20);
  text("Pontos: "+pontos, 350, 20);;
  
  //-----------------------colisão entre os objetos---------------------
   if ( dist(xj,yj,xinimigo,yinimigo) < raioinimigo+raiojogador ) {
     if ( colisao == false) { 
       vidas=vidas-1;      
       colisao = true; 
     }
 }
 else {
    colisao = false;  
 }
 //------------------------colisão entre disparo e inimigo---------------
  if ( dist(xd,yd,xinimigo,yinimigo) < raioinimigo+raiodisparo2 ) {
	  if(colisaodisparo == false){
    	colisaodisparo = true
       yinimigo = random(-40, -10)
		   disparo = false
	   	 colisaodisparo = false
		   pontos=pontos+5  
       yd=yj
    }
  }
  else{
    colisaodisparo = false
  }
  
}										//chaves do function draw
