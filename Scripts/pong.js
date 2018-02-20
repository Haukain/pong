import { randomFromTo } from "./utils.js";
import { Mobile } from "./mobile.js";
import { Point } from "./point.js";
import { Mur } from "./mur.js";
import { Triangle } from "./triangle.js";
import { Cercle } from "./cercle.js";

export class Pong{
	constructor(nb_mur,nb_triangle,nb_cercle,ctx,decalage,c_largeur,c_hauteur,debug){
		this._ctx = ctx;
		this._decalage = decalage;
		this._c_largeur = 1332;
		this._c_hauteur = 924;
		this._debug = debug;
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

	get_mobiles(){
		return this._mobiles;
	}
	reset_mobiles(nb_mobiles){
		this._mobiles = [];
		var i;
		if(nb_mobiles%2==0){
			for (i=0;i<nb_mobiles/2;i++){
				this._mobiles.push(new Triangle(randomFromTo(0 + this._decalage,this._c_largeur - this._decalage), randomFromTo(0 + this._decalage,this._c_hauteur - this._decalage), randomFromTo(20,40), randomFromTo(40,60), randomFromTo(-1,1), this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255))));
			}
			for (i=0;i<nb_mobiles/2;i++){
				this._mobiles.push(new Cercle(randomFromTo(0 + this._decalage,this._c_largeur - this._decalage), randomFromTo(0 + this._decalage,this._c_hauteur - this._decalage), randomFromTo(10,30), 0, this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255))));
			}
		} else{
			for (i=0;i<nb_mobiles/2-1;i++){
				this._mobiles.push(new Triangle(randomFromTo(0 + this._decalage,this._c_largeur - this._decalage), randomFromTo(0 + this._decalage,this._c_hauteur - this._decalage), randomFromTo(20,40), randomFromTo(40,60), randomFromTo(-1,1), this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255))));
			}
			for (i=0;i<nb_mobiles/2;i++){
				this._mobiles.push(new Cercle(randomFromTo(0 + this._decalage,this._c_largeur - this._decalage), randomFromTo(0 + this._decalage,this._c_hauteur - this._decalage), randomFromTo(10,30), 0, this._ctx,randomFromTo(-6,6),randomFromTo(-6,6),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255))));
			}
		}
	}
	get_murs(){
		return this._murs;
	}
	reset_murs(nb_murs){
		this._murs = [];
		var i;
		for (i=0;i<nb_murs;i++){
			let r = Math.random();
			if(r<0.5){
				this._murs.push(new Mur(randomFromTo(0 + this._decalage/3,this._c_largeur - this._decalage/3), randomFromTo(0 + this._decalage/3,this._c_hauteur - this._decalage/3), randomFromTo(30,70), randomFromTo(200,300), 0 , this._ctx, Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),randomFromTo(0.8,1.2)));
			}else {
				this._murs.push(new Mur(randomFromTo(0 + this._decalage/3,this._c_largeur - this._decalage/3), randomFromTo(0 + this._decalage/3,this._c_hauteur - this._decalage/3), randomFromTo(30,70), randomFromTo(200,300), Math.PI/2, this._ctx, Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),Math.trunc(randomFromTo(0,255)),randomFromTo(0.8,1.2)));
			}
		}
	}

	collision(){
		var that = this

		this._mobiles.forEach(function(mobile) {
	  		that._murs.forEach(function(mur) {
		  		if(mur._orientation==0){
		  			if (mobile.get_x()>mur.get_x()-mur.largeur()/2 && mobile.get_x()<(mur.get_x()+mur.largeur()/2) && mobile.get_y()>mur.get_y()-mur.hauteur()/2 && mobile.get_y()<(mur.get_y()+mur.hauteur()/2) ) {
		  				if(mobile.get_x()-mobile.get_vx()<mur.get_x()-mur.largeur()/2 || mobile.get_x()-mobile.get_vx()>(mur.get_x()+mur.largeur()/2)){
		  					mobile.set_vx(-mobile.get_vx());

		  				if(Math.abs(mobile.get_vx())>=1 && Math.abs(mobile.get_vx())<=5){
		  					mobile.set_vx(mobile.get_vx()*mur.get_coeff());
		  				}

		  				}
		  				else{
		  					mobile.set_vy(-mobile.get_vy());
		  				if(Math.abs(mobile.get_vy())>=1 && Math.abs(mobile.get_vy())<=5){
		  					mobile.set_vy(mobile.get_vy()*mur.get_coeff());
		  				}
		  				}
		  			}
		  		} else{
		  			if (mobile.get_x()>mur.get_x()-mur.hauteur()/2 && mobile.get_x()<(mur.get_x()+mur.hauteur()/2) && mobile.get_y()>mur.get_y()-mur.largeur()/2 && mobile.get_y()<(mur.get_y()+mur.largeur()/2) ) {
		  				if(mobile.get_x()-mobile.get_vx()<mur.get_x()-mur.hauteur()/2 || mobile.get_x()-mobile.get_vx()>(mur.get_x()+mur.hauteur()/2)){
		  					mobile.set_vx(-mobile.get_vx());
		  				if(Math.abs(mobile.get_vx())>=1 && Math.abs(mobile.get_vx())<=5){
		  					mobile.set_vx(mobile.get_vx()*mur.get_coeff());
		  				}
		  				}
		  				else{
		  					mobile.set_vy(-mobile.get_vy());
		  				if(Math.abs(mobile.get_vy())>=1 && Math.abs(mobile.get_vy())<=5){
		  					mobile.set_vy(mobile.get_vy()*mur.get_coeff());
		  				}
		  				}
	  				}
		  		}
			});
		});
		//nouvel algorithme
		for(let mobile of this._mobiles){
  		if (mobile.get_x()>that._c_largeur || mobile.get_x()<0){
  			mobile.set_vx(-mobile.get_vx());
			}
  		if (mobile.get_y()>that._c_hauteur || mobile.get_y()<0){
  			mobile.set_vy(-mobile.get_vy());
			}
		}
		let objects = this._mobiles.concat(this._murs);
		for(let i of objects){
			for(let j of objects){
				if(i != j && i instanceof Mobile && i.collisionBoite(j) && i.collisionPolygonale(j)){
					if(j instanceof Mobile){
						let vi = Math.sqrt(Math.pow(i.get_vx(),2)+Math.pow(i.get_vy(),2));
						let vj = Math.sqrt(Math.pow(j.get_vx(),2)+Math.pow(j.get_vy(),2));
						let v = (vi+vj)/2;
						let a =Math.atan2(i.get_y()-j.get_y(),i.get_x()-j.get_x());
						i.set_vx(v*Math.cos(a));
						i.set_vy(v*Math.sin(a));
						j.set_vx(-v*Math.cos(a));
						j.set_vy(-v*Math.sin(a));
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
	    this.get_mobiles().forEach(function(element) {
	  		element.deplace(dt);
			});
	    this.get_murs().concat(this.get_mobiles()).forEach(function(element) {
	  		element.dessine();
			});
			if(this._debug) this.get_murs().concat(this.get_mobiles()).forEach(function(element) {
	  		element.dessineCollision();
			});
	    this.collision();
	}
	click(x,y){
		console.log("pong.click");
		let p = new Point(x,y,this._ctx);
		for(let forme of this._mobiles.concat(this._murs)){
			if(forme.collisionBoite(p)){
				console.log("forme.collisionBoite");
				if(forme.collisionPolygonale(p)){
					console.log(forme);
				}
			}
		}
	}
}
