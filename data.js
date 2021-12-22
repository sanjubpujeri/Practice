let students = [ {id:10, name:"Sanju", marks:85},{id:11, name:"Ajay", marks:95},{id:12, name:"Rijo", marks:98},{id:13, name:"Girish", marks:99}];

function display(){
    let tbody = document.getElementById("table_body");
    let rows ="";
    for(student of students){
        rows = rows+ `<tr><td>${student.id}</td>
        td>${student.name}</td>
        td>${student.marks}</td>
        </tr>`;
    }
    tbody.innerHTML = "rows";
}