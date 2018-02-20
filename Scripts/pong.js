import { randomFromTo } from "./utils.js";
import { Mobile } from "./mobile.js";
import { Point } from "./point.js";
import { Mur } from "./mur.js";
import { Triangle } from "./triangle.js";
import { Cercle } from "./cercle.js";

export class Pong{
	constructor(nb_mur,nb_triangle,nb_cercle,ctx,decalage,c_largeur,c_hauteur,interCollision,debug){
		this._ctx = ctx;
		this._decalage = decalage;
		this._c_largeur = 1332;
		this._c_hauteur = 924;
		this._debug = debug;
		this._interCollision = interCollision;
		//Création d'un vecteur murs de nb_mur murs
		this._murs = [];
		var i;
		for (i=0;i<nb_mur;i++){
			let r = Math.random();
			if(r<0.5){
				this._murs.push(new Mur(randomFromTo(0 + this._decalage/3,this._c_largeur - this._decalage/3), randomFromTo(0 + this._decalage/3,this._c_hauteur - this._decalage/3), randomFromTo(30,70), randomFromTo(200,300), 0 , this._ctx, Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),randomFromTo(0.8,1.2)));
			}else {
				this._murs.push(new Mur(randomFromTo(0 + this._decalage/3,this._c_largeur - this._decalage/3), randomFromTo(0 + this._decalage/3,this._c_hauteur - this._decalage/3), randomFromTo(30,70), randomFromTo(200,300), Math.PI/2, this._ctx, Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),randomFromTo(0.8,1.2)));
			}
		}
		//Création d'un vecteur mobiles de nb_triangle triangles et nb_cercle cercles
		this._mobiles = [];
		for (i=0;i<nb_triangle;i++){
			this._mobiles.push(new Triangle(randomFromTo(0 + this._decalage,this._c_largeur - this._decalage), randomFromTo(0 + this._decalage,this._c_hauteur - this._decalage), randomFromTo(20,40), randomFromTo(40,60), randomFromTo(-1,1), this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255))));
		}
		for (i=0;i<nb_cercle;i++){
			this._mobiles.push(new Cercle(randomFromTo(0 + this._decalage,this._c_largeur - this._decalage), randomFromTo(0 + this._decalage,this._c_hauteur - this._decalage), randomFromTo(10,30), 0, this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255))));
		}
	}

	getMobiles(){
		return this._mobiles;
	}
	resetMobiles(nb_mobiles){
		this._mobiles = [];
		var i;
		if(nb_mobiles%2==0){
			for (i=0;i<nb_mobiles/2;i++){
				this._mobiles.push(new Triangle(randomFromTo(0 + this._decalage,this._c_largeur - this._decalage), randomFromTo(0 + this._decalage,this._c_hauteur - this._decalage), randomFromTo(20,40), randomFromTo(40,60), randomFromTo(-1,1), this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0,255,true)));
			}
			for (i=0;i<nb_mobiles/2;i++){
				this._mobiles.push(new Cercle(randomFromTo(0 + this._decalage,this._c_largeur - this._decalage), randomFromTo(0 + this._decalage,this._c_hauteur - this._decalage), randomFromTo(10,30), 0, this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0,255,true)));
			}
		} else{
			for (i=0;i<nb_mobiles/2-1;i++){
				this._mobiles.push(new Triangle(randomFromTo(0 + this._decalage,this._c_largeur - this._decalage), randomFromTo(0 + this._decalage,this._c_hauteur - this._decalage), randomFromTo(20,40), randomFromTo(40,60), randomFromTo(-1,1), this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0,255,true)));
			}
			for (i=0;i<nb_mobiles/2;i++){
				this._mobiles.push(new Cercle(randomFromTo(0 + this._decalage,this._c_largeur - this._decalage), randomFromTo(0 + this._decalage,this._c_hauteur - this._decalage), randomFromTo(10,30), 0, this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0,255,true)));
			}
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
				this._murs.push(new Mur(randomFromTo(0 + this._decalage/3,this._c_largeur - this._decalage/3), randomFromTo(0 + this._decalage/3,this._c_hauteur - this._decalage/3), randomFromTo(30,70), randomFromTo(200,300), 0 , this._ctx, randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0.8,1.2)));
			}else {
				this._murs.push(new Mur(randomFromTo(0 + this._decalage/3,this._c_largeur - this._decalage/3), randomFromTo(0 + this._decalage/3,this._c_hauteur - this._decalage/3), randomFromTo(30,70), randomFromTo(200,300), Math.PI/2, this._ctx, randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0,255,true),randomFromTo(0.8,1.2)));
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
							//a compléter
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
