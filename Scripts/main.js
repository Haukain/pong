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
//Fonction rand() dans un intervalle
function intervalle(min, max) {
    return Math.random() * (max - min) + min;
}

let BR1 = document.getElementById("BR1");

//Fonction Bouton Pause
function pause_game(){
  pause = !pause;
	if (pause) console.log("Le jeu a été mis en pause");
	else console.log("Le jeu a été relancé");
}
let pauseButton = new Button("Pause",pause_game);
BR1.appendChild(pauseButton.element);
//Fonction Bouton Reset
function reset(){
	location.reload();
}
let resetButton = new Button("Reset",reset);
BR1.appendChild(resetButton.element);
//Fontion Bouton Couleur
function couleur_aleatoire(){
	pong._mobiles.forEach(function(element) {
		element._couleur.set_couleur(Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)));
	});
}
let colorButton = new Button("Couleur",couleur_aleatoire);
BR1.appendChild(colorButton.element);
//Fonction Bouton Vitesse
function vitesse_aleatoire(){
	pong._mobiles.forEach(function(element) {
		element.set_vx(intervalle(-6,6));
		element.set_vy(intervalle(-6,6));
	});
}
let speedButton = new Button("Vitesse",vitesse_aleatoire);
BR1.appendChild(speedButton.element);
//Fonction Input Nombre mobiles
function nombre_mobiles(event){
  if (event.keyCode != 13) return;
	var nb_mobiles = parseInt(document.getElementById("nb_mobiles").value);
	if(nb_mobiles<1 && nb_mobiles>250) return;
  pong.reset_mobiles(nb_mobiles);
}
document.getElementById("nb_mobiles").addEventListener("keydown",nombre_mobiles,false);
//Fonction Input Nombre murs
function nombre_murs(event){
  if (event.keyCode != 13) return;
	var nb_murs = parseInt(document.getElementById("nb_murs").value);
  if(nb_murs<0 && nb_murs>5) return;
  pong.reset_murs(nb_murs);
}
document.getElementById("nb_murs").addEventListener("keydown",nombre_murs,false);
//Création du jeu
pong = new Pong(1,2,2,ctx,decalage,c_largeur,c_hauteur);

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