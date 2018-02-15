class Mur extends Forme {
	constructor(x,y,largeur,hauteur,orientation,ctx,r,v,b,coefficient) {
		super(x,y,largeur,hauteur,orientation,ctx,r,v,b);
    	this._coefficient = coefficient;
	}

	//Methodes
	get_coeff(){
		return this._coefficient;
	}
	set_coeff(c){
		this._coefficient = c;
	}
	dessine() {
	ctx.save();
	ctx.beginPath();
	ctx.translate(this._x,this._y);
	ctx.rotate(this._orientation);
	ctx.moveTo(-this._largeur/2,+this._hauteur/2);
	ctx.lineTo(+this._largeur/2,+this._hauteur/2);
	ctx.lineTo(+this._largeur/2,-this._hauteur/2);
	ctx.lineTo(-this._largeur/2,-this._hauteur/2);
	ctx.lineTo(-this._largeur/2,+this._hauteur/2);
	ctx.fillStyle = 'rgb(' + this._couleur.get_rouge() + ',' + this._couleur.get_vert() + ',' + this._couleur.get_bleu() + ')';
	ctx.fill();
	ctx.restore();
	}
}