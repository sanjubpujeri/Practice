let employees = [
    { id: 101, name: "Rahul Gandhi", sal: 45000 },
    { id: 102, name: "Priyanka Gandhi", sal: 55000 },
  ];

  let createemployees = (emp)=>{
      console.log("test case 123");
      return new promise((resolve, reject)=>{
          setTimeout(()=>{
              employees.push(emp);
              let flag =false;
              flag? resolve("inserted"): reject("failure");
          },3000);
      })
  };

  let getEmployees =()=>{
      setTimeout(()=>{
          let rows = "";
          employees.forEach((employee)=>{
              rows = rows +`<tr><td>${employees.id}</td>
                                <td>${employees.name}</td>
                                <td>${employees.sal}</td>
                            </tr>`;
          });
          document.getElementById("Sanju").innerHTML = rows;
      },1000);
    };

    createemployees({id: 103, name: "Rahul", sal: 60000})
    .then((msg)=>{
        console.log(msg);
        getEmployees();
    })

.catch((err)=>{
    console.log(err);
});


    
