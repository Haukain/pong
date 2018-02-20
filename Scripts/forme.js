import { assert, inInterval } from "./utils.js";
import { BoiteCollision } from "./boitecollision.js";
import { PolygoneCollision } from "./polygonecollision.js";
import { Couleur } from "./couleur.js";
export class Forme {

  constructor(x,y,largeur,hauteur,orientation,ctx,r=0,v=0,b=0) {
    if (this.constructor === Forme) {
      throw new Error("Forme est une classe abstraite !");
    }
    this._x = x;
    this._y = y;
    this._largeur = largeur;
    this._hauteur = hauteur;
    this._orientation = orientation;
    this._ctx = ctx;
    this._couleur = new Couleur(r,v,b);
    this._couleur.setForme(this);
    this.genBoiteCollisions();
    this._polygoneCollision = new PolygoneCollision(this._x,this._y);
  }
  //Get
  getX() {
    return this._x;
  }
  getY() {
    return this._y;
  }
  getHauteur() {
    return this._hauteur;
  }
  getLargeur() {
    return this._largeur;
  }
  getOrientation() {
    return this._orientation;
  }
  getCouleur() {
    return this._couleur;
  }
  getPolygoneCollision(){
    return this._polygoneCollision;
  }
  //Set
  setX(pos_x) {
    this._polygoneCollision.translate(pos_x-this._x,0);
    this._x = pos_x;
    this.genBoiteCollisions();
  }
  setY(pos_y) {
    this._polygoneCollision.translate(0,pos_y-this._y);
    this._y = pos_y;
    this.genBoiteCollisions();
  }
  setHauteur(h) {
    this._hauteur = h;
    this.genBoiteCollisions();
  }
  setLargeur(w) {
    this._largeur = w;
    this.genBoiteCollisions();
  }
  setOrientation(o) {
    this._polygoneCollision.rotate(o-this._orientation);
    this._orientation = o;
    this.genBoiteCollisions();
  }

  //Méthodes
  dessine(){
    throw new Error('La méthode dessine() n a pas été implémentée !');
  }
  genBoiteCollisions(){
    this._boiteCollision = new BoiteCollision(this._x,this._y,this._largeur/1.5,this._hauteur/1.5);

  }
  collisionBoite(f,deux=false){
    assert(f instanceof Forme,"doit être une instance de Forme");
    let colY = inInterval(f._boiteCollision.haut,this._boiteCollision.bas,this._boiteCollision.haut) || inInterval(f._boiteCollision.bas,this._boiteCollision.bas,this._boiteCollision.haut);
    let colX = inInterval(f._boiteCollision.droite,this._boiteCollision.gauche,this._boiteCollision.droite) || inInterval(f._boiteCollision.gauche,this._boiteCollision.gauche,this._boiteCollision.droite);
    if(deux || (colY && colX))return colY && colX;
    else return f.collisionBoite(this,true);
  }
  collisionPolygonale(f){
    return this._polygoneCollision.collide(f.getPolygoneCollision());
  }
  dessineCollision(){
    this._ctx.strokeStyle = 'red';
    this._ctx.strokeRect(this._boiteCollision.gauche,this._boiteCollision.bas,this._boiteCollision.droite-this._boiteCollision.gauche,this._boiteCollision.haut-this._boiteCollision.bas);
    this._ctx.strokeStyle = 'black';
		this._ctx.beginPath();
		for(let p of this._polygoneCollision.points){
			this._ctx.lineTo(p[0],p[1]);
		}
		this._ctx.stroke();
  }
}
