let employees = [
    { id: 101, name: "Rahul Gandhi", sal: 45000 },
    { id: 102, name: "Priyanka Gandhi", sal: 55000 },
    {id: 103, name: "sanju", sal: 60000}
  ];

  function sanju(){
      let tbody = document.getElementById("swati");
      let rows = "";
      employees.forEach((emp)=>{
          rows += `<tr> <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
          </tr>`;
      });
      tbody.innerHTML = rows;
  }