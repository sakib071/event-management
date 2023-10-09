import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const { user } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/gallery">Event Gallery</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        {!user && <li><NavLink to="/register">Register</NavLink></li>}
    </>
    return (
        <div className="navbar z-10 fixed bg-base-100 top-0 p-6 h-[5vh] shadow-md justify-evenly">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="uppercase text-xl font-bold text-gray-900">EngageNinja</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu space-x-5 menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end space-x-5">
                {
                    user ? <>
                        {/* <span>{user.displayName}</span> */}
                        <NavLink to="/profile"> <div className="avatar items-center">
                            <button className="btn-sm">{user.displayName}</button>
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div></NavLink>

                        {/* <a onClick={handleLogOut} className="btn btn-sm">Sign out</a> */}
                    </>
                        : <Link to="/login">
                            <button className="btn btn-sm">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;