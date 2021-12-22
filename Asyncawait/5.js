let employees = [
    { id: 101, name: "Rahul Gandhi", sal: 45000 },
    { id: 102, name: "Priyanka Gandhi", sal: 55000 },
  ];

  let creatEmployee = (emp)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      employees.push(emp);
      let flag=true;
      flag?resolve("success..."): reject("Enabe to insert");

    },3000);
  });
};
      
let getEmployees = ()=>{
  setTimeout(()=>{
    let rows= "";
    employees.forEach((employee)=>{
      rows = rows + `<tr><td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.sal}</td>
      </tr>`;
    })
document.getElementById("sanju").innerHTML = rows;
  }, 1000);
};

/*creatEmployee({id:103, name:"Sania Gandhi", sal: 55000})
.then((success)=>{
  console.log(success);
  getEmployees();
})
  
.catch((err)=>{
  console.log(err);
});*/


let exeDummy = async()=>{
  await creatEmployee({id: 103, name: "Sonia Gandhi", sal:60000});
  getEmployees();
};
exeDummy();









