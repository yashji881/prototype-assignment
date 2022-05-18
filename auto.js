const car={
    wheels:4,
    rearLights:2,
    steering:1,
    seatBelts:4,
    radio:1,

}
const audi=Object.create(car);
console.log("audi",audi);


const mercedes=Object.create(car);
console.log("mercedes",mercedes);

function jaguar(n,u){
    this.name=n,
    this.model=u
}
jaguar.prototype.hello=function(){
    console.log(`${this.name}`);
}
let fn1=new jaguar("jaguar1","xf");
fn1.hello();