import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
  

    return(
        <div className='flex justify-between py-10'>
            <h1>Header</h1>
            <nav className="hidden md:block">
                <ul className='flex gap-x-8'>
                    <li><Link to ="about">About Us</Link></li>
                    <li>
                        <div className="relative">
                            <button onClick={toggleDropdown} >
                                Solutions
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md">
                                    <li><Link to="/amber-data-compass"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Amber Data Compass</Link></li>
                                    <li><Link to="/amber-digital-compass"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Amber Digital Compass</Link></li>
                                    <li><Link to="/amber-payment-compass"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Amber Payment Compass</Link></li>
                                </ul>
                            )}
                        </div>
                    </li>
                    <li><Link to ="industries">Industries</Link></li>
                    <li><Link to ="cybersecurity">Cybersecurity</Link></li>
                    <li><Link to ="blog">Blog</Link></li>
                    <li><Link to ="careers">Careers</Link></li>
                    <li><Link to ="contact-us">Contact Us</Link></li>
                    <li><Link to ="hire-resource">Hire Resources</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header