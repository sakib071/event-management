import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Card = ({ card }) => {

    const { id, eventType, title, description, image, category } = card || {}
    return (
        <Link to={`/card/${id}`} className="hover:w-full transition ease-in-out">
            <div className="card-compact shadow-xl flex flex-row mx-auto max-w-full h-full rounded-lg hover:scale-105" >
                <figure><img className="w-full h-[23vh] rounded-l-lg object-cover" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-bold flex-grow" >{title}</h2>
                    <h2 className="text-lg font-semibold flex-grow" >{description}</h2>
                    <h3 className="font-semibold text-lg" >Event: {eventType}</h3>
                    <div className='flex py-2 justify-between text-md'>
                        {/* <h3 className="font-semibold" >Price:  {price}</h3> */}
                        <h3 className="font-semibold bg-amber-100 w-fit py-1 px-2 text-center rounded-md" >Category: {category}</h3>
                    </div>

                </div>
            </div>
        </Link>

    );
};
Card.propTypes = {
    card: PropTypes.object.isRequired,
}


export default Card;