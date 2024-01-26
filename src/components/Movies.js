import Movie from './Movie'

// the component function
const Movies = (props) => {

    //The Components Returned JSX
    return (
        <div className="Movies">
        {props.movie.map(el => <Movie name={el.name} year={el.year} rating={el.rating} image={el.image}/>)}
        </div>
    )
}

// export the component
export default Movies
