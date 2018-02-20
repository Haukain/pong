import { Mobile } from "./mobile.js";
export class Triangle extends Mobile {
	constructor(x,y,largeur,hauteur,orientation,ctx,vitesse_x, vitesse_y,r,v,b){
		super(x,y,largeur,hauteur,orientation,ctx,vitesse_x, vitesse_y,r,v,b);
		this._polygoneCollision.translate(-this._x,-this._y);
		this._polygoneCollision.push(0,this._hauteur/2);
		this._polygoneCollision.push(this._largeur/2,-this._hauteur/2);
		this._polygoneCollision.push(-this._largeur/2,-this._hauteur/2);
		this._polygoneCollision.push(0,this._hauteur/2);
		this._polygoneCollision.rotate(this._orientation);
		this._polygoneCollision.translate(this._x,this._y);
	}
	//Methodes
	dessine() {
		this._ctx.save();
		this._ctx.beginPath();
		this._ctx.translate(this._x,this._y);
		this._ctx.rotate(-this._orientation);
		this._ctx.moveTo(0,this._hauteur/2);
		this._ctx.lineTo(this._largeur/2,-this._hauteur/2);
		this._ctx.lineTo(-this._largeur/2,-this._hauteur/2);
		this._ctx.lineTo(0,this._hauteur/2);
		this._ctx.fillStyle = 'rgb(' + this._couleur.get_rouge() + ',' + this._couleur.get_vert() + ',' + this._couleur.get_bleu() + ')';
		this._ctx.fill();
		this._ctx.restore();
  }
}
