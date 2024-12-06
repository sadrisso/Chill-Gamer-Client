import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyReviews = () => {

    const myReviewData = useLoaderData()
    const [review, setReview] = useState(myReviewData)

    const handleRemove = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://chill-gamer-server-eight.vercel.app/my-review/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                const remaining = review.filter((r) => r._id !== id)
                setReview(remaining)
            }
        });
    }

    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold text-orange-500 text-center my-10'>My Reviews</h1>
            </div>
            <div className=''>
                <div className="overflow-x-auto">
                    <table className="table bg-slate-200 w-2/3 mx-auto">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Rating</th>
                                <th>Description</th>
                                <th>Game Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {review.map((data, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{data?.gameTitle}</td>
                                <td>{data?.rating}</td>
                                <td>{data?.description}</td>
                                <td><img className='w-[60px] h-[50px]' src={data?.gameImage} alt="" /></td>
                                <td className='flex gap-2 items-center'>
                                    <Link to={`/updateReview/${data._id}`}><button className='btn btn-sm btn-info'>Edit</button></Link>
                                    <button className='btn btn-sm btn-error' onClick={() => handleRemove(data._id)}>Delete</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;