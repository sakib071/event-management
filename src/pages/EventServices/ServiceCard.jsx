import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const ServiceCard = ({ card }) => {

    const { id, image, description, eventType, category, price } = card || {}

    // const navigate = useNavigate();

    // const handleOrder = (id) => {
    //     navigate({
    //         pathname: '/detailedPage',
    //         search: createSearchParams({
    //             id: id
    //         }).toString()
    //     });
    // }


    return (
        <Link to={`/detailedPage/${id}`} className="hover:w-full transition ease-in-out">
            <div className="card-compact bg-base-100 border-2 hover:shadow-xl flex flex-row mx-auto max-w-full h-full rounded-lg hover:scale-105" >
                <div className="card-body">
                    <figure><img className="w-full h-[23vh] rounded-lg object-cover" src={image} alt="" /></figure>
                    <h3 className="font-bold text-xl" >{eventType}</h3>
                    <h2 className="text-lg flex-grow" >{description}</h2>
                    <div className='flex items-center py-2 justify-between text-md'>
                        <h3 className="font-semibold bg-amber-100 w-fit py-1 px-2 text-center rounded-md" >Category: {category}</h3>
                        <h3 className="font-semibold text-center" >Price: ${price}</h3>
                    </div>
                    <button className='btn btn-neutral'>Order</button>
                </div>
            </div>
        </Link>

        // <div className="card-compact bg-base-100 border-2 hover:shadow-xl flex flex-row mx-auto max-w-full h-full rounded-lg hover:scale-105" >
        //     <div className="card-body">
        //         <figure><img className="w-full h-[23vh] rounded-lg object-cover" src={image} alt="" /></figure>
        //         {/* <h3 className="font-bold text-xl" >{id}</h3> */}
        //         <h3 className="font-bold text-xl" >{eventType}</h3>
        //         <h2 className="text-lg flex-grow" >{description}</h2>
        //         <div className='flex items-center py-2 justify-between text-md'>
        //             <h3 className="font-semibold bg-amber-100 w-fit py-1 px-2 text-center rounded-md" >Category: {category}</h3>
        //             <h3 className="font-semibold text-center" >Price: ${price}</h3>
        //         </div>
        //         <button onClick={() => { handleOrder({ id }) }} className='btn btn-neutral'>Order</button>
        //     </div>
        // </div >

    );
};

ServiceCard.propTypes = {
    card: PropTypes.object.isRequired,
}


export default ServiceCard;