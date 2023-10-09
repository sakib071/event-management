import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {

    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, [])


    return (
        <div className="mt-36" data-aos="zoom-in">
            <h3 className='text-3xl font-bold text-center mt-32 mb-14'>Customer Review</h3>
            <div className="flex">
                <div className="stats w-[60vw] h-[30vh] stats-vertical lg:stats-horizontal shadow mx-auto">
                    <div className="stat py-8 w-[20vw] bg-slate-800 text-white">
                        <div className="text-2xl">Happy Customer</div>
                        <div className="text-8xl font-bold">31K</div>
                        <div className="text-2xl">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat py-8 w-[20vw] bg-slate-700 text-white">
                        <div className="text-2xl">New Customers</div>
                        <div className="text-8xl font-bolde">4,200</div>
                        <div className="text-2xl">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat py-8 w-[20vw] bg-slate-800 text-white">
                        <div className="text-2xl">Projects</div>
                        <div className="text-8xl font-bold">1,200</div>
                        <div className="text-2xl">↗︎ 90 (14%)</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;