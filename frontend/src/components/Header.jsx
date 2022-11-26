import {FaSignInAlt,FaSignOutAlt,FaUser,basket} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    
    <header className='header'>
        <div className="logo">
        <Link to='/'>DESI Jewels</Link>
        </div>
        <ul>
            <li>
                <Link to ='/Login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to ='/Register'>
                    <FaUser /> Register
                </Link>
            </li>
            <li>
                <Link to ='/Basket'>
                    <FaUser /> Basket
                </Link>
            </li>
        </ul>
        </header>
    
  )
}

export default Header
