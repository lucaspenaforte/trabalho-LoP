var x=100, y=100, z=0, dz=1 //dz é a velocidade que o quadrado se move
var pulo = false 
var colisao = false
var yp = 0								//variavel para coordendas do pulo
var contFrames = 0 						//taxa de atualização da tela
var Xinimigo = 180
var Yinimigo = 400
var TamJogador = 55
var TamInimigo = 55

function setup() {  					//setup é para executar somente uma vez
	createCanvas(500, 500);
	x= 30;
	y= 470;
	frameRate(30);
}

function draw() {						//Draw é para executar sempre
 
  ellipse(x,y,55,55)
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
  ellipse(x, y+yp,TamJogador, TamJogador)				//yp é a variavel que muda de acordo com o pulo
  ellipse (180,Yinimigo , TamInimigo, TamInimigo)
  	//Yinimigo= Yinimigo+dz
  
  	if(Yinimigo > height) {					//para o quadrado aparecer em diferentes tempos
   		Yinimigo = random(-500, -10)
  	}
  	if(keyIsDown(UP_ARROW) && (!pulo)){
	pulo = true;
    contFrames = 0;
  	
	}									//movimentação do pulo quando tiver ativo
	if(pulo){
    contFrames++; 
		yp = 0.5*(contFrames)*(contFrames - 30);		//função do pulo
    
		if (yp > 0) {
			pulo = false;
			yp = 0; 		
    	}
    }
  //------------detectar colisão entre os objetos---------------
  	if(dist(x,y+yp,Xinimigo,Yinimigo) < (TamJogador/2+TamInimigo/2)){

     	if(colisao ==false){
              if(pulo == true){
        		y=Yinimigo-TamInimigo;
        		yp=0
        		pulo = false
      		}
      		pulo = false
    		colisao = true
        }
    }
	else{
    	colisao = false
    }

  	if(colisao==false){
      
        y=y+5
      	if(y>470){
      	y=470
        }
      
    }

  	
}										//chaves do function draw
