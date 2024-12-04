import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import Swal from 'sweetalert2';



const AddReview = () => {

    const { user } = useContext(AuthContext);

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

        const submitInfo = { gameImage, gameTitle, description, rating, publishingYear, genre, email, name }
        console.log(submitInfo)

        fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(submitInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your review has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Game Review</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Game Cover Image</span>
                                </label>
                                <input type="text" placeholder="game-image" name='gameImage' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Game Title</span>
                                </label>
                                <input type="text" placeholder="game-title" name='gameTitle' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Review Description</span>
                                </label>
                                <input type="text" placeholder="description" name='description' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" placeholder="rating" name='rating' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publishing year</span>
                                </label>
                                <input type="text" placeholder="publishing-year" name='publishingYear' className="input input-bordered" required />
                            </div>
                            <div>
                                <label htmlFor="">Genre</label>
                                <select name="genre" id="">{genres.map((genre) => <option>{genre}</option>)}</select>
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
                                <button className="btn btn-primary">Add Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;