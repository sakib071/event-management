import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Card from './Card';


const Cards = ({ cards }) => {

    const [myCard, setMyCard] = useState(cards);

    useEffect(() => {
        if (cards && cards.length > 0) {
            setMyCard(cards);
        }
    }, [cards]);


    return (
        <div>
            <div className="carousel w-full h-[70vh] object-cover">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Zhb3xxg/pexels-photo-399610.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/zs5dWHm/image.png" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/G0gwHg0/image.png" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/VCXBTb2/image.png" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-80 lg:bottom-96 left-1/2 flex flex-col text-center -translate-x-2/4  rounded-md">
                <p className="text-2xl lg:text-5xl text-black font-bold m-5 lg:m-10">Learn and Grow</p>
            </div> */}
            <div className="py-10 mx-auto">
                <h3 className="text-3xl text-center font-semibold mb-10">All Events</h3>
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto">
                    {
                        myCard?.map(card => <Card key={card.id} card={card}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};
Cards.propTypes = {
    cards: PropTypes.array.isRequired,
}

export default Cards;