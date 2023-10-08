import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import GalleryCard from './GalleryCard';
import Navbar from '../Navbar.jsx/Navbar';

const EventGallery = ({ cards }) => {

    const [myCard, setMyCard] = useState([]);

    useEffect(() => {
        if (cards && cards.length > 0) {
            setMyCard(cards);
        }
    }, [cards]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="py-10 mx-auto">
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
                    {
                        myCard && myCard.length > 0
                            ? myCard.map(card => <GalleryCard key={card.id} card={card} />)
                            : <p>No cards available</p>
                    }
                </div>
            </div>
        </div>
    );
};

EventGallery.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            eventType: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            image: PropTypes.string,
            price: PropTypes.number,
            category: PropTypes.string,
        })
    ).isRequired,
};


export default EventGallery;
