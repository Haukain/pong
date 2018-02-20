import { assert,inInterval } from "./utils.js";

export class EntreeNumerique{
  constructor(texte,soustexte,fun,min=0,max=100,integer=true){
    this._texte=texte;
    this._soustexte=soustexte;
    this._fun=fun;
    this._min=min;
    this._max=max;
    this._integer=integer;
    //wrapper
    this._wrapper = document.createElement("DIV");
    this._wrapper.className = "boite_entree";
    let inputId = "NumInp-"+Math.round(Math.random()*10000);
    //texte
    this._texteLabel = document.createElement("LABEL");
    this._texteLabel.htmlFor = inputId;
    this._texteLabel.textContent = this._texte;
    this._wrapper.appendChild(this._texteLabel);
    //Input
    this._input = document.createElement("INPUT");
    this._input.id = inputId;
    this._wrapper.appendChild(this._input);
    //suoustexte
    this._soustexteLabel = document.createElement("LABEL");
    this._soustexteLabel.htmlFor = inputId;
    this._soustexteLabel.textContent = this._soustexte;
    this._wrapper.appendChild(this._soustexteLabel);
    //function
    let that = this;
    this._input.addEventListener("keydown",(e)=>{
      if (e.keyCode != 13) return;
      let str = that._input.value;
      assert(!isNaN(str),"not a number");
    	let val = that._integer?parseInt(str):parseFloat(str);
      assert(inInterval(val,that._min,that._max),"out of range");
      that._fun(val);
    },false);
  }
  setTexte(t){
    this._texte=t;
    this._texteLabel.textContent=this._texte;
  }
  setSoustexte(t){
    this._soustexte=t;
    this._soustexteLabel.textContent=this._soustexte;
  }
  setAction(f){
    this._fun=f;
  }
  getElement(){
    return this._wrapper;
  }
  get element(){
    return this.getElement();
  }
}
