let sum = (sanju, balaji)=>{
    console.log(sanju+balaji);
}

let calculate = (a,b, callback)=>{
    callback(a,b);
};

calculate(20,30, sum);

