import Link from "next/link";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";


const menuItems = [
    { name: "Dashboard", icon: <FaHome />, link: "/admin-panel" },
    { name: "Category", icon: <MdCategory />, link: "/admin-panel/category" },
    { name: "Users", icon: <FaUser />, link: "/admin/users" },
    { name: "Settings", icon: <FaCog />, link: "/admin/settings" },
    { name: "Logout", icon: <FaSignOutAlt />, link: "/logout" },
];

const SideMenu = () => {
    return (
        <div className="h-[100vh] bg-gray-800 text-white flex flex-col">
            <div className="flex items-center justify-center h-20 border-b border-gray-700">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>
            <nav className="flex-1">
                <ul>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={`flex items-center p-4 cursor-pointer hover:bg-gray-700`}
                        >
                            <Link className="flex items-center" href={item.link || "#"}>
                                <span className="mr-3">{item.icon}</span>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};


export default SideMenu;