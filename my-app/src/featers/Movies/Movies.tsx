import { RootState } from "../../Store";
import { Movie } from "../../reducers/movies";
import { connect } from "react-redux";
import { MovieCard } from "./MovieCard";
import styles from "./Movies.module.scss";
import { useEffect, useState } from "react";

async function getNowPlaying() {
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mjc0NjFmNzVkNjUwZGM3NGRkYWU4NzA2ODI3MWQ5ZSIsInN1YiI6IjY2MTdjN2U2ZThhM2UxMDE3Y2ExYjZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6n8N5Zyz6_kOjynCaQx2m1Qqqd6_j1IGgj8gbMT-93c'
    }
};

    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
    const json = response.json();

    return json;
}

export function MoviesFetch() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function loadData() {
            const response = await getNowPlaying();
            setMovies(response.results);
        }
        loadData();
    }, [])
    return <Movies movies={movies} />
}

interface MoviesProps {
    movies: Movie[]
}

function Movies({ movies }: MoviesProps) {
    return (
        <section>
            <div className={styles.list}>
                {movies.map(m => (
                    <MovieCard
                        key={m.id}
                        id={m.id}
                        title={m.title}
                        overview={m.overview}
                        popularity={m.popularity}
                    />
                ))}
            </div>
        </section>);
}
const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top
})

const connector = connect(mapStateToProps);
export default connector(Movies)