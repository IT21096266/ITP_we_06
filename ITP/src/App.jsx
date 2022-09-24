import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header, MainContainer, CreateContainer, AddressForm, AddressList, AddressUpdateForm, StockForm, StockList } from './components'
import { AnimatePresence } from 'framer-motion'


const App = () => {
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
            <Route path="/stockform" element={<StockForm/>}/>
            <Route path="/stocklist" element={<StockList/>}/>
        </Routes>  
      </main>

    </div>
    </AnimatePresence>
  )
}

export default App