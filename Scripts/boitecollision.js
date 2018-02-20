export class BoiteCollision{
  constructor(x,y,l,h){
    let r = Math.max(l,h);
    this.haut = y+r;
    this.bas = y-r;
    this.gauche = x-r;
    this.droite = x+r;
  }
}
