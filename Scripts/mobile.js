class Mobile extends Forme {
	constructor(x,y,largeur,hauteur,orientation,ctx,vitesse_x, vitesse_y,r,v,b) {
		super(x,y,largeur,hauteur,orientation,ctx,r,v,b);
		if (this.constructor === Mobile) {
	      throw new Error("Mobile est une classe abstraite !");
	    }
    	this._vitesse_x = vitesse_x;
    	this._vitesse_y = vitesse_y;
	}
	get_vx(){
		return this._vitesse_x;
	}
	get_vy(){
		return this._vitesse_y;
	}
	set_vx(vx){
		this._vitesse_x = vx;
	}
	set_vy(vy){
		this._vitesse_y = vy;
	}
	deplace(){
		this._x = this._x + this._vitesse_x;
		this._y = this._y + this._vitesse_y;
		this._orientation = this._orientation + 0.03*Math.sign(this._orientation);
	}

	dessine(){
		throw new Error('La méthode dessine() n a pas été implémentée !');
	}
}