import React from 'react'
import { Navbar, Footer } from './components'
import { AnimatePresence } from 'framer-motion'
import AppRoutes from "./components/Routes/Routes";

const App = () => {
  return (
      <AnimatePresence>
        <div className='bg-primary overflow-hidden text-white'>
            <Navbar />
              <AppRoutes />
            <Footer />
        </div>
      </AnimatePresence>
    )
}

export default App