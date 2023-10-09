import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const { user } = useContext(AuthContext);

    const navLinks = <>
        <div className="flex text-md font-semibold space-x-6">

            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                    }>Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/services"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                    }>Services
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/gallery"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                    }>Event Gallery
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                }>Contact Us
                </NavLink>
            </li>
            {!user && <li>
                <NavLink to="/register" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                }>Register
                </NavLink>
            </li>}
            {!user && <li>
                <NavLink to="/login" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                }>Login
                </NavLink>
            </li>}


        </div>

    </>
    return (
        <div className="navbar z-10 fixed bg-base-100 top-0 p-6 h-[5vh] shadow-md justify-evenly remove-hover-effect">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="uppercase text-xl font-bold text-gray-900">EngageNinja</a>
            </div>
            <div className="hidden lg:flex w-full">
                <ul className="space-x-5 mx-auto px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end space-x-5">
                {
                    user && <>
                        <NavLink to="/profile"> <div className="avatar items-center">
                            <button className="btn-sm text-lg font-bold">{user?.displayName}</button>
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div></NavLink>

                    </>

                }
            </div>
        </div>
    );
};

export default Navbar;