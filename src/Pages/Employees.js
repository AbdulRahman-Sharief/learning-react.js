import '../index.css';
import Employee from '../Components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../Components/AddEmployee';
import EditEmployee from '../Components/EditEmployee';
import Header from '../Components/Header';

function Employees() {

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

    function newEmployee(name, role, img) {
        const newEmployee = {
            id: uuidv4(),
            name,
            role,
            img,
        }
        setEmployees([...employees, newEmployee]);
        console.log('hello from app.js add employee');
    }



    const showEmployees = true;
    return (
        <>
            {
                showEmployees ?

                    <>

                        < div className='flex flex-wrap justify-center my-2' >

                            {
                                employees.map((employee) => {

                                    const editEmployee = <EditEmployee updateEmployee={updateEmployee} name={employee.name} role={employee.role} id={employee.id} />;


                                    return (
                                        <Employee updateEmployee={updateEmployee}
                                            key={employee.id} id={employee.id} name={employee.name} role={employee.role} img={employee.img} editEmployee={editEmployee} />
                                    );
                                })
                            }
                        </div >
                        <AddEmployee newEmployee={newEmployee} />
                    </>
                    :
                    <p>You cannot see the employees</p>

            }
        </>
    );
}

export default Employees;
