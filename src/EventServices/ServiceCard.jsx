import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ServiceCard = ({ card }) => {

    const { id, eventType, category, price } = card || {}

    return (
        <Link to={`/card/${id}`} className="hover:w-full transition ease-in-out">
            <div className="card-compact bg-base-100 border-2 hover:shadow-xl flex flex-row mx-auto max-w-full h-full rounded-lg hover:scale-105" >
                <div className="card-body">
                    <h3 className="font-semibold text-lg" >Event: {eventType}</h3>
                    <div className='flex items-center py-2 justify-between text-md'>
                        <h3 className="font-semibold bg-amber-100 w-fit py-1 px-2 text-center rounded-md" >Category: {category}</h3>
                        <h3 className="font-semibold text-center" >Price: ${price}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
};

ServiceCard.propTypes = {
    card: PropTypes.object.isRequired,
}


export default ServiceCard;