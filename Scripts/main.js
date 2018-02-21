import { assert, randomFromTo, inInterval, getRelativeCoordinates} from "./utils.js";
import { Pong } from "./pong.js";
import { Bouton } from "./bouton.js";
import { EntreeNumerique } from "./entreenumerique.js";

export class App{
  constructor(canvas,boutons,entrees){
    // Récupération du Canvas
    this._canvas = canvas;
    // Contexte du canvas : 2D
    this._ctx = this._canvas.getContext("2d");
    //Récupération des conteneurs de bouton et d'entrées
    this._boutons = boutons;
    this._entrees = entrees;
    //Decalage pour centrer les formes
    this._marge = 250;

    //booleen de pause
    this._pause = false;

    //création du Pong
    this._pong = new Pong(1,4,this._ctx,this._marge,this._canvas.width,this._canvas.height,true,false);

    //boucle de simulation
    let prevT =0;
    let that = this; //conservation du contexte
    function boucle(t) {
      requestAnimationFrame(boucle);
      let dt=(t-prevT)/1000;
      prevT=t;
      that.update(dt);
    }
    requestAnimationFrame(boucle);

    //ajout de l'événement click
    this._canvas.addEventListener("click",e=>this.click(e),false);

    //===boutons===

    //Bouton Pause
    this._boutonPause = new Bouton("Pause",()=>this.togglePause());
    this._boutons.appendChild(this._boutonPause.element);
    //Bouton Reset
    this._boutonReset = new Bouton("Reset",()=>this.reset());
    this._boutons.appendChild(this._boutonReset.element);
    //Bouton couleur
    this._boutonCouleur = new Bouton("Couleur",()=>this.couleurAleatoire());
    this._boutons.appendChild(this._boutonCouleur.element);
    //Bouton Vitesse
    this._boutonVitesse = new Bouton("Vitesse",()=>this.vitesseAleatoire());
    this._boutons.appendChild(this._boutonVitesse.element);
    //Bouton interCollision
    this._boutonInterCollision = new Bouton("InterCollision",()=>this.toggleInterCollision());
    this._boutons.appendChild(this._boutonInterCollision.element);
    //Bouton debug
    this._boutonDebug = new Bouton("Debug",()=>this.toggleDebug());
    this._boutons.appendChild(this._boutonDebug.element);


    //===Entréés===

    //Entrée mobiles
    this._entreeMobile = new EntreeNumerique("Nombre de mobiles","Entre 1 et 250",e=>this.setNombreMobiles(e),1,250,false);
    this._entrees.appendChild(this._entreeMobile.element);
    //Entrée murs
    this._entreeMurs = new EntreeNumerique("Nombre de murs","Entre 0 et 5",e=>this.setNombreMurs(e),0,5,true);
    this._entrees.appendChild(this._entreeMurs.element);
  }
  //méthodes
  update(dt){
    if(!this._pause && dt<1)this._pong.execute(dt*20);
  }
  click(e){
    let coords = getRelativeCoordinates(e,this._canvas);
    coords.x+=this._canvas.clientWidth/2;
    coords.y+=this._canvas.clientHeight/2;
    coords.x*=this._canvas.width/this._canvas.clientWidth;
    coords.y*=this._canvas.height/this._canvas.clientHeight;
    this._pong.click(coords.x,coords.y);
  }
  //méthodes liéés à l'interface utilisateur
  reset(){
  	this._pong.resetMurs(1);
  	this._pong.resetMobiles(4);
  }
  togglePause(){
    this._pause = !this._pause;
  	if (this._pause) console.log("Le jeu a été mis en pause");
  	else console.log("Le jeu a été relancé");
  }
  toggleInterCollision(){
  	this._pong.setInterCollision(!this._pong.getInterCollision());
  }
  toggleDebug() {
    this._pong.setDebug(!this._pong.getDebug());
  }
  couleurAleatoire(){
  	for(let mobile of this._pong.getMobiles()){
  		mobile.getCouleur().setCouleur(
        randomFromTo(0,255,true),
        randomFromTo(0,255,true),
        randomFromTo(0,255,true)
      );
  	}
  }
  vitesseAleatoire(){
  	for( let mobile of this._pong.getMobiles() ){
  		mobile.setVX(randomFromTo(-6,6));
  		mobile.setVY(randomFromTo(-6,6));
  	}
  }
  setNombreMobiles(nbMobiles){
    this._pong.resetMobiles(nbMobiles);
  }
  setNombreMurs(nbMurs){
    this._pong.resetMurs(nbMurs);
  }
}
