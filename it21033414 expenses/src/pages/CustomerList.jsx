import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import CustomerDataService from '../services/customer.services'
import styles from '../Styles/styles'
import Helmet from "../components/Helmet/Helmet";

const CustomerList = ({getCustomerID}) => {

    const [customer, setCustomer] = useState([])

    const navigate = useNavigate()              // Navigate

    useEffect(() => {
        getCustomer();
    }, [])
    
    const getCustomer = async() => {
        const data = await CustomerDataService.getAllCustomer()
        console.log(data.docs)
        setCustomer(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

//Delete Customer Details
    const deleteHandler = async (id) => {
        await CustomerDataService.deleteCustomer(id)
        alert("Customer Deleted successfully!")
        getCustomer()
    }
    
// navigate to /contacts
const navigateCustomerForm = () => {
    navigate('/customer');
    };

return (
    <Helmet title="Customer List">
        <section id='CustomerList' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 bg-discount-gradient rounded-md`}>
                <div class="overflow-x-auto relative">
                    <table className= {`${styles.ALtable}`}>
                        <thead className= {`${styles.ALthread}`}>
                            <tr>
                                <th scope="col" className= {`${styles.ALth}`}>
                                    <button className= {`${styles.ALbtn} font-semibold`} onClick={ navigateCustomerForm }>
                                        Add New Customer Details
                                    </button>
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Customer ID
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Customer Name
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>NIC
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Email
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Age
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Contact Number
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>City
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {customer.map((doc, index) => {
                                return(
                                    
                                    <tr key={doc.id}>
                                        <td className= {`${styles.ALtd}`}>{index + 1}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.cId}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.name}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.nic}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.email}</td>  
                                        <td className= {`${styles.ALtd}`}>{doc.age}</td> 
                                        <td className= {`${styles.ALtd}`}>{doc.phone}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.address}</td>
                                        <td>
                                            <button className= {`${styles.ALbtn}`} onClick={(e) => getCustomerID(doc.id)}>
                                                Edit
                                            </button>&nbsp;&nbsp;
                                            <button  className= {`${styles.ALbtn}`} onClick={(e) => deleteHandler(doc.id)}>
                                                Delete
                                            </button>
                                        </td>                        
                                    </tr>
                                    )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </Helmet>
  )
}

export default CustomerList