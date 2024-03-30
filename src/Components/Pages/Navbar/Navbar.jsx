import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";

const Navbar = () => {
    return (
        <div>

            <nav className="bg-white ">

                <div className="flex items-center font-medium  justify-around ">

                    {/* Logo */}
                    <div>
                        <Logo></Logo>
                    </div>
                    {/* Logo */}

                    {/* Navbar */}
                    <div>
                        <ul className="md:flex hidden items-center gap-8  uppercase ">
                            <li><Link to={'/'} className="py-7 px-3 inline-block">Home</Link></li>

                            <NavLinks></NavLinks>
                        </ul>
                    </div>
                    {/* Navbar */}

                    {/* Button */}
                    <div className="md:block hidden">
                        <Button></Button>
                    </div>
                    {/* Button */}


                    

                </div>

            </nav>

        </div>
    );
};

export default Navbar;