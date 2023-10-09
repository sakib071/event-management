import { useEffect, useState } from 'react';
import GalleryCard from './GalleryCard';

const EventGallery = () => {

    const [myCard, setMyCard] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setMyCard(data))
    }, [])

    return (
        <div data-aos="zoom-in">
            <div className="py-10 mt-16 mb-10 mx-auto">
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
                    {
                        myCard && myCard.length > 0
                            ? myCard.map(card => <GalleryCard key={card.id} card={card} ></GalleryCard>)
                            : <p>No cards available</p>
                    }
                </div>
            </div>
        </div>
    );
};


export default EventGallery;
