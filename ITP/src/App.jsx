import React from 'react'
import { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Header, MainContainer, CreateContainer, AddressForm, AddressList, AddressUpdateForm, StockForm, StockList } from './components'
import { AnimatePresence } from 'framer-motion'
import StockUpdateForm from './components/StockUpdateForm'


const App = () => {

  const [stockId, setStockId] = useState("");
  const navigate = useNavigate();
  const getStockIdHandler = (id) =>{
    console.log("the id of document to be edited",id);
    setStockId(id);
    navigate('/stockform')
  }
  return (
    <AnimatePresence>
      <div className= "w-screen h-auto flex flex-col">
        <Header />

        <main className="mt-1 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/address" element={<AddressForm />} />
            <Route path="/addressList" element={<AddressList />} />
            <Route path="/addressUpdate" element={<AddressUpdateForm />} />
            <Route path="/stocklist" element={<StockList/>}/>
            <Route path="/stockform" element={<StockForm/>}/>
            <Route path='/stockupdateform' element={<StockUpdateForm /> }  />
        </Routes>  
      </main>

    </div>
    </AnimatePresence>
  )
}

export default App