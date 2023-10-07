import { useEffect, useState } from "react";
import Navbar from "../Navbar.jsx/Navbar";
import EventGallery from "../EventGallery/EventGallery"; // Ensure the correct path

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching the data: ', error));
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <div className="md:col-span-2">
                <EventGallery cards={data} />
            </div>
        </div>
    );
};

export default Home;
