var xj=100, yj=100, z=0, dz=1, pulo=false //dz é a velocidade cim que o quadrado se move
var disparo = false;
var yp = 0								//variavel para coordendas do pulo
var xd, yd 								// coordendas do disparo
var contFrames = 0 						//taxa de atualização da tela

function setup() {  					//setup é para executar somente uma vez
	createCanvas(500, 500);
	xj = 30;
	xd = xj;  
	yj = 470;
	yd = yj;
	frameRate(30);
}

function draw() {						//Draw é para executar sempre
 
  ellipse(xj,yj,55,55)
  rect (180, 300, 55, 55)
	if(keyIsDown(LEFT_ARROW)){
 		if(xj>30){
      	xj -= 5;
        }
	}
	if(keyIsDown(RIGHT_ARROW)){
    	if(xj<470){
		xj += 5;
    	}
	}
	
  clear();								//"clear" mantem a tela limpa
  ellipse(xj, yj+yp,55,55)				//yp é a variavel que muda de acordo com o pulo
  rect (180,z , 55, 55)
  	z= z+dz
  
  	if(z > height) {
   		z = random(-500, -10)
  	}
  	if(keyIsDown(UP_ARROW) && (!pulo)){
	pulo = true;
    contFrames = 0;
  	
	}									//movimentação do pulo quando tiver ativo
	if(pulo){
    contFrames++; 
		yp = 0.5*(contFrames)*(contFrames - 30);
    }
	if (yp > 0) {
			pulo = false;
			yp = 0; 		
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
    xd = xd +10;
    // se o disparo sumir na tela 
    if (xd > width) {
      // habilida a ocorrência de um novo disparo 
      disparo = false; 
    }
  }
  if (disparo) {
    // desenha a elipse / disparo 
    ellipse(xd,yd,20,8);
    
  }

}										//chaves do function draw
