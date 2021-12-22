let calculate = (a,b, operation)=>{
    let result = "";
    if (operation == "sum"){
        result = a+b;
    }
    if (operation =="mul"){
        result = a*b;
    }
    return result;
}

let a = calculate(10,20, "sum")
console.log(a);

let b= calculate(20,30, "mul");

console.log(b);

