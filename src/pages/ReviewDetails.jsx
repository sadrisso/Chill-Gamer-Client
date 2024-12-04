import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthProvider';

const ReviewDetails = () => {

    const { user } = useContext(AuthContext)
    const email = user?.email;
    const name = user?.name;

    const review = useLoaderData()
    const { description, gameImage, gameTitle, genre, publishingYear } = review;

    const handleAddToWatchList = () => {
        const reviewDetails = { email, name, description, gameImage, gameTitle, publishingYear, genre, };

        fetch("http://localhost:3000/watch", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Added To WatchList",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="flex justify-evenly items-center gap-5">
                        <div>
                            <img src={gameImage} alt="" className='w-[600px] h-[400px] opacity-65' />
                        </div>
                        <div>
                            <h1 className="mb-5 text-5xl font-bold">{gameTitle}</h1>
                            <p className="mb-5">
                                {description}
                            </p>
                            <p>{genre}</p>
                            <p>{publishingYear}</p>
                            <hr />
                            <p className='text-2xl font-bold'>Added by: {user?.displayName}</p>
                            <p>{user?.email}</p>
                            <button className="btn btn-primary" onClick={handleAddToWatchList}>Add to WatchList</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;