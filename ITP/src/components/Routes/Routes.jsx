import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AddressForm, AddressList, AddressUpdateForm, Home, LoginPage, SignUpPage, StockList, StockForm, StockUpdateForm, StockSearch} from '../../pages'
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
          <Route path="/stocklist" element={<StockList/>}/>
          <Route path="/stockform" element={<StockForm/>}/>
          <Route path='/stockupdateform' element={<StockUpdateForm/> }/>
          <Route path="/stocklist/stockupdateform/:stockID" element={<StockUpdateForm/> }/>
          <Route path="/stocksearch" element={<StockSearch/>}/>

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