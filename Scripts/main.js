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
//Fonction rand() dans intervalle
function intervalle(min, max) {
    return Math.random() * (max - min) + min;
}

//Fonction Bouton Pause
function pause_game(){
  pause = !pause;
	if (pause) console.log("Le jeu a été mis en pause");
	else console.log("Le jeu a été relancé");
  
}
//Fonction Bouton Reset
function reset(){
	location.reload();
}
//Fontion Bouton Couleur
function couleur_aleatoire(){
	pong._mobiles.forEach(function(element) {
		element._couleur.set_couleur(Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)));
	});
}
//Fonction Bouton Vitesse
function vitesse_aleatoire(){
	pong._mobiles.forEach(function(element) {
		element.set_vx(intervalle(-6,6));
		element.set_vy(intervalle(-6,6));
	});
}
//Fonction Input Nombre mobiles
function nombre_mobiles(){
	var nb_mobiles = parseInt(document.getElementById("nb_mobiles").value);
	if(nb_mobiles>=1 && nb_mobiles<=250){
		pong.reset_mobiles(nb_mobiles);
	}
}
//Fonction Input Nombre murs
function nombre_murs(){
	var nb_murs = parseInt(document.getElementById("nb_murs").value);
	if(nb_murs>=0 && nb_murs<=5){
		pong.reset_murs(nb_murs);
		
	}
}

//Création du jeu
pong = new Pong(1,2,2,ctx,decalage,c_largeur,c_hauteur);

//Fonction de boucle
let prevT =0;
function boucle(t) {
  let dt=(t-prevT)/1000;
  if(dt>1)return;
  prevT=t;
  requestAnimationFrame(boucle);
  console.log(dt);
  if(!pause)pong.execute(dt*20);
}
requestAnimationFrame(boucle);