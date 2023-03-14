import React from "react";
import "react-toastify/dist/ReactToastify.css";

const MovieCard = ({ data }) => {
	return (
		<>
			{data.length === 2
				? "Not Found"
				: data.map((movie) => {
						return (
							<div key={movie.imdbID} className="mx-auto rounded-2xl bg-slate-800 p-2 flex flex-col items-center">
								<div className="flex flex-col my-3">
									<h1 className="text-white text-5xl mb-2">{movie.Title}</h1>
									<h3>Genre: {movie.Genre}</h3>
									<h3>IMDB Rating: {movie.imdbRating}</h3>
								</div>
								<hr className="w-[90%] my-3" />
								<h3 className="w-[90%]">Plot: {movie.Plot}</h3>
								<div className="w-[80%] md:w-[100%] lg:w-[80%] flex flex-col md:flex-row items-center justify-around my-4">
									<img className="w-[180px] md:w-[250px]" src={movie.Poster} alt={movie.Title} />
									<div className="text-left">
										<h2 className="text-2xl my-3">Movie Details: </h2>
										<h3>Rated: {movie.Rated}</h3>
										<h3>Released Date: {movie.Released}</h3>
										<h3>Runtime: {movie.Runtime}</h3>
										<h3>Director: {movie.Director}</h3>
										<h3>Writer: {movie.Writer}</h3>
										<h3>Actors: {movie.Actors}</h3>
										<h3>Language: {movie.Language}</h3>
										<h3>Country: {movie.Country}</h3>
										<h3>Awards: {movie.Awards}</h3>
										<h3>BoxOffice Collection: {movie.BoxOffice}</h3>
									</div>
								</div>
							</div>
						);
				  })}
		</>
	);
};

export default MovieCard;
