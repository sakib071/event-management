import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GalleryCard = ({ card }) => {
    const { id, eventType, title, description, image, price, category } = card || {}

    return (

        <Link to={`/card/${id}`} className="hover:w-full transition ease-in-out">
            <div className="card card-compact shadow-xl flex flex-col mx-auto max-w-[22rem] h-full rounded-xl hover:scale-105 cursor-pointer" >
                <figure><img className="w-full h-[20vh]" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-bold flex-grow" >{title}</h2>
                    <p className='font-xs bg-amber-100 flex-grow-0 mb-2 w-fit px-2 py-1 rounded-md'>{eventType}</p>
                    <h3 className="font-semibold mb-8">{description}</h3>

                    <div className='flex justify-between text-md'>
                        <h2 className="font-bold" >Category: <span className=' text-amber-500'>{category}</span></h2>
                        <h3 className="font-semibold" >Price: ${price}</h3>
                    </div>

                </div>
            </div>
        </Link>

    );
};

GalleryCard.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        eventType: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        category: PropTypes.string,
    }).isRequired,
}

export default GalleryCard;
