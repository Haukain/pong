class Pong{
	constructor(nb_mur,nb_triangle,nb_cercle,ctx,decalage,c_largeur,c_hauteur){
		//Création d'un vecteur murs de nb_mur murs
		this._murs = [];
		var i;
		for (i=0;i<nb_mur;i++){
			let r = Math.random();
			if(r<0.5){
				this._murs.push(new Mur(intervalle(0 + decalage/3,c_largeur - decalage/3), intervalle(0 + decalage/3,c_hauteur - decalage/3), intervalle(30,70), intervalle(200,300), 0 , ctx, Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),intervalle(0.8,1.2)));
			}else {
				this._murs.push(new Mur(intervalle(0 + decalage/3,c_largeur - decalage/3), intervalle(0 + decalage/3,c_hauteur - decalage/3), intervalle(30,70), intervalle(200,300), Math.PI/2, ctx, Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),intervalle(0.8,1.2)));
			}
		}
		//Création d'un vecteur mobiles de nb_triangle triangles et nb_cercle cercles
		this._mobiles = [];
		for (i=0;i<nb_triangle;i++){
			this._mobiles.push(new Triangle(intervalle(0 + decalage,c_largeur - decalage), intervalle(0 + decalage,c_hauteur - decalage), intervalle(20,40), intervalle(40,60), intervalle(-1,1), ctx,intervalle(-6,6),intervalle(-6,6),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255))));
		}
		for (i=0;i<nb_cercle;i++){
			this._mobiles.push(new Cercle(intervalle(0 + decalage,c_largeur - decalage), intervalle(0 + decalage,c_hauteur - decalage), intervalle(10,30), 0, ctx,intervalle(-6,6),intervalle(-6,6),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255))));
		}
		this._ctx = ctx;
		this._decalage = decalage;
		this._c_largeur = 1332;
		this._c_hauteur = 924;
	}

	get_mobiles(){
		return this._mobiles;
	}
	reset_mobiles(nb_mobiles){
		this._mobiles = [];
		var i;
		if(nb_mobiles%2==0){
			for (i=0;i<nb_mobiles/2;i++){
				this._mobiles.push(new Triangle(intervalle(0 + decalage,c_largeur - decalage), intervalle(0 + decalage,c_hauteur - decalage), intervalle(20,40), intervalle(40,60), intervalle(-1,1), ctx,intervalle(-6,6),intervalle(-6,6),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255))));
			}
			for (i=0;i<nb_mobiles/2;i++){
				this._mobiles.push(new Cercle(intervalle(0 + decalage,c_largeur - decalage), intervalle(0 + decalage,c_hauteur - decalage), intervalle(10,30), 0, ctx,intervalle(-6,6),intervalle(-6,6),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255))));
			}
		} else{
			for (i=0;i<nb_mobiles/2-1;i++){
				this._mobiles.push(new Triangle(intervalle(0 + decalage,c_largeur - decalage), intervalle(0 + decalage,c_hauteur - decalage), intervalle(20,40), intervalle(40,60), intervalle(-1,1), ctx,intervalle(-6,6),intervalle(-6,6),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255))));
			}
			for (i=0;i<nb_mobiles/2;i++){
				this._mobiles.push(new Cercle(intervalle(0 + decalage,c_largeur - decalage), intervalle(0 + decalage,c_hauteur - decalage), intervalle(10,30), 0, ctx,intervalle(-6,6),intervalle(-6,6),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255))));
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
				this._murs.push(new Mur(intervalle(0 + decalage/3,c_largeur - decalage/3), intervalle(0 + decalage/3,c_hauteur - decalage/3), intervalle(30,70), intervalle(200,300), 0 , ctx, Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),intervalle(0.8,1.2)));
			}else {
				this._murs.push(new Mur(intervalle(0 + decalage/3,c_largeur - decalage/3), intervalle(0 + decalage/3,c_hauteur - decalage/3), intervalle(30,70), intervalle(200,300), Math.PI/2, ctx, Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),Math.trunc(intervalle(0,255)),intervalle(0.8,1.2)));
			}
		}
	}

	collision(){
		var that = this

		this._mobiles.forEach(function(mobile) {
	  		if (mobile.get_x()>that._c_largeur || mobile.get_x()<0){
	  			mobile.set_vx(-mobile.get_vx());
	  			}
	  		if (mobile.get_y()>that._c_hauteur || mobile.get_y()<0){
	  			mobile.set_vy(-mobile.get_vy());
	  			}
	  		that._murs.forEach(function(mur) {
		  		if(mur._orientation==0){	
		  			if (mobile.get_x()>mur.get_x()-mur._largeur/2 && mobile.get_x()<(mur.get_x()+mur._largeur/2) && mobile.get_y()>mur.get_y()-mur._hauteur/2 && mobile.get_y()<(mur.get_y()+mur._hauteur/2) ) {
		  				if(mobile.get_x()-mobile.get_vx()<mur.get_x()-mur._largeur/2 || mobile.get_x()-mobile.get_vx()>(mur.get_x()+mur._largeur/2)){
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
		  			if (mobile.get_x()>mur.get_x()-mur._hauteur/2 && mobile.get_x()<(mur.get_x()+mur._hauteur/2) && mobile.get_y()>mur.get_y()-mur._largeur/2 && mobile.get_y()<(mur.get_y()+mur._largeur/2) ) {
		  				if(mobile.get_x()-mobile.get_vx()<mur.get_x()-mur._hauteur/2 || mobile.get_x()-mobile.get_vx()>(mur.get_x()+mur._hauteur/2)){
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
	}

	execute(dt){
		ctx.clearRect(0,0,this._c_largeur,this._c_hauteur);
	    pong.get_mobiles().forEach(function(element) {
	  		element.deplace(dt);
	  		element.dessine();
			});
	    pong.get_murs().forEach(function(element) {
	  		element.dessine();
			});
	    pong.collision();
	}
}