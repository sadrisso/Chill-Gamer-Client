import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewDetails = () => {

    const review = useLoaderData()
    const { description, email, gameImage, gameTitle, genre, name, publishingYear } = review;

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
                            <img src={gameImage} alt="" className='w-[600px] h-[400px] opacity-65'/>
                        </div>
                        <div>
                            <h1 className="mb-5 text-5xl font-bold">{gameTitle}</h1>
                            <p className="mb-5">
                                {description}
                            </p>
                            <p>{genre}</p>
                            <p>{publishingYear}</p>
                            <hr />
                            <p>Added by: {name}</p>
                            <p>{email}</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;