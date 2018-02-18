export class Button{
  constructor(text,fun){
    this._text=text;
    this._fun=fun;
    this._elem = document.createElement("BUTTON");
    let that = this;
    this._elem.addEventListener("click",(e)=>{that._fun(e);},false);
    this._elem.textContent=this._text;
  }
  //Set
  set text(t){
    this._text=t;
    this._elem.textContent=this._text;
  }
  set action(f){
    this._fun=f;
  }
  //Get
  get element(){
    return this._elem;
  }
}
