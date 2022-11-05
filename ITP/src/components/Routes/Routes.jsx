import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AddressForm, AddressList, AddressUpdateForm, Home, LoginPage, SignUpPage,Mytickets,Adminticket,TicketForm} from '../../pages'
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
          <Route path="/Mytickets" element={<Mytickets />} />
          <Route path="/Adminticket" element={<Adminticket />} />
          <Route path="/TicketForm" element={<TicketForm />} />
          <Route path="addressList/addressUpdate/:addressID" element={<AddressUpdateForm  />} />

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