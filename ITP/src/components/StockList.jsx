import { async } from '@firebase/util';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import StockDataService from '../services/StockServices'

const StockList = () => {
    const [Stock, setStocks] = useState([]);
    useEffect(()=> {
        getStock();
    },[]);
    
    const getStock = async() => {
        const data = await StockDataService.getAllStocks();
        console.log(data.docs);
        setStocks(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))
    }

    const deleteHandler = async () => {
        await StockDataService.deleteStock(id);
        getStock();
    }

  return (
    <div>
        
    </div>
  )
}

export default StockList