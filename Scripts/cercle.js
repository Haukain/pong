class Cercle extends Mobile {
	constructor(x,y,rayon,orientation,ctx,vitesse_x,vitesse_y,r,v,b) {
		super(x,y,2*rayon,2*rayon,orientation,ctx,vitesse_x,vitesse_y,r,v,b);
	}
	//Methodes
	dessine() {
		ctx.beginPath();
		ctx.moveTo(this._x,this._y);
	ctx.arc(this._x,this._y,this._largeur/2,0,2*Math.PI);
	ctx.fillStyle = 'rgb(' + this._couleur.get_rouge() + ',' + this._couleur.get_vert() + ',' + this._couleur.get_bleu() + ')';
	ctx.fill();

  }
}