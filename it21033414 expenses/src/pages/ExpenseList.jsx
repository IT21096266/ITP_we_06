import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ExpenseDataService from '../services/expense.services'
import styles from '../Styles/styles'
import Helmet from "../components/Helmet/Helmet";

const ExpenseList = ({getExpenseID}) => {

    const [expense, setExpense] = useState([])

    const navigate = useNavigate()              // Navigate

    useEffect(() => {
        getExpense();
    }, [])
    
    const getExpense = async() => {
        const data = await ExpenseDataService.getAllExpense()
        console.log(data.docs)
        setExpense(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

//Delete Expense
    const deleteHandler = async (id) => {
        await ExpenseDataService.deleteExpense(id)
        alert("Expense Deleted successfully!")
        getExpense()
    }
    
// navigate to /contacts
const navigateExpenseForm = () => {
    navigate('/expense');
    };

return (
    <Helmet title="Expense List">
        <section id='ExpenseList' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 bg-discount-gradient rounded-md`}>
                <div class="overflow-x-auto relative">
                    <table className= {`${styles.ALtable}`}>
                        <thead className= {`${styles.ALthread}`}>
                            <tr>
                                <th scope="col" className= {`${styles.ALth}`}>
                                    <button className= {`${styles.ALbtn} font-semibold`} onClick={ navigateExpenseForm }>
                                        Add New Expense
                                    </button>
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Expense ID
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Expense Type
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Recipt NO
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Amount
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Date
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Description
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Note
                                </th>
                                <th scope="col" className= {`${styles.ALth}`}>Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {expense.map((doc, index) => {
                                return(
                                    
                                    <tr key={doc.id}>
                                        <td className= {`${styles.ALtd}`}>{index + 1}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.eId}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.eType}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.reciptNo}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.amount}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.date}</td>   
                                        <td className= {`${styles.ALtd}`}>{doc.description}</td>
                                        <td className= {`${styles.ALtd}`}>{doc.note}</td>
                                        <td>
                                            <button className= {`${styles.ALbtn}`} onClick={(e) => getExpenseID(doc.id)}>
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

export default ExpenseList