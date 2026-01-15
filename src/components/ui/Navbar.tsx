import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Open, setOpen] = useState(false)
  return <div className="bg-gray-15 flex justify-around items-center py-[20px] xl:text-[18px] md:text-[14px] ">
    <img src="/assets/images/logo/fullLogo.png" alt="Logo" className="2xl:w-[160px] 2xl:h-[60px] md:w-[113px] md:h-[32px] w-[93px] h-[28px]" />
    <div>
      <ul className="sm:flex gap-[30px] hidden">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/properties">Properties</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </div>
    <button className="py-[16px] px-[24px] bg-gray-08 rounded-xl sm:flex  hidden"><Link to="/contact" >Contact Us</Link></button>
    {
      (Open == false) && <button className="sm:hidden flex" onClick={() => setOpen(!Open)}>
        <img src="/public/assets/icons/bars.svg" alt="ImbBar" />
      </button>
    }
    {
      (Open == true) && <div className="sm:hidden gap-[10px] flex flex-col items-center" onClick={() => setOpen(!Open)}>
        <ul className=" gap-[10px] flex flex-col">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/properties">Properties</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
        <button className="py-[10px] px-[15px] bg-gray-08  rounded-xl h-fit"><Link to="/contact" >Contact Us</Link></button>
      </div>
    }

  </div>
};

export default Navbar;

/**
 * import styles from './NavBar.module.css'
import TopHeader from "../../components/TopHeader/TopHeader"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
    const [Open, setOpen] = useState(false)
    return (
        <div className={styles.navBarBase}>
            <TopHeader />
            <div className={styles.DivBaseNav}>
                <div className={styles.Div1Nav}>
                    <img src="/assets/imges/imgNavBar.png" alt="imgNavBar" />
                    <img src="/assets/imges/textButtonNav.png" alt="textButtonNav" />
                </div>
                <ul>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? styles.active : "" }>Home</NavLink></li>
                    <li><NavLink to='/about'className={({ isActive }) => isActive ? styles.active : "" }>About Us</NavLink></li>
                    <li><NavLink to='/academics' className={({ isActive }) => isActive ? styles.active : "" }>Academics</NavLink></li>
                    <li><NavLink to='/admissions' className={({ isActive }) => isActive ? styles.active : "" }>Admissions</NavLink></li>
                    <li ><NavLink to='/student' className={({ isActive }) => isActive ? styles.active : "" }>Student Life</NavLink></li>
                    <li className={styles.endButtonNav} ><NavLink to='/contact' className={({ isActive }) => isActive ? styles.active : "" }>Contact</NavLink></li>
                </ul>
            </div>

            <div className={styles.DivBaseNavHidden}>
                <div className={styles.Div1Nav}>
                    <img src="/assets/imges/imgNavBar.png" alt="imgNavBar" />
                    <img src="/assets/imges/textButtonNav.png" alt="textButtonNav" />
                </div>
                <button onClick={() => setOpen(!Open)}><img src="/assets/imges/logo.png" alt="logo" /></button>
                <div className={Open ? styles.sideBar2 : styles.sideBar}>
                    <ul className={styles.ULSideBar} onClick={() => setOpen(!Open)}>
                        <li><NavLink to='/' >Home</NavLink></li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                        <li><NavLink to='/academics'>Academics</NavLink></li>
                        <li><NavLink to='/admissions'>Admissions</NavLink></li>
                        <li><NavLink to='/student'>Student Life</NavLink></li>
                        <li className={styles.endButtonNav}><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar

 */