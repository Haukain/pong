export class Bouton{
  constructor(texte,fun){
    this._texte=texte;
    this._fun=fun;
    this._elem = document.createElement("BUTTON");
    let that = this;
    this._elem.addEventListener("click",(e)=>{that._fun(e);},false);
    this._elem.textContent=this._texte;
  }
  //Set
  setTexte(t){
    this._texte=t;
    this._elem.textContent=this._texte;
  }
  setAction(f){
    this._fun=f;
  }
  //Get
  getElement(){
    return this._elem;
  }
  get element(){
    return this.getElement();
  }
}
