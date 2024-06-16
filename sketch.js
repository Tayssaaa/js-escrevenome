// variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2 ;

// variáveis da velocidade da bolinha
let velocidadeXbolinha =6;
let velocidadeYbolinha =6;


//variaveis da raquete
let raqueteComprimento = 10;
let raqueteAltura = 90;
let xRaquete = 5;
let yRaquete =150;

//variaveis do oponente 
let xRaqueteOponente=585;
let yRaqueteOponente =150;
let velocidadeYOponeente;

//placar do jogo 
let meusPontos = 0;
let pontosDoOponente = 0;


let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verficaColisaoBorda();
  mostraRaquete (xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente ();
  incluiPlacar();
  marcaPonto ();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha ,diametro)
}

function movimentaBolinha (){
  xBolinha += velocidadeXbolinha
  yBolinha +=velocidadeYbolinha;
}


function verficaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXbolinha*=-1;
  }
  
  if(yBolinha + raio > height || 
    yBolinha - raio < 0){
    velocidadeYbolinha*=-1;
  }
}

function mostraRaquete (x,y){
 rect(x,y, raqueteComprimento,raqueteAltura)
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10; }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10; }
  }

function verificaColisaoRquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXbolinha *= -1;
  }
}


   function  colisaoMinhaRaqueteBiblioteca(){
 colidiu =    collideRectCircle(xRaquete,yRaquete,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
     if(colidiu){
       velocidadeXbolinha *= -1;}
   }

function  movimentaRaqueteOponente (){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30; yRaqueteOponente += velocidadeYOponente
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle (x,y,raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXbolinha *= -1;
  }
}

function incluiPlacar (){
  stroke(255)
  textAlign(CENTER)
  textSize(16);
  fill(color(255,140,0));
  rect (150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  text(pontosDoOponente, 470, 26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosDoOponente ,470,26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
 pontosDoOponente += 1;     
      }
}


   