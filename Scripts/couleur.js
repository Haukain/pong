export class Couleur{
	constructor(r =0,v =250,b =250){
		this._rouge = r;
		this._vert = v;
		this._bleu = b;
		this._forme;
	}

	//Get
	get_color(){
		col = [this._rouge,this._vert,this._bleu]
		return col;
	}
	get_rouge(){
		return this._rouge;
	}
	get_vert(){
		return this._vert;
	}
	get_bleu(){
		return this._bleu;
	}
	set_couleur(r,g,b){
		this._rouge = r;
		this._vert = g;
		this._bleu = b;
	}
	//Set
	set_forme(f){
		this._forme = f;
	}
}
