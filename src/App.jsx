import { useState } from "react";


function App() {
    const [search, setSearch]=useState("");
    const employees = [
  {
    id: 1,
    name: "Raghu",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Amit",
    role: "Backend Developer",
  },
  {
    id: 3,
    name: "Neha",
    role: "UI Developer",
  },
  {
    id: 4,
    name: "Rahul",
    role: "Backend Developer",
  },
  {
    id: 5,
    name: "Priya",
    role: "QA Engineer",
  },
];

    function setHandle(e){
      setSearch(e.target.value);
    }
    const filteredEmployees = employees.filter((employee) =>
     employee.name.toLowerCase().includes(search.toLowerCase()) ||
     employee.role.toLowerCase().includes(search.toLowerCase())
    );
   

  return (
    <div>
      <h1>Employee Management System</h1>

      <button>Add Employee</button>

      <h2>Employees</h2>
      <input type="text" placeholder="Search employee" onChange={setHandle}/>
      <ul>
        {filteredEmployees.length === 0 ? (
  <p>No employees found</p>
) : (
  filteredEmployees.map((employee) => (
    <li key={employee.id}>
      {employee.name} - {employee.role}
    </li>
  ))
)}
      </ul>        
    </div>
  );
}

export default App;