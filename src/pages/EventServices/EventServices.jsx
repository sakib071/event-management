import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const EventServices = () => {

    const [myCard, setMyCard] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setMyCard(data))
    }, [])

    return (
        <div>
            <h3 className='text-3xl font-bold text-center mt-32 mb-14'>Featured Services</h3>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto mb-36">
                {
                    myCard?.map(card => <ServiceCard key={card.id} card={card}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default EventServices;