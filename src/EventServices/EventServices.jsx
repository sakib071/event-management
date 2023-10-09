import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Navbar from "../pages/Navbar.jsx/Navbar";
import ServiceCard from "./ServiceCard";

const EventServices = ({ cards }) => {

    const [myCard, setMyCard] = useState(cards);

    useEffect(() => {
        if (cards && cards.length > 0) {
            setMyCard(cards);
        }
    }, [cards]);

    return (
        <div>
            <Navbar></Navbar>
            <h3 className='text-3xl font-bold text-center mt-32 mb-14'>Featured Services</h3>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto mb-36">
                {
                    myCard?.map(card => <ServiceCard key={card.id} card={card}></ServiceCard>)
                }
            </div>
        </div>
    );
};

EventServices.propTypes = {
    cards: PropTypes.array.isRequired,
}


export default EventServices;