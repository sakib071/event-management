import { useEffect, useState } from "react";
// import EventGallery from "../EventGallery/EventGallery";
import Cards from "../Cards/Cards";
import Review from "../../Review/Review";
import EventServices from "../EventServices/EventServices";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching the data: ', error));
    }, []);

    return (
        <div>
            <div className="md:col-span-2 mt-16">
                <Cards cards={data}></Cards>
            </div>
            <Review></Review>
            <EventServices cards={data}></EventServices>
        </div>
    );
};

export default Home;
