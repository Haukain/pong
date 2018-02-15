class Triangle extends Mobile {

	//Methodes
	dessine() {
	ctx.save();
	ctx.beginPath();
	ctx.translate(this._x,this._y);
	ctx.rotate(this._orientation);
	ctx.moveTo(0,this._hauteur/2);
	ctx.lineTo(this._largeur/2,-this._hauteur/2);
	ctx.lineTo(-this._largeur/2,-this._hauteur/2);
	ctx.lineTo(0,this._hauteur/2);
	ctx.fillStyle = 'rgb(' + this._couleur.get_rouge() + ',' + this._couleur.get_vert() + ',' + this._couleur.get_bleu() + ')';
	ctx.fill();
	ctx.restore();
  }
}