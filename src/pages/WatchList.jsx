import React from 'react';
import { useLoaderData } from 'react-router-dom';

const WatchList = () => {

    const watchedData = useLoaderData()

    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold text-orange-500 text-center my-10'>My WatchList</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table border bg-slate-300 w-2/3 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Published</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {watchedData.map((data, i) => <tr>
                            <th>{i + 1}</th>
                            <td>{data.gameTitle}</td>
                            <td><img className='w-[60px] h-[50px]' src={data.gameImage} alt="" /></td>
                            <td>{data.publishingYear}</td>
                            <td className='flex gap-2'>
                                <button className='btn btn-sm'>Edit</button>
                                <button className='btn btn-sm'>Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WatchList;