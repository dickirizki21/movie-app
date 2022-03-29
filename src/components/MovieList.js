import React from "react";

const MovieList = (props) => {
    return(
        <>
            <div className=" row image-container-flex justify-content-start m-5">
            { props.movies.map((movie,index)=> (
                <div className="card-container">
                    <div className="image">
                        <img src={movie.Poster} alt="posetermovie"></img>
                    </div>
                    <div className="card-title">
                        <p>{ movie.Title}</p>
                    </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default MovieList;