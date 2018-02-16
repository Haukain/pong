class Cercle extends Mobile {
	constructor(x,y,rayon,orientation,ctx,vitesse_x,vitesse_y,r,v,b) {
		super(x,y,2*rayon,2*rayon,orientation,ctx,vitesse_x,vitesse_y,r,v,b);
	}
	//Methodes
	dessine() {
		this._ctx.save();
		this._ctx.beginPath();
		this._ctx.translate(this._x,this._y);
		this._ctx.arc(0,0,this._largeur/2,0,2*Math.PI);
		this._ctx.fillStyle = 'rgb(' + this._couleur.get_rouge() + ',' + this._couleur.get_vert() + ',' + this._couleur.get_bleu() + ')';
		this._ctx.fill();
		this._ctx.restore();

  }
}