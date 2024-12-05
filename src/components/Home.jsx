
import { Link, useLoaderData } from "react-router-dom";


const Home = () => {

    const highestRatedGames = useLoaderData()
    console.log(highestRatedGames)


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
                            src="https://i.ibb.co.com/hm86nVn/games-2.webp"
                            alt="Drink" />
                    </div>
                </div>
                {/* BANNER SLIDER ENDS HERE */}




                {/* HIGHEST RATES GAMES SECTION STARTS FROM HERE */}
                <div className="mt-10 md:mt-20">
                    <div>
                        <h1 className="text-orange-500 text-3xl font-bold text-center">Highest Rated Games</h1>
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
                        <h1 className="text-purple-500 text-3xl font-bold text-center">Tranding Games</h1>
                        <p className="text-gray-500 text-center">This games are on tranding you can play for big fun</p>
                    </div>
                    <div>

                    </div>
                </div>
                {/* TRANDING GAMES SECTION ENDS HERE */}
            </div>
        </div>
    );
};

export default Home;