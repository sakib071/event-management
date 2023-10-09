import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GalleryCard = ({ card }) => {
    const { id, title, image } = card || {}

    return (

        <Link to={`/card/${id}`} className="hover:w-full transition ease-in-out">
            <div className="card card-compact shadow-xl flex flex-col mx-auto max-w-[22rem] h-full rounded-xl hover:scale-105 cursor-pointer" >
                <figure><img className="w-full h-[20vh]" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-bold flex-grow" >{title}</h2>
                </div>
            </div>
        </Link>

    );
};

GalleryCard.propTypes = {
    card: PropTypes.object.isRequired,
}

export default GalleryCard;
