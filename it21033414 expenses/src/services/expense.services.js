import { firestore } from './firebase-config'
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'


const expenseCollectionRef = collection(firestore, "Expense")

class ExpenseDataService{

    addExpense = (newExpense) =>{
        return addDoc(expenseCollectionRef, newExpense)
    }

    updateExpense = (id, updateExpense) =>{
        const expense = doc(firestore, "Expense", id)
        return updateDoc(expense, updateExpense)
    }

    deleteExpense = (id) => {
        const expense = doc(firestore, "Expense", id)
        return deleteDoc(expense)
    }

    getAllExpense = () =>{
        return getDocs(expenseCollectionRef)
    }

    getExpense = (id) =>{
        const expense = doc(firestore, "Expense", id)
        return getDoc(expense)
    }

}

export default new ExpenseDataService()