import { firestore } from './firebase-config'
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'


const customerCollectionRef = collection(firestore, "Customer")

class CustomerDataService{

    addCustomer = (newCustomer) =>{
        return addDoc(customerCollectionRef, newCustomer)
    }

    updateCustomer = (id, updateCustomer) =>{
        const customer = doc(firestore, "Customer", id)
        return updateDoc(customer, updateCustomer)
    }

    deleteCustomer = (id) => {
        const customer = doc(firestore, "Customer", id)
        return deleteDoc(customer)
    }

    getAllCustomer = () =>{
        return getDocs(customerCollectionRef)
    }

    getCustomer = (id) =>{
        const customer = doc(firestore, "Customer", id)
        return getDoc(customer)
    }

}

export default new CustomerDataService()