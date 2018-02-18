export function assert(exp,msg){
  if(!exp) throw msg;
}
export function randomFromTo(min, max) {
    return Math.random() * (max - min) + min;
}

export function inInterval(val,min, max) {
    return val>=min && val<=max;
}
