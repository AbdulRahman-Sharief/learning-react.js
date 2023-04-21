import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../share';
import AddCustomer from '../Components/AddCustomer';

export default function Customers() {
    const [customers, setCustomers] = useState();
    const [show, setShow] = useState(false);
    function toggleShow() {
        setShow(!show);
    }
    useEffect(() => {
        console.log('Fetching ...')
        const url = baseUrl + 'api/customers/';
        fetch(url).then((Response) => {
            return Response.json();
        }).then((data) => {
            setCustomers(data.customers);
            // console.log(data.customers);
        })
    }, []);
    function newCustomer(name, industry) {
        const data = { name, industry };
        const url = baseUrl + 'api/customers/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json();
        }).then((data) => {
            toggleShow();
            setCustomers([...customers, data.customers]);
        }).catch(e => console.log(e))
    }
    return (
        <>
            <h1>Hello are our customers!</h1>

            {customers ?

                customers.map((customer) => {
                    return (
                        <div className='m-2' key={customer.id}>
                            <Link to={"/customers/" + customer.id} >
                                <button className="no-underline px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" >

                                    {customer.name}
                                </button>
                            </Link>
                        </div>
                    )
                }) : null
            }

            <AddCustomer newCustomer={newCustomer} show={show} toggleShow={toggleShow} />
        </>
    )
}