import React, {useState} from "react";

function Navigation ({ currentPage, handlePageChange }) {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    return(
        <header className="sticky top-0 z-50">
            <nav className="navbar p-5 shadow md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <span className="text-4xl font-[Poppins]">Toumeng</span>

                    <span className="text-3xl cursor-pointer md:hidden block" onClick={handleMenuToggle}>
                        <ion-icon name={isMenuOpen ? "close" : "menu"}></ion-icon>
                    </span>
                </div>

                

                <ul className={`navbar-items md:flex md:item-center text-2xl z-[100] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
                    isMenuOpen ? "opacity-100 top-[60px]" : "opacity-0 top-[-400px]"
                    } transition-all ease-in duration-500`}
        >
                    <li className="mx-6 my-6 md:my-0">
                        <a href="#home" 
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ?  'nav-item' : ''}>Home</a>
                    </li>
                    <li className="mx-6 my-6 md:my-0">
                        <a href="#About" 
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ?  'nav-item' : ''}>About</a>
                    </li>
                    <li className="mx-6 my-6 md:my-0">
                        <a href="#Projects" 
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ?  'nav-item' : ''}>Projects</a>
                    </li>
                    <li className="mx-6 my-6 md:my-0">
                        <a href="/files/ToumengsResume23.pdf" download>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;