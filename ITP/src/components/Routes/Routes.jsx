import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AddressForm, AddressList, AddressUpdateForm, Home, LoginPage, SignUpPage, SupplierForm, SupplierList, SupplierUpdate } from '../../pages'
import { MainContainer, CreateContainer } from '../index'

const AppRoutes = () => {

  return (
    <Routes>
      {(true) ? (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/createItem" element={<CreateContainer />} />
          <Route path="/address" element={<AddressForm />} />
          <Route path="/addressUpdate" element={<AddressUpdateForm  />} />
          <Route path="/addressList" element={<AddressList />} />
          <Route path="addressList/addressUpdate/:addressID" element={<AddressUpdateForm  />} />
          <Route path="/supplierForm" element={<SupplierForm />} />
          <Route path="/supplierList" element={<SupplierList />} />
          <Route path="/supplierUpdate" element={<SupplierUpdate />} />
          <Route path="supplierList/supplierUpdate/:supID" element={<SupplierUpdate />} />

          {/* Have to remove when login and singin done */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
        </>   
      ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </>
      )}
      
      <Route path="/*" element={<MainContainer />} />
    </Routes>
  )
}

export default AppRoutes