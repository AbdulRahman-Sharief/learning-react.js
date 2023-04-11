import './index.css';
import Employee from './Components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 7,
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    console.log('Update Employee inside of app.js');
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?

        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }} />
          <div className='flex flex-wrap justify-center'>

            {employees.map((employee) => {
              return (
                <Employee updateEmployee={updateEmployee}
                  key={employee.id} id={employee.id} name={employee.name} role={employee.role} img={employee.img} />
              );
            })}
          </div>

        </>
        :
        <p>You cannot see the employees</p>

      }
    </div >
  );
}

export default App;
