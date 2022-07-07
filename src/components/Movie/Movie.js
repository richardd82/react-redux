import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        //console.log(this.props.match.params.title)
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId);
    }
    

    render() {    
        //console.log(this.props.movie.Poster) ;  
        return (                
            <div className="movie-detail">
            
                <h1>Título: {this.props.movie.Title}</h1>  
                <p>Year: {this.props.movie.Year}</p>
                <img src={this.props.movie.Poster} alt="" />
                <p>Resumen: {this.props.movie.Plot}</p>
            <hr />
            </div>       
        );        
    }
    
}

function mapStateToProps(state){
    return{   
             
        movie: state.movieDetail,        
    }    
}

export default connect(mapStateToProps, {getMovieDetail})(Movie);