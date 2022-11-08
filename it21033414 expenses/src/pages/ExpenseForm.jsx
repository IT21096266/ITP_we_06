import React from 'react'
import { useState } from 'react'
import { async } from '@firebase/util'
import { NavLink, useNavigate } from 'react-router-dom'
import ExpenseDataService from '../services/expense.services'
import styles from '../Styles/styles'
import Helmet from "../components/Helmet/Helmet";

const ExpenseForm = () => {

    const navigate = useNavigate()              // Navigate

    const [eId, setEID] = useState("")
    const [eType, setEType] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")
    const [reciptNo, setReciptNo] = useState("")
    const [note, setNote] = useState()
    const [message, setMessage] = useState({error: false, msg: ""})

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const newExpense ={
            eId,
            eType,
            description,
            // date:'2022/11/06',
            date,
            amount,
            reciptNo,
            note,
        }
        console.log(newExpense)
        console.log(date)
        try{
            await ExpenseDataService.addExpense(newExpense)
            alert("Expense Added successfully!")
            navigate('/expenseList');
        }catch (err){
            setMessage({error: false, msg: err.message})
        }
    }

return (
    <Helmet title="Expense Form">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-white">Add New Expense</h3>
                    <p class="mt-1 text-sm text-dimWhite">
                        Add Expenses with valid Recipt NO.
                    </p>
                    </div>
                </div>

                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit} className='bg-discount-gradient'>
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">

                            <div class="col-span-6 sm:col-span-3">
                            <label for="eId" class="formLable">Expense ID</label>
                            <input type="text" name="eId" id="eId" placeholder='EX:exxxxx'maxlength="10" defaultValue={ eId } onSelect={(e) =>{setEID(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>
            
                            <div class="col-span-6 sm:col-span-3">
                            <label for="eTypes" class="formLable">Expense Type</label>
                            <select id="eTypes" name="eTypes" Value={ eType } onChange={e =>{setEType(e.target.value)}} placeholder="Select Expense Type" required 
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-indigo-500 sm:text-sm">
                                <option defaultValue>--Select Expense Type--</option>
                                <option value="Maintainance">Maintainance</option>
                                <option value="Inventory">Inventory</option>
                                <option value="Electricity"> Electricity</option>
                                <option value="Internet">Internet</option>
                                <option value="Employee Facility">Employee Facility</option>
                                <option value="Other">Other</option>
                            </select>
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label for="reciptNo" class="formLable">Recipt No</label>
                            <input type="text" name="reciptNo" id="reciptNo" maxlength="10" Value={ reciptNo } onSelect={(e) =>{setReciptNo(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label for="amount" class="formLable">Amount (RS)</label>
                            <input type="text" name="amount" id="amount" maxlength="15" defaultValue={ amount } onSelect={(e) =>{setAmount(e.target.value)}} required 
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            
                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label for="date" class="formLable">Date</label>
                            <input type="date" name="date" id="date" defaultValue={ date } onChange={(e) =>{setDate(e.target.value)}} required  
                                className= {`${styles.ADtxt}`}/>
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                            <label for="description" class="formLable">Description (Shop Information)</label>
                            <textarea type="text" name="description" id="description" maxlength="50" defaultValue={ description } onSelect={(e) =>{setDescription(e.target.value)}} required  
                                className= {`${styles.ADtxt}`} />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                            <label for="note" class="formLable">Note</label>
                            <textarea type="text" name="note" id="note" maxlength="20" defaultValue={ note } onSelect={(e) =>{setNote(e.target.value)}} required 
                                className= {`${styles.ADtxt}`}/>
                            </div>

                        </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <div class="text-right grid grid-cols-7 gap-4 content-center ...">
                                
                                <button type="submit" className= {`${styles.ALbtn} font-semibold`}>
                                    Submit
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

export default ExpenseForm