// the component function
const Movie = (props) => {

    //The Components Returned JSX
    return (
        <div className="Movie"> 
            <h1>{props.name}</h1>
            <h1>{props.year}</h1>
            <img src={props.image} alt="couldn't find the img"/>
            <h1>{props.rating}</h1>
        </div>
    )
}

// export the component
export default Movie
