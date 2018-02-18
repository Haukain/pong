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
    this._couleur.set_forme(this);
  }
  //Get
  get_x() {
    return this._x;
  }
  get_y() {
    return this._y;
  }
  hauteur() {
    return this._hauteur;
  }
  largeur() {
    return this._largeur;
  }
  //Set
  set_x(pos_x) {
    this._x = pos_x;
  }
  set_y(pos_y) {
    this._y = pos_y;
  }
  set_hauteur(h) {
    this._hauteur = h;
  }
  set_largeur(w) {
    this._largeur = w;
  }

  //Méthodes
  dessine(){
    throw new Error('La méthode dessine() n a pas été implémentée !');
  }
}
