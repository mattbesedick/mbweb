import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <span className="name">matthew besedick</span>
            <ul className="nav-links">
                <li><FaGithubSquare size="1.5rem" /></li>
                <li><FaLinkedin size="1.5rem"/></li>
                <li><FaInstagramSquare size="1.5rem" /></li>
            </ul>
        </nav>
    )
}

export default Nav