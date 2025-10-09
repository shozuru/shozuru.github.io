import { Link } from 'react-router-dom'
import './TopNavigation.css'

const TopNavigation: React.FC = () => {

    return (

        <nav
            className='topnav'
        >
            <Link
                to="/"
                className='home'
            >
                Home

            </Link>
            <Link
                to="/about"
                className='about'
            >
                About

            </Link>
            <Link
                to="/projects"
                className='projects'
            >
                Projects

            </Link>
            <Link
                to="/contact"
                className='contact'
            >
                Contact

            </Link>
        </nav >
    )
}

export default TopNavigation