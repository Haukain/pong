import { randomFromTo, inInterval } from "./utils.js";
import { Mobile } from "./mobile.js";
import { Point } from "./point.js";
import { Mur } from "./mur.js";
import { Triangle } from "./triangle.js";
import { Cercle } from "./cercle.js";

export class Pong{
	constructor(nb_mur,nb_mobiles,ctx,marge,c_largeur,c_hauteur,interCollision,debug){
		this._ctx = ctx;
		this._marge = marge;
		this._c_largeur = c_largeur;
		this._c_hauteur = c_hauteur;
		this._debug = debug;
		this._interCollision = interCollision;
		//Création d'un vecteur murs de nb_mur murs
		this.resetMobiles(nb_mobiles);
		this.resetMurs(nb_mur);
	}

	getMobiles(){
		return this._mobiles;
	}
	resetMobiles(nbMobiles){
		this._mobiles = [];
		for(let i=0;i<nbMobiles;i++){
			if(i%2) this._mobiles.push(new Triangle(randomFromTo(0 + this._marge,this._c_largeur - this._marge), randomFromTo(0 + this._marge,this._c_hauteur - this._marge), randomFromTo(20,40), randomFromTo(40,60), randomFromTo(-1,1), this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0,255,true)));
			else this._mobiles.push(new Cercle(randomFromTo(0 + this._marge,this._c_largeur - this._marge), randomFromTo(0 + this._marge,this._c_hauteur - this._marge), randomFromTo(10,30), 0, this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0,255,true)));
		}
	}
	getMurs(){
		return this._murs;
	}
	resetMurs(nb_murs){
		this._murs = [];
		var i;
		for (i=0;i<nb_murs;i++){
			let r = Math.random();
			if(r<0.5){
				this._murs.push(new Mur(randomFromTo(0 + this._marge/3,this._c_largeur - this._marge/3), randomFromTo(0 + this._marge/3,this._c_hauteur - this._marge/3), randomFromTo(30,70), randomFromTo(200,300), 0 , this._ctx, randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0.8,1.2)));
			}else {
				this._murs.push(new Mur(randomFromTo(0 + this._marge/3,this._c_largeur - this._marge/3), randomFromTo(0 + this._marge/3,this._c_hauteur - this._marge/3), randomFromTo(30,70), randomFromTo(200,300), Math.PI/2, this._ctx, randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0.8,1.2)));
			}
		}
	}
	getDebug(){
		return this._debug;
	}
	setDebug(d){
		this._debug = d;
	}
	getInterCollision(){
		return this._interCollision;
	}
	setInterCollision(ic){
		this._interCollision = ic;
	}

	collision(){
		var that = this

		this._mobiles.forEach(function(mobile) {
	  		that._murs.forEach(function(mur) {
		  		if(mur._orientation==0){
		  			if (mobile.getX()>mur.getX()-mur.getLargeur()/2 && mobile.getX()<(mur.getX()+mur.getLargeur()/2) && mobile.getY()>mur.getY()-mur.getHauteur()/2 && mobile.getY()<(mur.getY()+mur.getHauteur()/2) ) {
		  				if(mobile.getX()-mobile.getVX()<mur.getX()-mur.getLargeur()/2 || mobile.getX()-mobile.getVX()>(mur.getX()+mur.getLargeur()/2)){mobile.setVX(-mobile.getVX());

			  				if(Math.abs(mobile.getVX())>=1 && Math.abs(mobile.getVX())<=5){
			  					mobile.setVX(mobile.getVX()*mur.getCoeff());
			  				}

		  				}
		  				else{
		  					mobile.setVY(-mobile.getVY());
			  				if(Math.abs(mobile.getVY())>=1 && Math.abs(mobile.getVY())<=5){
			  					mobile.setVY(mobile.getVY()*mur.getCoeff());
			  				}
		  				}
		  			}
		  		} else{
		  			if (mobile.getX()>mur.getX()-mur.getHauteur()/2 && mobile.getX()<(mur.getX()+mur.getHauteur()/2) && mobile.getY()>mur.getY()-mur.getLargeur()/2 && mobile.getY()<(mur.getY()+mur.getLargeur()/2) ) {
		  				if(mobile.getX()-mobile.getVX()<mur.getX()-mur.getHauteur()/2 || mobile.getX()-mobile.getVX()>(mur.getX()+mur.getHauteur()/2)){
		  					mobile.setVX(-mobile.getVX());
		  				if(Math.abs(mobile.getVX())>=1 && Math.abs(mobile.getVX())<=5){
		  					mobile.setVX(mobile.getVX()*mur.getCoeff());
		  				}
		  				}
		  				else{
		  					mobile.setVY(-mobile.getVY());
		  				if(Math.abs(mobile.getVY())>=1 && Math.abs(mobile.getVY())<=5){
		  					mobile.setVY(mobile.getVY()*mur.getCoeff());
		  				}
		  				}
	  				}
		  		}
			});
		});
		//nouvel algorithme
		for(let mobile of this._mobiles){
  		if (mobile.getX()>that._c_largeur || mobile.getX()<0){
  			mobile.setVX(-mobile.getVX());
			}
  		if (mobile.getY()>that._c_hauteur || mobile.getY()<0){
  			mobile.setVY(-mobile.getVY());
			}
		}
		let objects = this._mobiles.concat(this._murs);
		for(let i of objects){
			for(let j of objects){
				if(i != j && i instanceof Mobile && i.collisionBoite(j) && i.collisionPolygonale(j)){
					if(j instanceof Mobile){
						if(this._interCollision){
							let vi = Math.sqrt(Math.pow(i.getVX(),2)+Math.pow(i.getVY(),2));
							let vj = Math.sqrt(Math.pow(j.getVX(),2)+Math.pow(j.getVY(),2));
							let v = (vi+vj)/2;
							let a =Math.atan2(i.getY()-j.getY(),i.getX()-j.getX());
							i.setVX(v*Math.cos(a));
							i.setVY(v*Math.sin(a));
							j.setVX(-v*Math.cos(a));
							j.setVY(-v*Math.sin(a));
						}
					}else{
						if(j instanceof Mur){ //cas particulier du mur
							let x = j.getX();
							let y = j.getY();
							let l,h;
							if(j.getOrientation()==0){l=j.getLargeur();h=j.getHauteur();}
							else{h=j.getLargeur();l=j.getHauteur();}
							if(!inInterval(i.getX(),x-l/2,x+l/2)){
								i.setVX(-i.getVX());
							}else if(!inInterval(i.getY(),y-h/2,y+h/2)){
								i.setVY(-i.getVY());
							}
						}
					}
				}
			}
		}
	}

	execute(dt){
		this._ctx.clearRect(0,0,this._c_largeur,this._c_hauteur);
	    this.getMobiles().forEach(function(element) {
	  		element.deplace(dt);
			});
	    this.getMurs().concat(this.getMobiles()).forEach(function(element) {
	  		element.dessine();
			});
			if(this._debug) this.getMurs().concat(this.getMobiles()).forEach(function(element) {
	  		element.dessineCollision();
			});
	    this.collision();
	}
	click(x,y){
		let p = new Point(x,y,this._ctx);
		for(let forme of this._mobiles.concat(this._murs)){
			if(forme.collisionBoite(p)){
				if(forme.collisionPolygonale(p)){
					forme._couleur.setCouleur(randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0,255,true));
					if(forme instanceof Mobile){
						forme.setVX(randomFromTo(-6,6));
						forme.setVY(randomFromTo(-6,6));
					}
				}
			}
		}
	}
}
