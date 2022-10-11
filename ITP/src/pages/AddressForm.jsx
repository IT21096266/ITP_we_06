import React from 'react'
import { useState } from 'react'
import { async } from '@firebase/util'
import BuyerDataService from '../services/address.services'
import styles from '../Styles/styles'
import Helmet from "../components/Helmet/Helmet";

const AddressForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [houseNo, setHouseNo] = useState("")
    const [streetName, setSreetName] = useState("")
    const [cityName, setCityName] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [province, setProvince] = useState()
    const [district, setDistrict] = useState("")
    const [mNumber, setMnumber] = useState("")
    const [message, setMessage] = useState({error: false, msg: ""})


    const handleSubmit = async(e) =>{
        e.preventDefault()
        const newAddress ={
            firstName,
            lastName,
            houseNo,
            streetName,
            cityName,
            zipCode,
            province,
            district,
            mNumber,
        }
        console.log(newAddress)
        try{
            await BuyerDataService.addAddress(newAddress)
            alert("Address added successfully!")
            navigate('/address')
        }catch (err){
            setMessage({error: false, msg: err.message})
        }
    }

return (
    <Helmet title="Address Form">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-white">Address Log</h3>
                    <p class="mt-1 text-sm text-dimWhite">
                        Use a permanent address where you can receive your package.
                    </p>
                    </div>
                </div>

                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit} className='bg-discount-gradient'>
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">

                            <div class="col-span-6 sm:col-span-3">
                            <label for="first_name" class="formLable">First name</label>
                            <input type="text" name="first_name" id="first_name" maxlength="10" defaultValue={ firstName } onSelect={(e) =>{setFirstName(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>
            
                            <div class="col-span-6 sm:col-span-3">
                            <label for="last_name" class="formLable">Last name</label>
                            <input type="text" name="last_name" id="last_name" maxlength="15" defaultValue={ lastName } onSelect={(e) =>{setLastName(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                            <label for="house_no" class="formLable">House No</label>
                            <input type="text" name="house_no" id="house_no" maxlength="15" defaultValue={ houseNo } onSelect={(e) =>{setHouseNo(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                            <label for="street_address" class="formLable">Street address</label>
                            <input type="text" name="street_address" id="street_address" maxlength="30" defaultValue={ streetName } onSelect={(e) =>{setSreetName(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label for="City" class="formLable">City</label>
                            <input type="text" name="City" id="City" maxlength="15" defaultValue={ cityName } onSelect={(e) =>{setCityName(e.target.value)}} required 
                                className= {`${styles.ADtxt}`}/>
                            </div>
            
                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label for="postal_code" class="formLable">ZIP / Postal</label>
                            <input type="number" name="postal_code" id="postal_code" maxlength="5" pattern="[0-9]{5}" Value={ zipCode } onSelect={(e) =>{setZipCode(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                            <label for="Provinces" class="formLable">Provinces</label>
                            <select id="Provinces" name="Provinces" Value={ province } onChange={e =>{setProvince(e.target.value)}} placeholder="Select Province" required 
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-indigo-500 sm:text-sm">
                                <option>Central Province</option>
                                <option>East Province</option>
                                <option>Northcentral Province</option>
                                <option>Northwest Province</option>
                                <option>North Province</option>
                                <option>Sabaragamuwa Province</option>
                                <option>South Province</option>
                                <option>Uva Province</option>
                                <option>Western Province</option>
                            </select>
                            </div>
            
                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label for="District" class="formLable">District</label>
                            <input type="text" name="District" id="District" maxlength="20" defaultValue={ district } onSelect={(e) =>{setDistrict(e.target.value)}} required 
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            <div class="col-span-8 sm:col-span-4">
                            <label for="tel" class="formLable">Mobile Number</label>
                            <input type="tel" name="tel" id="tel" defaultValue={ mNumber } maxlength="10" onSelect={(e) =>{setMnumber(e.target.value)}} required placeholder="07xxxxxxxx" pattern="[0-9]{10}" 
                                class="mt-1 block  shadow-sm sm:text-sm border-gray-600 rounded-md h-8 box-border hover:box-content hover:bg-slate-100 duration-500"/>
                            </div>

                        </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <div class="text-right grid grid-cols-7 gap-4 content-center ...">
                                <button type="reset" className= {`${styles.ALbtn} font-semibold `}>
                                    Reset
                                </button>
                                <button type="submit" className= {`${styles.ALbtn} font-semibold`}>
                                    Save
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

export default AddressForm