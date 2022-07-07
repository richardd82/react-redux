import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies?.map((movie)=> {
            return(
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
                <p>Year: {movie.year}</p>
                <img src={movie.poster} alt="" />                                
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}
function mapState(state){
  return{
    movies: state.moviesFavorites,
  };
}
function mapDispatch(dispatch){
  return{
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id)),
  }
}


export default connect(mapState, mapDispatch)(ConnectedList);
