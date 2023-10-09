import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../pages/Navbar.jsx/Navbar";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out successfully');
                navigate('/');
            })
            .catch(error => console.error(error))
    }


    return (
        <div className="hero h-[80vh] bg-base-100">
            <Navbar></Navbar>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-[15rem] object-contain" src={user?.photoURL} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {user?.displayName}
                    </h2>
                    <p>{user.email}</p>
                    <button>
                        <a onClick={handleLogOut} className="btn btn-neutral btn-sm mt-5">Sign out</a>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;