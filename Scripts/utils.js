export function assert(exp,msg){
  if(!exp) throw msg;
}
export function randomFromTo(min, max) {
    return Math.random() * (max - min) + min;
}

export function inInterval(val,min, max) {
    return val>=min && val<=max;
}
export function select_element() {
	console.log("cc");
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
