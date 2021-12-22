// destructuring concept

const employee = {
    name: "Sanju",
    email: "sanju@gmail.com",
    age : 23,
}
const{name, age} = employee;
console.log(name,  age);


const marks =[10,20,30,50]
const[a,b,c] = marks;
console.log(a,b,c);