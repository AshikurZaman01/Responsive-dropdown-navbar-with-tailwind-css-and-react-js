import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { FaHamburger } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            <div>
                {/* ICONS */}
                <div onClick={toggleMenu} className="text-3xl md:hidden transition-all  cursor-pointer ">
                    {isMenuOpen ? <GrClose /> : <FaHamburger />}
                </div>
                {/* ICONS */}

                {/* Mobile Menu */}
                <ul className={`${isMenuOpen ? 'block fixed' : 'hidden'} md:hidden bg-white w-full py-24 pl-4 bottom-0 left-0 top-14 transition-all `}>
                    <li><Link to={'/'} className="py-7 px-3 inline-block">Home</Link></li>
                    <NavLinks />
                    <div className="py-5">
                        <Button />
                    </div>
                </ul>
                {/* Mobile Menu */}
            </div>
        </div>
    );
};

export default MobileNav;
