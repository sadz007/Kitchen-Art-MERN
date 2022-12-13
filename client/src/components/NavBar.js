import React,{useState} from 'react'
import {MenuIcon,XIcon} from '@heroicons/react/outline';
import { Link ,useNavigate} from 'react-router-dom';


const NavBar = (props) => {
    const [nav,setNav] = useState(false);
    const navigate = useNavigate()
    
    localStorage.getItem('token')


    const handleClick = () =>{ 
        setNav(!nav)
        
    }
    const handleClose = () =>{
        setNav(!nav)
        
    }
    const handleLogout = () => {
		localStorage.removeItem("token");
        localStorage.removeItem("data");
		window.location='/';
	};

    return (
    
    <div className='w-screen h-{100px} z-10 bg-gradient-to-r from-black to-yellow-500 fixed drop-shadow-2xl '>
        <div className='px-2 my-2 flex justify-between items-center w-full h-full ' >
                
                <div className='text-3xl font-bold mr-10 px-2 first-letter:text-6xl first-letter:font-bold '>
                    
                    <h1 
                    onClick={()=>navigate('/')}
                    className=' hover:text-yellow-600 cursor-pointer text-slate-300 font-extrabold mb-1 pb-1'>
                        Kitchen Art.
                    </h1>
                </div>
                
            <div className='' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-12 mx-2' /> : <XIcon className='w-5 mx-2' />}
                
            </div>
        </div>
        <div className='relative h-6  border-zinc-300'>
            <ul className={!nav ? 'hidden': 
            'border-b-2 absolute bg-zinc-200 w-full px-8'}>
                <p className=' border-b-3 border-zinc-500 w-full'/>
                {localStorage.token?
                <li className=' border-b-2 border-zinc-500 w-full'onClick={handleClose}>
                    <Link to={'/recipe/blog'} className='text-slate-800 font-bold'>Blog</Link>
                </li>:null}

                {localStorage.token?
                <li className='border-b-2 border-zinc-500 w-full'onClick={handleClose}>
                    <Link to={'/recipe/add'} className='text-slate-800 font-bold'>Create Recipe</Link>
                </li>:null}
                
                {localStorage.token?null:
                <li className='border-b-2 border-zinc-500 w-full mb-1 pb-1'onClick={handleClose}>
                <Link to={'/login'} className='text-slate-800 font-bold'>Sign In</Link>  
                </li>}
                
                {localStorage.token?null:
                <li className='border-b-2 border-zinc-500 w-full'onClick={handleClose}>
                    <Link to={'/signup'} className='text-slate-800 font-bold'>Sign Up</Link>    
                </li>}
                {localStorage.token?
                <li className='border-b-2 border-zinc-300 w-full'onClick={handleClose}>
                    <Link onClick={handleLogout} to={'/'}className='text-slate-800 font-bold'>Log Out</Link>
                </li>:null}
            </ul>
        </div>
      
    </div>
    )
}

export default NavBar