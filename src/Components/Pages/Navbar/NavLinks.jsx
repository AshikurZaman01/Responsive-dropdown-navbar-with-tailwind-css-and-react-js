import { Link } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { name: "Men", link: "/men" },
        { name: "Women", link: "/women" },
        { name: "Kids", link: "/kids" },
    ];

    return (
        <div className="flex gap-8">
            {links.map((link, index) => (
                <div key={index} className="cursor-pointer">
                    <ul>
                        <li>
                            <Link to={link.link}>{link.name}</Link>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default NavLinks;
