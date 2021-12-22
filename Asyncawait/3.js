let doTask = (success, failure)=>{

    let flag=false;
    if(flag){
        success("Hi Sanju successfully inserted need to practice");
}else{
    failure("Unable to insert");
}
};

doTask(
    (msg)=>{
        console.log(msg);
    },
    (err)=>{
        console.log(err);
    }
)