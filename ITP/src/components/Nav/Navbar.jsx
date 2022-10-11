import styles from '../../Styles/styles'

import { useState } from "react"
import { close, logo, menu, avatar } from '../../assets'
import { motion } from 'framer-motion'
import { MdShoppingCart } from 'react-icons/md'
import { navLinks } from '../index'




const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">

    {/* ========== main navigation =========== */}  
      <img src={logo} alt="New Jayasekara Auto Motors (Pvt) Ltd" className="w-[50px] h-[50px]" />
        <a className="cursor-pointer text-[16px] text-white font-semibold mr-10 ml-3 hidden sm:block text-gradient">
          New Jayasekara Auto Motors (Pvt) Ltd</a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">

        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-normal cursor-pointer text-[13px] text-white mr-10`} >
            <a href={`#${nav.id}`}> {nav.title} </a>
          </li>
        ))}

          <li>
            <div className= {`${styles.navCart} mr-5`}>
              <MdShoppingCart className= {`${styles.navIcon}`}/>
                <div className= {`${styles.navCartList}`}>
                    <p className= {`${styles.navCartNum}`}>2</p>
                </div>
          </div>
          </li>

          <li>
            <a href='/login'>
              <motion.img src={avatar} className="w-[25px] h-[25px] cursor-pointer" whileTap={{ scale: 0.6 }}/>
            </a>
          </li>
      </ul>

  {/* ========== mobile navigation =========== */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu} alt="menu" 
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)} />
          <div className={`${toggle ? 'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-normal cursor-pointer text-[10px] text-white
                ${index === navLinks.length - 1 ? 'mr-0' : 'mb-5'} `} >
                <a href={`#${nav.id}`}> {nav.title} </a>
                </li>
              ))}
              
              <li>
            <div className= {`${styles.navCart} mr-5`}>
              <MdShoppingCart className= {`${styles.navIcon}`}/>
                <div className= {`${styles.navCartList}`}>
                    <p className= {`${styles.navCartNum}`}>2</p>
                </div>
          </div>
          </li>

          <li>
            <a href='/createItem'>
              <motion.img src={avatar} className="w-[25px] h-[25px] cursor-pointer" whileTap={{ scale: 0.6 }}/>
            </a>
          </li>
      </ul>
          </div>
      </div>

    </nav>
  )
}

export default Navbar