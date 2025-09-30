import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return(
    
    <nav className="navbar">
        <div className="nav-title">TicketPlug</div>
        <ul className="navlist">
            <li><Link to='/' className="nav-link">Home</Link></li>
            <li><Link to='/orders' className="nav-link">Orders</Link></li>
            <li><Link to='/faq' className="nav-link">FAQ</Link></li>
        </ul>
    </nav>
    
    )

}

export default Navbar;