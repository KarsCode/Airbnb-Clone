import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAirbnb
}from '@fortawesome/free-brands-svg-icons'

import {
    faUser,
    faBars
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'


const Header = () =>{
    return(
        <div className='header'>
            <header className='contents'>
            <Link className='logo' to ='/'>
            <FontAwesomeIcon icon ={faAirbnb} color='#ff5a60' />
            </Link>

            <Link className='logotxt' to ='/'>
              airbnb  
            </Link>


            <Link className='bars' to ='/'>
            <FontAwesomeIcon icon ={faBars} color='#ff5a60' />
            <FontAwesomeIcon icon ={faUser} color='#ff5a60' />
            
            </Link>

            


            

            

           




            </header>
        </div>
            
        
    )
};

export default Header;
