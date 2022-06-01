import React from 'react'
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../images/logo.png'

const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}
 
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false); 
  return (
    <nav className="w-full flex md:justify-between items-center h-full py-5">  
        <div className = "flex text-white flex-initial justify-around items-center w-full" >
            <img src={logo} alt="logo" className='w-32'/>
            <ul className='text-white md:flex hidden md:w-65 list-none justify-around items-center w-65'>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index)=>( 
                    <NavbarItem key={item+index} title={item} />
                ))}
                <li className = "bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">login</li>
            </ul>
            <div className='flex relative md:hidden'>
                    {toggleMenu ? null:
                     <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>}
                    {toggleMenu && (
                        <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                            <li className='text-xl'>
                                <AiOutlineClose onClick={() =>{setToggleMenu(false)}}/>
                            </li>
                            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index)=>( 
                                 <NavbarItem key={item+index} title={item} classProps="my-2 text-lg"/>
                            ))}
                        </ul>
                    )} 
            </div>
        </div>
    </nav>
  )
}

export default Navbar
