import React, { useEffect, useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { AddressUpdateForm, AddressForm } from './index'
import BuyerDataService from '../services/address.services'
import styles from '../styles'

const AddressList = () => {

    const [address, setAddress] = useState([])

    const [ad, setAD] = useState("")            // Send edit data to AddressUpdateForm 
    
    const navigate = useNavigate()
    const getAddressID = (id) =>{
        console.log("To Edit: ", id)
        setAD(id)
        navigate('/addressUpdate')
    }

    useEffect(() => {
        getAddress();
    }, [])
    
    const getAddress = async() => {
        const data = await BuyerDataService.getAllAddress()
        console.log(data.docs)
        setAddress(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const deleteHandler = async (id) => {

        await BuyerDataService.deleteAddress(id)
        getAddress()
    }
    
// navigate to /contacts
    const navigateAddressForm = () => {
        navigate('/address');
      };

    return (
        
        <div class="overflow-x-auto relative">
            <table className= {`${styles.ALtable}`}>
                <thead className= {`${styles.ALthread}`}>
                    <tr>
                        <th scope="col" className= {`${styles.ALth}`}>
                            <button className= {`${styles.ALbtn}`} onClick={ navigateAddressForm }>
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
            <Routes>
                <Route path= "/addressUpdate" element={<AddressUpdateForm />} />
                <Route path="/address" element={<AddressForm />} />
            </Routes>
            <div></div>
        </div>
  )
}

export default AddressList