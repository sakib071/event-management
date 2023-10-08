import Navbar from "../Navbar.jsx/Navbar";

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content bg-base-100 shadow-md rounded-lg">
                    <div className="text-left p-5 space-y-5 max-w-md">
                        <h1 className="text-3xl font-bold">Contact With Us</h1>
                        <p className="text-lg">We are all ears and excited to hear from you. Just fire away using the contact form below.</p>
                        <div className="text-left mt-5 space-y-3 w-full">
                            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Email address" className="input input-bordered w-full max-w-xs" />
                            <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                        </div>
                        <button className="btn btn-neutral">Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;