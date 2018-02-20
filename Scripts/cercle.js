import { Mobile } from "./mobile.js";
export class Cercle extends Mobile {
	constructor(x,y,rayon,orientation,ctx,vitesse_x,vitesse_y,r,v,b) {
		super(x,y,2*rayon,2*rayon,orientation,ctx,vitesse_x,vitesse_y,r,v,b);
		this._polygoneCollision.translate(-this._x,-this._y);
		for(let i = 0; i < 9; i++){
			let a = i/8*2*Math.PI;
			this._polygoneCollision.push(rayon*Math.cos(a),rayon*Math.sin(a));
		}
		this._polygoneCollision.translate(this._x,this._y);
	}
	//Methodes
	dessine() {
		this._ctx.save();
		this._ctx.beginPath();
		this._ctx.translate(this._x,this._y);
		this._ctx.arc(0,0,this._largeur/2,0,2*Math.PI);
		this._ctx.fillStyle = 'rgb(' + this._couleur.getRouge() + ',' + this._couleur.getVert() + ',' + this._couleur.getBleu() + ')';
		this._ctx.fill();
		this._ctx.restore();

  }
}
