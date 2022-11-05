import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AddressForm, AddressList, AddressUpdateForm, Home, LoginPage, SignUpPage,EmployeeForm,EmployeeList,EmployeeUpdate,EmployeeSalary } from '../../pages'
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
          <Route path="/employee" element={<EmployeeForm />} />
          <Route path="/employeeList" element={<EmployeeList  />} />
          <Route path="/employeeUpdate" element={<EmployeeUpdate  />} />
          <Route path="employeeList/employeeUpdate/:EmployeeID" element={<EmployeeUpdate />} />
          <Route path="employeeSalary" element={<EmployeeSalary/>}/>


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