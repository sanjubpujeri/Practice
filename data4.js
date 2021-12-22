let employees = [
    { id: 101, name: "Rahul Gandhi", sal: 45000 },
    { id: 102, name: "Priyanka Gandhi", sal: 55000 },
    {id: 103, name: "sanju", sal: 60000}
  ];
let createEmployee = (employee)=>{
    setTimeout(()=>{
        employee.push(employee);
    }, 2000);

};

let getEmployee = ()=>{
    setTimeout(()=>{
        let employeeRows ="";
        employees.forEach((employee)=>{
        employeeRows += `<tr><td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
        </tr>`;
        
    });
    document.getElementById("#table-body").innerHTML = employeeRows;
}, 1000);
};

createEmployee({id: 103, name: "Balaji", sal: 80000});
getEmployee();