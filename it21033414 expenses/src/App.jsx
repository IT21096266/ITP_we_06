import React from 'react'
import { Route, Routes, useNavigate,  } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { MainContainer, CreateContainer, Navbar, Footer } from './components'
import { AddressForm, AddressList, AddressUpdateForm, Home, LoginPage } from './pages'
import styles from './Styles/styles'

//Expenses
import {ExpenseForm, ExpenseList, ExpenseUpdateForm} from './pages'

//Customers
import {CustomerForm, CustomerList, CustomerUpdateForm} from './pages'

const App = () => {

  const [ID, setID] = useState("")
  const navigate = useNavigate()
  const getIDHandler = (id) =>{ 
      console.log("In the App: ", id)
      setID(id)
      navigate('/addressUpdate')
  }
const getExpenseIDHandler = (id) =>{ 
    console.log("In the App: ", id)
    setID(id)
    navigate('/expenseUpdate')
}

const getCustomerIDHandler = (id) =>{ 
  console.log("In the App: ", id)
  setID(id)
  navigate('/customerUpdate')
}


  return (
    <AnimatePresence>
      <div className='bg-primary w-full overflow-hidden'>

        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <main className='mt-1 p-8 w-full '>
          <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Routes>
                  <Route path="/*" element={<MainContainer />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/createItem" element={<CreateContainer />} />
                  <Route path="/address" element={<AddressForm />} />
                  <Route path="/addressList" element={<AddressList getAddressID={ getIDHandler } />} />
                  <Route path="/addressUpdate" element={<AddressUpdateForm id={ID} setID={setID} />} />

                  <Route path="/expense" element={<ExpenseForm />} />
                  <Route path="/expenseList" element={<ExpenseList getExpenseID={ getExpenseIDHandler } />} />
                  <Route path="/expenseUpdate" element={<ExpenseUpdateForm id={ID} setID={setID} />} />

                  <Route path="/customer" element={<CustomerForm />} />
                  <Route path="/customerList" element={<CustomerList getCustomerID={ getCustomerIDHandler } />} />
                  <Route path="/customerUpdate" element={<CustomerUpdateForm id={ID} setID={setID} />} />


                </Routes>
              </div>
            </div>
        </main>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>

      </div>

    </AnimatePresence>
  )
}

export default App