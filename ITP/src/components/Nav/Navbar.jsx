import styles from '../../Styles/styles'

import { useState } from "react"
import { close, logo, menu, avatar } from '../../assets'
import { motion } from 'framer-motion'
import { MdShoppingCart, MdSettings, MdLogout, MdAdd } from 'react-icons/md'
import { navLinks } from '../index'
import { Link } from 'react-router-dom'
import { actionType } from '../../context/reducer'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const [isMenu, setIsMenu] = useState(false)

  // To access logedin users details
  const users = JSON.parse(localStorage.getItem('user'))
  // To Logout
  const logout = () =>{
    setIsMenu(false)
    localStorage.clear()
    window.location.reload();
  }

  return (

    <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden `}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-6 justify-between items-center navbar">

        {/* ==================================== main navigation ==================================== */}  
          <img src={logo} alt="New Jayasekara Auto Motors (Pvt) Ltd" className="w-[50px] h-[50px]" />
            <a className="cursor-pointer text-[16px] text-white font-semibold mr-10 ml-3 hidden sm:block text-gradient">
              New Jayasekara Auto Motors (Pvt) Ltd</a>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            
              {navLinks.map((nav, index) => (
                <motion.ul 
                key={nav.id}
                initial={{opacity : 0, x: 200}}
                animate={{opacity : 1, x: 0}}
                exit={{opacity : 0, x: 200}}>
                  {console.log("Error check: ",nav.id)}                                 
                  <li  className={`font-normal cursor-pointer text-[13px] text-white mr-10`} >
                    <a href={`#${nav.id}`}> {nav.title} </a>
                  </li>
                </motion.ul>
                ))}
            
            {/* ===== Cart Icon ======= */} 
              <li>
                <div className= {`${styles.navCart} mr-5`}>
                  <MdShoppingCart className= {`${styles.navIcon}`}/>
                    <div className= {`${styles.navCartList}`}>
                        <p className= {`${styles.navCartNum}`}>2</p>
                    </div>
              </div>
              </li>
            {/* ===== Profile Icon ======= */} 
              <li>
                  <img src={users ? users.photoURL : avatar} onClick={ () => 
                        {
                          if(localStorage.getItem('user') !== "undefined" || localStorage.getItem('user') === "[]"){
                            setIsMenu(!isMenu)
                          }
                          else{
                            setIsMenu(false)
                          }
                        }
                      }
                    className="w-[25px] h-[25px] cursor-pointer rounded-full {`${styles.avatar}`}" whiletap={{ scale: 0.6 }}/>
                  { 
                    isMenu &&(
                      <motion.div 
                        initial={{opacity : 1, scale : 0.6}}
                        animate={{opacity : 5, scale : 1}}
                        exit={{opacity : 1, scale : 2}}
                        className='p-3 bg-black-gradient text-white text-[12px] absolute top-15 right-10 mx-1 my-2 min-w-[110px] rounded-xl'>
                          {users && users.email === "it21096266@my.sliit.lk" && (
                            <Link to="/">
                                <p className='px-4 py-2 flex items-center gap-1 cursor-pointer hover: text-dimWhite transition-all duration-100 ease-in-out'>
                                Add Items <MdAdd /> </p>
                            </Link>
                            )}
                          <p className='px-4 py-2 flex items-center gap-1 cursor-pointer hover: text-dimWhite transition-all duration-100 ease-in-out'>
                            Settings <MdSettings /> </p>
                          <p onClick={logout}
                          className='px-4 py-2 flex items-center gap-1 cursor-pointer text-semibold text-gradient hover: text-dimWhite transition-all duration-100 ease-in-out'>
                            Logout <MdLogout className='text-gradient' /> </p>
                        </motion.div>
                    )
                  }
              </li>
          </ul>

      {/* ==================================== mobile navigation ======================================== */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
              <img 
                src={toggle ? close : menu} alt="menu" 
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle((prev) => !prev)} />
              <div className={`${toggle ? 'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                  {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-normal cursor-pointer text-[11px] text-white
                    ${index === navLinks.length - 1 ? 'mr-0' : 'mb-5'} `} >
                    <a href={`#${nav.id}`}> {nav.title} </a>
                    </li>
                  ))}
          {/* ===== Cart Icon ======= */} 
                <li>
                  <div className= {`${styles.navCart} mt-3`}>
                    <MdShoppingCart className= {`${styles.navIcon}`}/>
                      <div className= {`${styles.navCartList}`}>
                          <p className= {`${styles.navCartNum}`}>2</p>
                      </div>
                  </div>
                </li>

                <li>
          {/* ===== Profile Icon ======= */} 
                  <motion.img src={users ? users.photoURL : avatar} onClick={() => 
                      {
                        if(localStorage.getItem('user') !== "undefined"){
                          setIsMenu(!isMenu)
                        }
                      }
                    }
                  className="w-[25px] h-[25px] cursor-pointer rounded-full mt-3 mb-1" whiletap={{ scale: 0.6 }}/>
                    { 
                      isMenu &&(
                        <div className='text-[11px] mt-2'>
                          {users && users.email === "it21096266@my.sliit.lk" && (
                            <Link to="/">
                                <p className='px-4 py-2 flex items-center gap-1 cursor-pointer hover: text-dimWhite transition-all duration-100 ease-in-out'>
                                Add Items <MdAdd /> </p>
                            </Link>
                          )}
                            <p className='px-4 py-2 flex items-center gap-1 cursor-pointer hover: text-dimWhite transition-all duration-100 ease-in-out'>
                              Settings <MdSettings /> </p>
                            <p onClick={logout}
                            className='px-2 py-2 flex items-center rounded-md gap-1 cursor-pointer text-gradient  hover: text-dimWhite transition-all duration-100 ease-in-out ml-3'>
                              Logout <MdLogout /> </p>
                      </div>
                    )}
              </li>
            </ul>
                </div>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar