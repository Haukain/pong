export class Couleur{
	constructor(r =0,v =250,b =250){
		this._rouge = r;
		this._vert = v;
		this._bleu = b;
		this._forme;
	}

	//Get
	getCouleur(){
		col = [this._rouge,this._vert,this._bleu]
		return col;
	}
	getRouge(){
		return this._rouge;
	}
	getVert(){
		return this._vert;
	}
	getBleu(){
		return this._bleu;
	}
	setCouleur(r,g,b){
		this._rouge = r;
		this._vert = g;
		this._bleu = b;
	}
	//Set
	setForme(f){
		this._forme = f;
	}
}
