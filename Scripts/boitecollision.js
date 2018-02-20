import { inInterval } from "./utils.js";
export class BoiteCollision{
  constructor(x,y,l,h){
    let r = Math.max(l,h);
    this.haut = y+r;
    this.bas = y-r;
    this.gauche = x-r;
    this.droite = x+r;
  }
  collision(b,deux=false){
    let colY = inInterval(b.haut,this.bas,this.haut) || inInterval(b.bas,this.bas,this.haut);
    let colX = inInterval(b.droite,this.gauche,this.droite) || inInterval(b.gauche,this.gauche,this.droite);
    if(deux || (colY && colX))return colY && colX;
    else return b.collision(this,true);
  }
}
