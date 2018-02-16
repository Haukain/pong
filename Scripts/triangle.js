class Triangle extends Mobile {

	//Methodes
	dessine() {
	this._ctx.save();
	this._ctx.beginPath();
	this._ctx.translate(this._x,this._y);
	this._ctx.rotate(this._orientation);
	this._ctx.moveTo(0,this._hauteur/2);
	this._ctx.lineTo(this._largeur/2,-this._hauteur/2);
	this._ctx.lineTo(-this._largeur/2,-this._hauteur/2);
	this._ctx.lineTo(0,this._hauteur/2);
	this._ctx.fillStyle = 'rgb(' + this._couleur.get_rouge() + ',' + this._couleur.get_vert() + ',' + this._couleur.get_bleu() + ')';
	this._ctx.fill();
	this._ctx.restore();
  }
}