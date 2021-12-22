let employees = [
    { id: 101, name: "Rahul Gandhi", sal: 45000 },
    { id: 102, name: "Priyanka Gandhi", sal: 55000 },
  ];
  
  function Sanju(){
      let tbody= document.getElementById("table_body");
      let rows = "";
      for(emp of employees){
          rows = rows + `<tr>
          <td>${emp.id}</td>
          <td>${emp.name}</td>
          <td>${emp.sal}</td>
          </tr>`;
      }
      tbody.innerHTML = rows;
  }