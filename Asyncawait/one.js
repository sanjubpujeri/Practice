let Goformovie = (success, failure)=>{
    let money = 1600;
    money>1000? success("buy tiket and watch movie"): failure("Go to PG");
}

Goformovie ((msg)=>{
    console.log(msg);
},

(error)=>{
    console.log(error);

});