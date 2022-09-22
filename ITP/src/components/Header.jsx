import React from 'react'
import styles from '../styles'
import Logo from '../assets/images/logo.png'
import Avatar from '../assets/images/avatar.png'


import { MdShoppingCart } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <header className= {`${styles.mainHeader}`}>
{/* Desktop */}

      <div className= {`${styles.deskTop}`}>
        <Link to={'/'} className= {`${styles.logoIMG}`}>
            <img src= {Logo} alt="logo" className="w-12 object-cover"/>
            <p className= {`${styles.logoName}`}>New Jayasekara Automotors Pvt Ltd.</p>
        </Link>
        
        <div className= "item-center flex ml-8 gap-8">
          <ul className= {`${styles.navUL}`}>
              <li className= {`${styles.navLI}`}>Home</li>
              <li className= {`${styles.navLI}`}>Details</li>
              <li className= {`${styles.navLI}`}>Menu</li>
              <li className= {`${styles.navLI}`}>About us</li>
              <li className= {`${styles.navLI}`}>Service</li>
          </ul>
          <div className= {`${styles.navCart}`}>
              <MdShoppingCart className= {`${styles.navIcon}`}/>
                <div className= {`${styles.navCartList}`}>
                    <p className= {`${styles.navCartNum}`}>2</p>
                </div>
          </div>
          <div className="relative" >
              <motion.img className={`${styles.avatar}`} 
              src={Avatar} alt="User" 
              whileTap={{ scale: 0.6 }} 
              />
          </div>
          
        </div>

      </div>

{/* Mobile */}

      <div className= {`${styles.mobile}`}>

      </div>

    </header>
  )
}

export default Header