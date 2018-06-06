var xj=100, yj=100, z=0,dz=1			//dz é a velocidade cim que o quadrado se move
var disparo = false;
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
  ellipse(xj, yj,55,55)		
  rect (180,z , 55, 55)
  	z= z+dz
  
  	if(z > height) {
   		z = random(-500, -10)
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
    // desenha a elipse / disparo 
    ellipse(xd,yd,8,20);
    
  }

}										//chaves do function draw
