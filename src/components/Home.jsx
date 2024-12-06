
import { Link, useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import lottie from "../../public/lottie.json";
import { Fade } from "react-awesome-reveal";


const Home = () => {

    const highestRatedGames = useLoaderData()


    return (
        <div>
            <div className="text-center">
                {/* BANNER SLIDER STARTS FROM HERE */}
                <div className="carousel rounded-box text-center mt-12">
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
                            src="https://i.ibb.co.com/VWBCZ9c/ashphalt-9.webp"
                            alt="Drink" />
                    </div>
                </div>
                {/* BANNER SLIDER ENDS HERE */}




                {/* HIGHEST RATES GAMES SECTION STARTS FROM HERE */}
                <div className="mt-10 md:mt-20 px-2 md:px-16">
                    <div>
                        <h1 className="text-orange-500 text-3xl font-bold text-center"><Fade>Highest Rated Games</Fade></h1>
                        <p className="text-gray-500 text-center">This games are now on highest stars of ratings you can play for big fun</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5 mt-10">
                        {
                            highestRatedGames.map((game) =>
                                <div className="card card-side bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            className="w-[200px] h-[300px]"
                                            src={game?.gameImage}
                                            alt="Movie" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{game?.gameTitle}</h2>
                                        <p>Rating: {game?.rating}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/review/${game._id}`}><button className="btn btn-primary">Explore Details</button></Link>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
                {/* HIGHEST RATES GAMES SECTION ENDS HERE */}




                {/* TRANDING GAMES SECTION STARTS FROM HERE */}
                <div className="my-20">
                    <div>
                        <h1 className="text-purple-500 text-3xl font-bold text-center"><Fade>Tranding Games</Fade></h1>
                        <p className="text-gray-500 text-center">This games are on tranding you can play for big fun</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-10 bg-orange-100 w-full md:w-2/3 mx-auto rounded-2xl">
                        <div>
                            <Lottie animationData={lottie} className="w-96" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-3">
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/6gtgfVD/trand.jpg" alt="" />
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/LQW4RgH/dev.jpg" alt="" />
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/Bz6RPbJ/dragon.jpg" alt="" />
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/hcc1BdX/joystick.jpg" alt="" />
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/LvfhQyr/games.png" alt="" />
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/Mn692ng/d-le.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* TRANDING GAMES SECTION ENDS HERE */}



                <div className="my-20">
                    <div>
                        <h1 className="text-blue-500 text-3xl font-bold text-center"><Fade>Hot Picks of the Week for trending games</Fade></h1>
                    </div>
                    <div className="flex gap-10 flex-col md:flex-row justify-evenly items-center mt-10 bg-black py-20">
                        <div>
                            <div className="card w-full md:w-[500px] shrink-0 border border-white">
                                <form className="card-body">
                                    <h1 className="text-white text-2xl font-semibold">Share Your Thoughts</h1>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Message</span>
                                        </label>
                                        <textarea type="text" placeholder="your message" className="input input-bordered resize-none" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-neutral">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-3">
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/HGNFGvv/pubg.png" alt="" />
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/LQW4RgH/dev.jpg" alt="" />
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/Bz6RPbJ/dragon.jpg" alt="" />
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/hcc1BdX/joystick.jpg" alt="" />
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/LvfhQyr/games.png" alt="" />
                            <img className="w-[200px] h-[120px] shadow-xl" src="https://i.ibb.co.com/VWBCZ9c/ashphalt-9.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;