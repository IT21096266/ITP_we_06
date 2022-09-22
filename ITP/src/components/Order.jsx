import React from 'react'
import { useState } from 'react'

const order = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [houseNo, setHouseNo] = useState("")
    const [streetName, setSreetName] = useState("")
    const [cityName, setCityName] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [province, setProvince] = useState("")
    const [district, setDistrict] = useState("")
    const [mNumber, setMnumber] = useState("")
    const handleSelect = (e) =>{
        console.log(e)
        setProvince(e)
    }

    return (
        <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Address Log</h3>
            <p class="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive your package.
            </p>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                    <label for="first_name" class="formLable">First name</label>
                    <input type="text" name="first_name" id="first_name" value={ firstName } autocomplete="given-name" class="mt-1 focus:ring-slate-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"/>
                    </div>
    
                    <div class="col-span-6 sm:col-span-3">
                    <label for="last_name" class="formLable">Last name</label>
                    <input type="text" name="last_name" id="last_name" value={ firstName } autocomplete="family-name" class="mt-1 focus:ring-slate-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"/>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                    <label for="house_no" class="formLable">House No</label>
                    <input type="text" name="house_no" id="house_no" value={ firstName } autocomplete="street-address" class="mt-1 focus:ring-slate-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"/>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                    <label for="street_address" class="formLable">Street address</label>
                    <input type="text" name="street_address" id="street_address" value={ firstName } autocomplete="street-address" class="mt-1 focus:ring-slate-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"/>
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="City" class="formLable">City</label>
                    <input type="text" name="City" id="City" value={ firstName } class="mt-1 focus:ring-slate-500 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-gray-800 rounded-md h-8"/>
                    </div>
    
                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="postal_code" class="formLable">ZIP / Postal</label>
                    <input type="text" name="postal_code" id="postal_code" value={ firstName } autocomplete="postal-code" class="mt-1 focus:ring-slate-500 focus:border-slate-700 block w-full shadow-sm sm:text-sm border-gray-800 rounded-md h-8"/>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                    <label for="Provinces" class="formLable">Provinces</label>
                    <select id="Provinces" name="Provinces" autocomplete="Provinces" onSelect={handleSelect} class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-indigo-500 sm:text-sm">
                        <option value="Central">Central Province</option>
                        <option value="Eastern">East Province</option>
                        <option value="Northcentral">Northcentral Province</option>
                        <option value="Northwest">Northwest Province</option>
                        <option value="Northern">North Province</option>
                        <option value="Sabaragamuwa">Sabaragamuwa Province</option>
                        <option value="Southern">South Province</option>
                        <option value="Uva">Uva Province</option>
                        <option value="Western">Western Province</option>
                    </select>
                    </div>
    
                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label for="District" class="formLable">District</label>
                    <input type="text" name="District" id="District" value={ firstName } class="mt-1 focus:ring-slate-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"/>
                    </div>

                    <div class="col-span-8 sm:col-span-4">
                    <label for="tel" class="formLable">Mobile Number</label>
                    <input type="tel" name="tel" id="tel" autocomplete="tel" value={ firstName } placeholder="07xxxxxxxx" pattern="[0-9]{10}" class="mt-1 focus:ring-slate-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md h-8"/>
                    </div>

                </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <div class="text-right grid grid-cols-7 gap-4 content-center ...">
                        <button type="reset" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-slate-500 hover:bg-slate-700 duration-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-300 ">
                            Reset
                        </button>
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-slate-500 hover:bg-slate-700 duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 ">
                         Save
                        </button>
                    </div>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default order