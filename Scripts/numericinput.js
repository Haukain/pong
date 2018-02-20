import { assert,inInterval } from "./utils.js";

export class NumericInput{
  constructor(text,subtext,fun,min=0,max=100,integer=true){
    this._text=text;
    this._subtext=subtext;
    this._fun=fun;
    this._min=min;
    this._max=max;
    this._integer=integer;
    //wrapper
    this._wrapper = document.createElement("DIV");
    this._wrapper.className = "boite_entree";
    let inputId = "NumInp-"+Math.round(Math.random()*10000);
    //text
    this._textLabel = document.createElement("LABEL");
    this._textLabel.htmlFor = inputId;
    this._textLabel.textContent = this._text;
    this._wrapper.appendChild(this._textLabel);
    //Input
    this._input = document.createElement("INPUT");
    this._input.id = inputId;
    this._wrapper.appendChild(this._input);
    //subtext
    this._subtextLabel = document.createElement("LABEL");
    this._subtextLabel.htmlFor = inputId;
    this._subtextLabel.textContent = this._subtext;
    this._wrapper.appendChild(this._subtextLabel);
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
  setText(t){
    this._text=t;
    this._textLabel.textContent=this._text;
  }
  setSubtext(t){
    this._subtext=t;
    this._subtextLabel.textContent=this._subtext;
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
