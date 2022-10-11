import styles from '../styles';
import React from 'react'
import {Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react'
import StockDataService from '../services/StockServices'
import {StockUpdateForm,StockForm} from './index'

const StockList = (getStockId) => {
  const [Stock, setStocks] = useState([]);
  const [st,setSD]=useState("");

  useEffect(()=> {
      getStock();
  },[]);
  
  const getStock = async() => {
      const data = await StockDataService.getAllStocks();
      console.log(data.docs);
      setStocks(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
  };

  const deleteHandler = async (id) => {
      await StockDataService.deleteStock(id);
      getStock();
  }

  //Navigate to stock form
  const navigate = useNavigate();
  const navigateStockForm = () => {
    navigate('/stockform');
  };

  const navigateStockUpdateForm=()=>{
    navigate('/stockupdateform');
  }

  return (
    <div>
      <button className={`${styles.SLbtn }`} onClick={navigateStockForm} >Add New Stock</button><br></br><br></br>
     {/* <pre>{JSON.stringify(Stock, undefined, 2)} </pre>*/}
        <table className= {`${styles.SLtable }`}>
        <thead className= {`${styles.SLthead }`}>
          <tr>
            <th className={`${styles.SLtd}`}>ID</th>
            <th className={`${styles.SLtd}`}>Product Name</th>
            <th className={`${styles.SLtd}`}>Brand Name</th>
            <th className={`${styles.SLtd}`}>Product Supplier</th>
            <th className={`${styles.SLtd}`}>Phone Number</th>
            <th className={`${styles.SLtd}`}>Quantity</th>
            <th className={`${styles.SLtd}`}>Unit Price</th>
           {/**<th className={`${styles.SLtd}`}>Ststus</th> */} 
            <th className={`${styles.SLtd}`}>Total Price</th>
            <th className={`${styles.SLtd}`}>Action</th>
          </tr>
        </thead>

        <tbody>
          {Stock.map((doc,index)=>{
            return(
            <tr key={doc.id}>
              <td className={`${styles.SLtd}`}>{index+1}</td>
              <td className={`${styles.SLtd}`}>{doc.product} </td>
              <td className={`${styles.SLtd}`}>{doc.brand}</td>
              <td className={`${styles.SLtd}`}>{doc.supplier}</td>
              <td className={`${styles.SLtd}`}>{doc.phone}</td>
              <td className={`${styles.SLtd}`}>{doc.quantity}</td>
              <td className={`${styles.SLtd}`}>{doc.price}</td>
             {/** <td className={`${styles.SLtd}`}>{doc.status}</td> */} 
              <td className={`${styles.SLtd}`}>{doc.total} </td>
              <td>
                <button className= {`${styles.SLbtn}`} onClick={(e)=> getStockId(doc.id)}>Edit</button>
                <button className= {`${styles.SLbtn}`} onClick={(e)=> deleteHandler(doc.id) }>Delete</button>
              </td>
            </tr>
            )
          })}
        </tbody>
        </table>
        <Routes>
          <Route path='/stockupdateform' element={<StockUpdateForm/> }/>
          <Route path='/stockform' element={<StockForm/>}/>
        </Routes>
    </div>
    
  )
}

export default StockList