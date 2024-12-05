import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import Swal from 'sweetalert2';

const UpdateReview = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const updateItem = useLoaderData()
    const genres = ["Action", "RPG", "Adventure"];

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const gameImage = form.gameImage.value;
        const gameTitle = form.gameTitle.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const publishingYear = form.publishingYear.value;
        const genre = form.genre.value;
        const email = form.email.value;
        const name = form.name.value;

        const updatedInfo = { gameImage, gameTitle, description, rating, publishingYear, genre, email, name }


        fetch(`http://localhost:3000/updateReview/${updateItem._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Review Updated Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/")
                }
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                    <div className="">
                        <h1 className="text-4xl font-bold text-purple-500">Update Review</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Game Cover Image</span>
                                </label>
                                <input type="text" placeholder="game-image" name='gameImage' defaultValue={updateItem.gameImage} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Game Title</span>
                                </label>
                                <input type="text" placeholder="game-title" name='gameTitle' defaultValue={updateItem.gameTitle} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Review Description</span>
                                </label>
                                <textarea type="text" placeholder="description" name='description' defaultValue={updateItem.description} className="input input-bordered resize-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" placeholder="rating" name='rating' defaultValue={updateItem.rating} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publishing year</span>
                                </label>
                                <input type="text" placeholder="publishing-year" name='publishingYear' defaultValue={updateItem.publishingYear} className="input input-bordered" required />
                            </div>
                            <div>
                                <label htmlFor="">Genre</label>
                                <select name="genre" defaultValue={updateItem.genre} id="">{genres.map((genre) => <option>{genre}</option>)}</select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" defaultValue={user?.email} name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" placeholder="name" defaultValue={user?.displayName} name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateReview;