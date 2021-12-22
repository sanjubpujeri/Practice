let employees = [
    { id: 101, name: "Rahul Gandhi", sal: 45000 },
    { id: 102, name: "Priyanka Gandhi", sal: 55000 },
  ];

  let creatEmployee = (emp)=>{
       return new Promise((resolve, reject)=>{
           setTimeout(()=>{
               employees.push(emp);
               let flag = true;
               flag? resolve("success"):reject ("Unable to insert");
       }, 3000);
    });
};

let getEmployees = ()=>{
    setTimeout(()=>{
        let rows =  "";
        employees.forEach((employee)=>{
            rows = rows + `<tr><td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.sal}</td>
            </tr>`;
        });
        document.getElementById("Sanju").innerHTML = rows;
    },5000);
}

/*creatEmployee({id:105, name: "Sanju Pujeri", sal : 70000})
.then((success)=>{
    console.log(success);
    getEmployees();
})

.catch((err)=>{
    console.log(err);
});*/

let dummyEx = async()=>{
 await creatEmployee({id :103, name : "Blajai", sal : 80000}, {id: 104, name :"Sanju", sal : 90000})
 getEmployees();

}
dummyEx();
dummyEx();