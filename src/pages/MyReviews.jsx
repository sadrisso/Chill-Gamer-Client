import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyReviews = () => {

    const myReviewData = useLoaderData()

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
                                <th>Genre</th>
                                <th>Description</th>
                                <th>Game Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myReviewData.map((data, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{data?.gameTitle}</td>
                                <td>{data?.genre}</td>
                                <td>{data?.description}</td>
                                <td><img className='w-[60px] h-[50px]' src={data?.gameImage} alt="" /></td>
                                <td className='flex gap-2 items-center'>
                                    <button className='btn btn-sm'>Edit</button>
                                    <button className='btn btn-sm'>Delete</button>
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