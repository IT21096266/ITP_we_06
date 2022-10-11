import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AddressForm, AddressList, AddressUpdateForm, Home, LoginPage } from './pages'
const Routers = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainContainer />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/createItem" element={<CreateContainer />} />
      <Route path="/address" element={<AddressForm />} />
      <Route path="/addressList" element={<AddressList getAddressID={ getIDHandler } />} />
      <Route path="/addressUpdate" element={<AddressUpdateForm id={ID} setID={setID} />} />
    </Routes>
  )
}

export default Routers