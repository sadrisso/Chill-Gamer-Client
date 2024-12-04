import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllReviews = () => {

    const allReviews = useLoaderData()

    return (
        <div>
            <div>
                <h1 className='text-center text-orange-500 font-bold my-10 text-3xl'>All Reviews</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto'>
                {allReviews.map((review) =>
                    <div>
                        <div className="card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    className='h-[200px] w-[300px] p-5 rounded-2xl'
                                    src={review.gameImage}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{review.gameTitle}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-neutral btn-sm">Explore Details</button>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default AllReviews;