import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import BuyerDataService from '../services/address.services'
import styles from '../Styles/styles'
import Helmet from "../components/Helmet/Helmet";

const AddressList = ({getAddressID}) => {

    const [address, setAddress] = useState([])

    const navigate = useNavigate()              // Navigate

    useEffect(() => {
        getAddress();
    }, [])
    
    const getAddress = async() => {
        const data = await BuyerDataService.getAllAddress()
        console.log(data.docs)
        setAddress(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

//Delete Address
    const deleteHandler = async (id) => {
        await BuyerDataService.deleteAddress(id)
        getAddress()
    }
    
// navigate to /contacts
const navigateAddressForm = () => {
    navigate('/address');
    };

return (
    <Helmet title="Address List">
        <section id='AddressList' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 bg-discount-gradient rounded-md`}>
                
                <div class="overflow-x-auto relative">
                    <table className= {`${styles.ALtable}`}>
                        <thead className= {`${styles.ALthread}`}>
                            <tr>
                                <th scope="col" className= {`${styles.ALth}`}>
                                    <button className= {`${styles.ALbtn} font-semibold`} onClick={ navigateAddressForm }>
                                        Add New Address
                                    </button>
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {address.map((doc, index) => {
                                return(
                                    <tr key={doc.id}>
                                        <td className= {`${styles.ALtd}`}>{index + 1}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.firstName}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.cityName}</td>
                                        <td>
                                            <button className= {`${styles.ALbtn}`} onClick={(e) => getAddressID(doc.id)}>
                                                Edit
                                            </button>
                                        </td>
                                        <td>
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

export default AddressList