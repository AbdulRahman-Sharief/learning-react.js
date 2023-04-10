import './index.css';
import Employee from './Components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'AbdulRahman',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ])
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
                <Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img} />
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
