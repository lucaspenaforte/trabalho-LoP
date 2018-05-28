var x=100, y=100, z=0, dz=1, pulo=false //dz é a velocidade cim que o quadrado se move
var yp = 0								//variavel para coordendas do pulo
var contFrames = 0 						//taxa de atualização da tela

function setup() {  					//setup é para executar somente uma vez
	createCanvas(500, 500);
	x= 30;
	y= 470;
	frameRate(30);
}

function draw() {						//Draw é para executar sempre
 
  ellipse(x,y,55,55)
  rect (180, 300, 55, 55)
	if(keyIsDown(LEFT_ARROW)){
 		if(x>30){
      	x -= 5;
        }
	}
	if(keyIsDown(RIGHT_ARROW)){
    	if(x<470){
		x += 5;
    	}
	}
	
  clear();								//"clear" mantem a tela limpa
  ellipse(x, y+yp,55,55)				//yp é a variavel que muda de acordo com o pulo
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
}										//chaves do function draw
