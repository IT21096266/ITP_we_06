import React from 'react'
import { useState, useEffect } from 'react'
import { async } from '@firebase/util'
import StockDataService from '../services/StockServices'
import styles from '../styles'

const StockUpdateForm = (id) => {
    const [product, setProduct] = useState("");
    const [brand,setBrand] = useState("");
    const [supplier,setSupplier] = useState("");
    const [phone, setPhone] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState({error:false, msg:" "});

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const newStock ={
            product,
            brand,
            supplier,
            phone,
            quantity,
            price,
        }
        console.log(newStock)
        try{
            await StockDataService.addStock(newStock)
            setMessage({error: false, msg: "Stock added successfully!"})
        }catch (err){
            setMessage({error: false, msg: err.message})
        }
    }

    const editHandler = async (id) => {
        setMessage("")

            const docSnap = await StockDataService.getStock(id)
            console.log("Got the Data: ", docSnap.data())
            setProduct(docSnap.data().product)
            setBrand(docSnap.data().brand)
            setSupplier(docSnap.data().supplier)
            setPhone(docSnap.data().phone)
            setQuantity(docSnap.data().quantity)
            setPrice(docSnap.data().price)
    }

    useEffect(() => {
        console.log("Got ID: ", id)
         if (id !== undefined && id !== ""){
            editHandler()
            console.log("Check ", id)
        }
    }, [id])



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
                    <input type="text" name="floating_phone_number" id="floating_phone_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="[0-9]{10}" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <label for="floating_phone_number" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="number" name="floating_quantity" id="floating_quantity" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                    <label for="floating_quantity" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="number" name="floating_unit_price" id="floating_unit_price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    <label for="floating_unit_price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Unit Price</label>
                </div>
            </div>
            </form>
            
            <div> 
                <button type='submit' className={`${styles.SLbtn }`}>Save Changes</button>
                <t> </t>
                <button type='reset' className={`${styles.SLbtn }`}>Reset</button>
                <t> </t>
                <button className={`${styles.SLbtn }`} >Go To List</button>
            </div>

    </div>
    
  )
}

export default StockUpdateForm
