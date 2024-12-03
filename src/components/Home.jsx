

const Home = () => {
    return (
        <div>
            <div className="text-center">
                <div className="carousel rounded-box text-center">
                    <div className="carousel-item">
                        <img className="w-[300px]" src="https://i.ibb.co.com/bQdfbSk/games-1.png" alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-[300px]"
                            src="https://i.ibb.co.com/vXWZ8zt/games-4.webp"
                            alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-[300px]"
                            src="https://i.ibb.co.com/mJNzkk5/games-3.jpg"
                            alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="w-[300px]"
                            src="https://i.ibb.co.com/hm86nVn/games-2.webp"
                            alt="Drink" />
                    </div>
                </div>

                {/* HIGHEST RATES GAMES SECTION STARTS FROM HERE */}
                <div className="mt-10 md:mt-20">
                    <div>
                        <h1 className="text-orange-500 text-3xl font-bold text-center">Highest Rated Games</h1>
                        <p className="text-gray-500 text-center">This games are on tranding you can play for big fun</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 mt-5 md:mt-10">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img
                                className="w-[200px] h-[300px]"
                                    src="https://i.ibb.co.com/yy0CcNM/ashphalt-9.webp"
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img
                                className="w-[200px] h-[300px]"
                                    src="https://i.ibb.co.com/pnHkWkS/d-le.png"
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img
                                className="w-[200px] h-[300px]"
                                    src="https://i.ibb.co.com/g9ZgLL4/dragon.jpg"
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img
                                className="w-[200px] h-[300px]"
                                    src="https://i.ibb.co.com/mJNzkk5/games-3.jpg"
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img
                                className="w-[200px] h-[300px]"
                                    src="https://i.ibb.co.com/JmdK6fN/pubg.png"
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure>
                                <img
                                className="w-[200px] h-[300px]"
                                    src="https://i.ibb.co.com/vXWZ8zt/games-4.webp"
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* HIGHEST RATES GAMES SECTION ENDS HERE */}
            </div>
        </div>
    );
};

export default Home;