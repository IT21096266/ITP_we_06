import React from 'react'
import { Route, Routes, useNavigate,  } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { MainContainer, CreateContainer, Navbar, Footer } from './components'
import { AddressForm, AddressList, AddressUpdateForm, Home, LoginPage } from './pages'
import styles from './Styles/styles'

const App = () => {

  const [ID, setID] = useState("")
  const navigate = useNavigate()
  const getIDHandler = (id) =>{ 
      console.log("In the App: ", id)
      setID(id)
      navigate('/addressUpdate')
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