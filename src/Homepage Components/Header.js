import React, { useState } from 'react';

// css file
import './Header.css';

import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
// import { useState } from 'react';



const Header = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            {/* navigation part */}
            <div className='navigation mob-nav'>
                <div className='navbar'>
                    <div class="logo-header-kriva">
                        <h2 class="logo-kc">Kriva Construction</h2>
                    </div>
                    <Link to='#' className='menu-bars'>
                        <FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiOutlineClose />
                            </Link>
                        </li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>


            <header class="header-kriva">
                <div class="wrap-header-kriva">
                    <div class="logo-header-kriva">
                        <h2 class="logo-kc">Kriva Construction</h2>
                    </div>

                    <ul class="navbar-header-kriva">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;