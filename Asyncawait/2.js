let Goformovie = new Promise((resolve, reject)=>{
let money = 1600;
if(money>1000){
    resolve("Go to movie");
}else{
    reject("Go to PG");
}
});

Goformovie.then((mesg)=>{
    console.log(mesg);
})

Goformovie.catch((err)=>{
    console.log(err);
});