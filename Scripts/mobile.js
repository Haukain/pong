import { Forme } from "./forme.js";
export class Mobile extends Forme {
	constructor(x,y,largeur,hauteur,orientation,ctx,vitesse_x, vitesse_y,r,v,b) {
		super(x,y,largeur,hauteur,orientation,ctx,r,v,b);
		if (this.constructor === Mobile) {
	      throw new Error("Mobile est une classe abstraite !");
	    }
    	this._vitesse_x = vitesse_x;
    	this._vitesse_y = vitesse_y;
	}
	getVX(){
		return this._vitesse_x;
	}
	getVY(){
		return this._vitesse_y;
	}
	setVX(vx){
		this._vitesse_x = vx;
	}
	setVY(vy){
		this._vitesse_y = vy;
	}
	deplace(dt){
		this.setX( this._x + this._vitesse_x*dt );
		this.setY( this._y + this._vitesse_y*dt );
		this.setOrientation( this._orientation + 0.03*Math.sign(this._orientation)*dt );
	}

	dessine(){
		throw new Error('La méthode dessine() n a pas été implémentée !');
	}
}
