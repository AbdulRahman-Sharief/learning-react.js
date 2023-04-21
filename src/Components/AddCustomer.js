import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function AddCustomer(props) {
    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');


    const [show, setShow] = useState(props.show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                onClick={props.toggleShow}
                className="block  m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                + Add Customer
            </button>
            {/* <Button form='editmodal' onClick={handleShow} style={{ color: "white", background: "purple", border: 'purple' }} type='submit' variant="primary">+ Add Employee</Button> */}
            {/* <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">+ Add Employee</button> */}


            <Modal
                show={props.show}
                onHide={props.toggleShow}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setName('');
                        setIndustry('');
                        props.newCustomer(name, industry);
                    }}
                        id='addmodal' className="w-full max-w-sm">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                                    Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder='AbdulRahman Sharief' id="name" type="text" value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }} />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="industry">
                                    Industry
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder='Computing' id="industry" type="text" value={industry}
                                    onChange={(e) => {
                                        setIndustry(e.target.value);
                                    }} />
                            </div>
                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.toggleShow}>
                        Close
                    </Button>
                    {/* <button form='editmodal'>Update</button> */}
                    <Button form='addmodal' style={{ color: "white", background: "purple", border: 'purple' }} type='submit' variant="primary">Add</Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

