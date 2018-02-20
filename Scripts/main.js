import { assert, randomFromTo, inInterval, getRelativeCoordinates} from "./utils.js";
import { Pong } from "./pong.js";
import { Bouton } from "./bouton.js";
import { EntreeNumerique } from "./entreenumerique.js";
// Récupération du Canvas
var canvas = document.getElementById("myCanvas");
// Récupération de la hauteur et largeur du canvas
let c_largeur = canvas.width
let c_hauteur = canvas.height
// Contexte du canvas : 2D
let ctx = canvas.getContext("2d");

//Decalage pour centrer les formes
let decalage = 250;
var pause = false;
var var_boucle;

let BR1 = document.getElementById("BR1");
let IR1 = document.getElementById("IR1");

//Fonction Bouton Pause
function pause_game(){
  pause = !pause;
	if (pause) console.log("Le jeu a été mis en pause");
	else console.log("Le jeu a été relancé");
}
let boutonPause = new Bouton("Pause",pause_game);
BR1.appendChild(boutonPause.element);
//Fonction Bouton Reset
function reset(){
	location.reload();
}
let boutonReset = new Bouton("Reset",reset);
BR1.appendChild(boutonReset.element);
//Fontion Bouton Couleur
function couleur_aleatoire(){
	pong._mobiles.forEach(function(element) {
		element.getCouleur().setCouleur(Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)));
	});
}
let boutonCouleur = new Bouton("Couleur",couleur_aleatoire);
BR1.appendChild(boutonCouleur.element);
//Fonction Bouton Vitesse
function vitesse_aleatoire(){
	pong._mobiles.forEach(function(element) {
		element.setVX(randomFromTo(-6,6));
		element.setVY(randomFromTo(-6,6));
	});
}
let boutonVitesse = new Bouton("Vitesse",vitesse_aleatoire);
BR1.appendChild(boutonVitesse.element);

function toggleDebug() {
  pong.setDebug(!pong.getDebug());
}
let boutonDebug = new Bouton("Debug",toggleDebug);
BR1.appendChild(boutonDebug.element);

//fonction Bouton interCollision
function inverser_interCollision(){
	pong.setInterCollision(!pong.getInterCollision());
}
let boutonInterCollision = new Bouton("InterCollision",inverser_interCollision);
BR1.appendChild(boutonInterCollision.element);
//Fonction Input Nombre mobiles
function nombre_mobiles(nb_mobiles){
  pong.resetMobiles(nb_mobiles);
}
let entreeMobile = new EntreeNumerique("Nombre de mobiles","Entre 1 et 250",nombre_mobiles,1,250,false);
IR1.appendChild(entreeMobile.element);
//Fonction Input Nombre murs
function nombre_murs(nb_murs){
  pong.resetMurs(nb_murs);
}
let entreeMurs = new EntreeNumerique("Nombre de murs","Entre 0 et 5",nombre_murs,0,5,true);
IR1.appendChild(entreeMurs.element);
//Création du jeu
let pong = new Pong(1,2,2,ctx,decalage,c_largeur,c_hauteur,true,false);

canvas.addEventListener("click",e=>{
  let coords = getRelativeCoordinates(e,canvas);
  coords.x+=canvas.clientWidth/2;
  coords.y+=canvas.clientHeight/2;
  coords.x*=canvas.width/canvas.clientWidth;
  coords.y*=canvas.height/canvas.clientHeight;
  pong.click(coords.x,coords.y);
},false);
//Fonction de boucle
let prevT =0;
function boucle(t) {
  requestAnimationFrame(boucle);
  let dt=(t-prevT)/1000;
  prevT=t;
  //console.log(dt);
  if(!pause && dt<1)pong.execute(dt*20);
}
requestAnimationFrame(boucle);
