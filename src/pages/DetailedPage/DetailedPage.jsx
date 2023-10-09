import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailedPage = () => {

    const [myCard, setMyCard] = useState([]);
    const { id } = useParams();
    const services = useLoaderData();
    // console.log("id: ", services);

    useEffect(() => {
        const find = services.find(service => service.id == id);
        setMyCard(find);
    }, [id, services])

    const { eventType, title, description, price, image, category } = myCard || {}

    return (
        <div>
            <div className="mt-56 mb-52 w-[50vw] shadow-xl flex flex-row mx-auto max-w-full h-full rounded-lg" >
                <figure><img className="w-full h-full rounded-l-lg object-cover" src={image} alt="" /></figure>
                <div className="card-body w-full">
                    <h2 className="text-4xl font-bold flex-grow" >{title}</h2>
                    <h2 className="text-lg font-semibold flex-grow" >{description}</h2>
                    <h3 className="font-semibold text-lg" >Event: {eventType}</h3>
                    <div className='flex py-2 justify-between text-md'>
                        <h3 className="font-semibold" >Price:  {price}</h3>
                        <h3 className="font-semibold bg-amber-100 w-fit py-1 px-2 text-center rounded-md" >Category: {category}</h3>
                    </div>

                </div>
            </div>
        </div>
    );
};

DetailedPage.propTypes = {
    card: PropTypes.object.isRequired,
}

export default DetailedPage;