import { useParams, Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import NotFound from '../Components/NotFound';
import { baseUrl } from '../share';

export default function Customer() {
    const { id } = useParams();
    const Navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [tempCustomer, setTempCustomer] = useState();
    const [changed, setChanged] = useState(false);
    const [error, setError] = useState();
    const [notFound, setNotFound] = useState();

    // useEffect(() => {
    //     console.log('customer', customer);
    //     console.log('tempCustomer', tempCustomer);
    //     console.log(changed);
    // })

    useEffect(() => {

        const url = baseUrl + 'api/customers/' + id;
        fetch(url).then((response) => {
            if (response.status === 404) {
                //redirect to 404 page 
                setNotFound(true);

                //render a 404 component in this page

            }

            if (!response.ok) {

                throw new Error('Something went wrong , try again later ...')
            };
            return response.json();
        }).then((data) => {
            setCustomer(data.customer);
            setTempCustomer(data.customer);
            setError(undefined);

        }).catch((e) => {
            setError(e.message);
        });
    }, [id]);
    function updateCustomer(e) {
        e.preventDefault();
        const url = baseUrl + 'api/customers/' + id;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(tempCustomer)
        }).then((response) => {

            if (!response.ok) { throw new Error('Something went wrong ...') }
            return response.json();
        }).then((data) => {
            setChanged(false);
            setCustomer(data.customer);

            setError(undefined);

        }).catch((e) => {

            setError(e.message);
        })
    }
    useEffect(() => {
        if (!tempCustomer) return;
        if (!customer) return;



        let objIsEqual = false;
        const tempCustomerKeys = Object.keys(tempCustomer).sort();
        const customerKeys = Object.keys(customer).sort();
        if (tempCustomerKeys.length !== customerKeys.length) {

            setChanged(!objIsEqual);

        } else {
            const areEqual = tempCustomerKeys.every((key, index) => {
                const objValue1 = tempCustomer[key];
                const objValue2 = customer[customerKeys[index]];
                return objValue1 === objValue2;
            });
            if (areEqual) {
                objIsEqual = true;


                setChanged(!objIsEqual);
            } else {


                setChanged(!objIsEqual);
            }
        }
    });

    // function compareCustomers(obj1, obj2) {
    //     console.log(obj1);
    //     console.log(obj2);

    //     let objIsEqual = false;
    //     const obj1Keys = Object.keys(obj1).sort();
    //     const obj2Keys = Object.keys(obj2).sort();
    //     if (obj1Keys.length !== obj2Keys.length) {
    //         console.log(objIsEqual);
    //         setChanged(!objIsEqual);

    //     } else {
    //         const areEqual = obj1Keys.every((key, index) => {
    //             const objValue1 = obj1[key];
    //             const objValue2 = obj2[obj2Keys[index]];
    //             return objValue1 === objValue2;
    //         });
    //         if (areEqual) {
    //             objIsEqual = true;
    //             console.log(objIsEqual);

    //             setChanged(!objIsEqual);
    //         } else {
    //             console.log(objIsEqual);

    //             setChanged(!objIsEqual);
    //         }
    //     }
    // };
    return (
        <div className='p-3'>
            {notFound ? <p>The customer with id {id} was not found </p> : null}
            {customer ?

                <div>
                    <form id='customer' className="w-full max-w-sm" onSubmit={updateCustomer} >
                        {/* <p className='m-2 block px-2' >ID : {tempCustomer.id} </p> */}
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/4">

                                <label htmlFor='name' >Name</label>
                            </div>
                            <div className="md:w-3/4">
                                <input id='name' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type='text' value={tempCustomer.name} onChange={(e) => {
                                    setTempCustomer({
                                        ...tempCustomer
                                        , name: e.target.value
                                    })

                                }} />
                            </div>


                        </div>

                        <div className="md:flex md:items-center mb-6">

                            <div className="md:w-1/4">

                                <label htmlFor='industry' >Industry</label>
                            </div>

                            <div className="md:w-3/4">

                                <input id='industry' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type='text' value={tempCustomer.industry} onChange={(e) => {
                                    setTempCustomer({
                                        ...tempCustomer
                                        , industry: e.target.value
                                    })

                                }} />
                            </div>
                        </div>
                    </form>
                    {changed ?
                        <div className='mb-2'>
                            <Button variant='secondary' className='mr-2' onClick={(e) => {
                                setTempCustomer({ ...customer })
                                setChanged(false)
                            }} >Discard</Button>

                            <Button form='customer' variant='primary'  >Save</Button>
                        </div>

                        : null}
                    <div>

                        <Button variant="dark" onClick={(e) => {
                            const url = baseUrl + 'api/customers/' + id

                            fetch(url, {
                                method: 'DELETE', headers: {
                                    'Content-Type': 'application/json'
                                }
                            }).then((response) => {
                                if (!response.ok) {
                                    throw new Error('Something went wrong');
                                }
                                //assume things going well 
                                // setError(undefined);
                                Navigate('/customers');
                            }).catch(e => setError(e.message))
                        }} >Delete</Button>
                    </div>
                </div>
                : null}
            {error ? <p>{error}</p> : null}
            <br />
            <Link to='/customers/'>
                <button className="no-underline px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">

                    ← Go back
                </button>
            </Link>
        </div>
    )
}