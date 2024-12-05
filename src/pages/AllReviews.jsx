import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllReviews = () => {

    const allReviews = useLoaderData()
    const [reviews, setReviews] = useState(allReviews)

    const refetchReviews = (value) => {
        fetch(`http://localhost:3000/review?sort=${value}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }

    return (
        <div>
            <div>
                <h1 className='text-center text-orange-500 font-bold my-10 text-3xl'>All Reviews</h1>
                <select name="Add Options" id="" className='w-full px-4 md:w-1/3 m-0 md:ml-40 md:mb-5 bg-white md:p-2 rounded-xl' onChange={(e) => refetchReviews(e.target.value)}>
                    <option value="rating">Sort By Rating</option>
                    <option value="publishingYear">Sort By Year</option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto'>
                {reviews.map((review) =>
                    <div>
                        <div className="card card-compact bg-base-100 border rounded-xl">
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
                                    <Link to={`/review/${review._id}`}><button className="btn btn-neutral btn-sm">Explore Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default AllReviews;