export function assert(exp,msg){
  if(!exp) throw msg;
}
export function randomFromTo(min, max,integer=false) {
    let r = Math.random() * (max - min) + min;
    if(integer) return Math.round(r);
    else return r;
}

export function inInterval(val,min, max) {
    return val>=min && val<=max;
}
export function getRelativeCoordinates ( e, container) {
    var pos = {}, offset = {}, ref;
    ref = container.offsetParent;
    pos.x = !! e.touches ? e.touches[ 0 ].pageX : e.pageX;
    pos.y = !! e.touches ? e.touches[ 0 ].pageY : e.pageY;
    offset.left = container.offsetLeft;
    offset.top = container.offsetTop;
    while ( ref ) {
      offset.left += ref.offsetLeft;
      offset.top += ref.offsetTop;
      ref = ref.offsetParent;
    }
    return {
      x : pos.x - offset.left,
      y : pos.y - offset.top,
    };
}
