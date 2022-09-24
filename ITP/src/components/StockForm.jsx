import React from 'react'
import {useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import StockDataService from '../services/StockServices'
import styles from '../styles';

const StockForm = (id, setStockId) => {
    const [product, setProduct] = useState("");
    const [brand,setBrand] = useState("");
    const [supplier,setSupplier] = useState("");
    const [phone, setPhone] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState ("Available");
    const [flag, setFlag] = useState (true);
    const [message, setMessage] = useState({error:false, msg:" "});

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        setMessage("");

        if(product==="" || brand==="" || quantity===""){
            setMessage({error:true, msg:"All fields are mandatory!"});
            return;
        }
        const newStock = { product,brand,supplier,phone,quantity, price, status
        }
        console.log(newStock);

        try{
            await StockDataService.addStock(newStock);
            setMessage({error: false, msg:"New Stock Added Successfully!" });
        }catch (err) {
            setMessage({error: true, msg:err.message });
        }

        setProduct("");
        setBrand("");
        setSupplier("");
        setPhone("");
        setQuantity("");
        setPrice("");
    };

    useEffect(()=>{
        console.log("The id here is: ",id);
        if(id!== undefined && id !== ""){
            //editHandler();
        }
    }, [id])

    const navigate = useNavigate();
  const navigateStockList = () => {
    navigate('/stocklist');
  };

  return (        
    <div>
        <form onSubmit={handleSubmit}>
            <div class="grid md:grid-cols-2 md:gap-10">
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_product_name" id="floating_product_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={product} onChange={(e) => setProduct(e.target.value)}/>
                    <label for="floating_product_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_brand_name" id="floating_brand_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={brand} onChange={(e) => setBrand(e.target.value)}/>
                    <label for="floating_brand_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand Name</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_supplier_name" id="floating_supplier_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={supplier} onChange={(e) => setSupplier(e.target.value)}/>
                    <label for="floating_supplier_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Supplier</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_phone_number" id="floating_phone_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <label for="floating_phone_number" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_quantity" id="floating_quantity" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                    <label for="floating_quantity" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_unit_price" id="floating_unit_price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    <label for="floating_unit_price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Unit Price</label>
                </div>
            </div>
            <div className='mb-3' aria-label='Basic example'>
                <button className='mb-3' disabled={flag} variant="success" onClick={(e) => {setStatus("Available"); setFlag(true); }}>Available</button>
                <button className='mb-3' disabled={!flag} variant="danger" onClick={(e) => { setStatus("Not Available"); setFlag(false); }}>Not Available</button>  
            </div>

            <button type="submit" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit</button>

            <button className={`${styles.SLbtn }`} onClick={navigateStockList}>Go To List</button>
        </form>
    </div>
  )
}

export default StockForm
