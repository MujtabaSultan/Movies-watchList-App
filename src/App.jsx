// src/App.jsx
import './App.css';

const App = () => {
  const movies = [
    { name: 'spider-man', watched: true },
    { name: 'bat-man', watched: false },
    { name: 'super-man', watched: true },
  ];

  return (
    <>
      <h1>movies List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} className={movie.watched ? 'completed' : 'not-completed'}>
            {movie.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;