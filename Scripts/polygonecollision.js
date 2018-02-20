function cross(X,Y){
  return X[0]*Y[1]-X[1]*Y[0];
}

export class PolygoneCollision{
  constructor(x,y,points=[]){
    this._x = x;
    this._y = y;
    this._points = points;
  }
  //get
  getPoint(i){
    return this._points[i];
  }
  get points(){
    return this._points;
  }
  get center(){
    return [this._x,this.y];
  }
  //set
  setPoint(i,v){
    this._points[i]=v;
  }
  set center(xy){
    this._x = x[0];
    this.y = y[0];
  }
  //méthodes
  push(x,y){
    if(typeof y != undefined) x=[x,y];
    this._points.push(x);
  }
  translate(x,y){
    this._x += x;
    this._y += y;
    for(let i of this._points){
      i[0]+=x;
      i[1]+=y;
    }
  }
  rotate(a){
    let tx = this._x;
    let ty = this._y;
    this.translate(-tx,-ty);
    for(let i of this._points){
      let x=i[0];
      let y=i[1];
      i[0]=x*Math.cos(a)+y*Math.sin(a);
      i[1]=-x*Math.sin(a)+y*Math.cos(a);
    }
    this.translate(tx,ty);
  }
  giftWrap(p){
    let pv=0;
    for(let i=1;i<this._points.length;i++){
      let v1=[this._points[i][0]-this._points[i-1][0],this._points[i][1]-this._points[i-1][1]];
      let v2=[p[0]-this._points[i-1][0],p[1]-this._points[i-1][1]];
      let v = cross(v1,v2);
      if(!(pv==0 || ((v>0)==(pv>0))))return false;
      pv=v;
    }
    return true;
  }
  collide(c,deux=false){
    let inn = false;
    for(let p of c.points){
      inn = this.giftWrap(p);
      if(inn)break;
    }
    if(deux || inn) return inn;
    return c.collide(this,true);
  }
}
