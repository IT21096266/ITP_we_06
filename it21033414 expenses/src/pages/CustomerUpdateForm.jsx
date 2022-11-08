import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { async } from '@firebase/util'
import { NavLink, useNavigate } from 'react-router-dom'
import CustomerDataService from '../services/customer.services'
import styles from '../Styles/styles'
import Helmet from "../components/Helmet/Helmet";


const CustomerUpdateForm = ({id, setAD}) => {

    const navigate = useNavigate()              // Navigate

    const [cId, setCId] = useState("")
    const [name, setName] = useState("")
    const [nic, setNic] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState()
    const [message, setMessage] = useState({error: false, msg: ""})

    const [ID, setID] = useState("")    // To Navigate

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const newCustomer ={
            cId,
            name,
            nic,
            age,
            email,
            phone,
            address,
        }
        console.log(newCustomer)
        
        try{
            if(id !== undefined && id !== ""){
                await CustomerDataService.updateCustomer(id, newCustomer)
                alert("Updated successfully!")
                navigate('/customerList')
                setAD("")
                setID("")
            }else{
                alert("ERROR!")
                navigate('/customerUpdate')
            }
        }catch (err){
            setMessage({error: false, msg: err.message})
        }

    }

// Fetch data from firestore to update
    const editHandler = async () => {
        setMessage("")
        try{
            const docSnap = await CustomerDataService.getCustomer(id)
            console.log("Got the Data: ", docSnap.data())
            setCId(docSnap.data().cId)
            setName(docSnap.data().name)
            setNic(docSnap.data().nic)
            setAge(docSnap.data().age)
            setEmail(docSnap.data().email)
            setPhone(docSnap.data().phone)
            setAddress(docSnap.data().address)
        }catch{
            
        }
    }

    useEffect(() => {
        console.log("Got ID: ", id)
         if (id !== undefined && id !== ""){
            editHandler()
            console.log("Check ", id)
        }
    }, [id])

return (
    <Helmet title="Customer Form">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-white">Update Customer Details</h3>
                    <p class="mt-1 text-sm text-dimWhite">
                        Add Customer with valid Customer ID(NIC Number).
                    </p>
                    </div>
                </div>

                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit} className='bg-discount-gradient'>
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="cId" class="formLable">Customer ID</label>
                            <input type="text" name="cId" id="cId" placeholder='NIC Number'maxlength="10" defaultValue={ cId } onSelect={(e) =>{setCId(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                            <label for="name" class="formLable">Customer Name</label>
                            <input type="text" name="name" id="name" maxlength="50" defaultValue={ name } onSelect={(e) =>{setName(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>



                            <div class="col-span-6 sm:col-span-3">
                            <label for="nic" class="formLable">Customer NIC</label>
                            <input type="text" name="nic" id="nic" maxlength="10" Value={ nic } onSelect={(e) =>{setNic(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                            <label for="age" class="formLable">Age</label>
                            <input type="text" name="age" id="age" maxlength="15" defaultValue={ age } onSelect={(e) =>{setAge(e.target.value)}} required 
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            
                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label for="email" class="formLable">Customer Personal Email</label>
                            <input type="text" name="email" id="email" maxlength="25" placeholder='Enter Valid Email' defaultValue={ email } onSelect={(e) =>{setEmail(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label for="phone" class="formLable">Customer Contact Number</label>
                            <input type="text" name="phone" id="phone" maxlength="25" placeholder='Enter Valid Contact No' defaultValue={ phone } onSelect={(e) =>{setPhone(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label for="address" class="formLable">City</label>
                            <textarea type="text" name="address" id="address" defaultValue={ address } onSelect={(e) =>{setAddress(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>


                        </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <div class="text-right grid grid-cols-7 gap-4 content-center ...">
                                
                                <button type="submit" className= {`${styles.ALbtn} font-semibold`}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </Helmet>
  )
}

export default CustomerUpdateForm