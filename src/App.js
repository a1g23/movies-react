import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';


function App() {

  const movies = [
    {
      name: "movie1",
      year: "2222",
      rating: "G",
      image: "https://www.something.com/image.png"

    },
    {
      name: "movie2",
      year: "2222",
      rating: "G",
      image: "https://www.something.com/image.png"

    },
    {
      name: "movie3",
      year: "2222",
      rating: "G",
      image: "https://www.something.com/image.png"

    },
    {
      name: "movie4",
      year: "2222",
      rating: "G",
      image: "https://www.something.com/image.png"

    },
    {
      name: "movie5",
      year: "2222",
      rating: "G",
      image: "https://www.something.com/image.png"

    },
  ]


  return (
    <div className="App">
      <Movies movie={movies}/>
    </div>
  );
}

export default App;
