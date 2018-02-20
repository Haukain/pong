import { Forme } from "./forme.js";
export class Point extends Forme {
	constructor(x,y,ctx,r,v,b) {
		r=r?r:0;
		v=v?v:0;
		b=b?b:0;
		super(x,y,0,0,0,ctx,r,v,b);
		this._polygoneCollision.push(x-.1,y-.1);
		this._polygoneCollision.push(x+.1,y+.1);
		this._polygoneCollision.push(x-.1,y-.1);
	}

	//Methodes
	dessine() {
		this._ctx.save();
		this._ctx.beginPath();
		this._ctx.translate(this._x,this._y);
		this._ctx.fillStyle = 'rgb(' + this._couleur.get_rouge() + ',' + this._couleur.get_vert() + ',' + this._couleur.get_bleu() + ')';
		this._ctx.fillRect(-5,-5,10,10);
		this._ctx.restore();
	}
}
