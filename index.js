//filter method
let a=[1,2,3,4,5,6,7]
let xy=a.filter((num)=>5<num)
console.log(xy);

//reduce method
let zz=[1,2,3,4,5,6,7]
let hh=zz.reduce((a,b)=>a+b)
console.log(hh);

//map method
let az=[1,2,3,4,5,6]
let ab=az.map((num)=>num*15)
console.log(ab);


//globel and local variabel

function xyz() {
    var ab=15;
    if (true) {
        let ab=16;
        console.log(ab);
        }
    console.log(ab);
    }
   xyz();
  // IIFE funnction
 ( function sum(abc){
      console.log(abc + abc)

}(10))
 (function(x){
    return (function(y){
         console.log(x)
     })(2);
 })(1);