import { Reducer } from "react";
import { Action } from "redux";


export interface Movie {
    id: number;
    title: string;
    popularity: number;
    overview: string;
    image?: string;
}

interface MoviesState {
    top: Movie[]
}

const initialState: MoviesState = {
    top: [
        { id: 1, title: "Inception", popularity: 98, overview: "Dreams..." },
        { id: 2, title: "The Goldfather", popularity: 97, overview: "Goldfather..." },
        { id: 3, title: "The dark Knight", popularity: 96.5, overview: "Batman..." },
        { id: 4, title: "The Goldfather Part II", popularity: 96, overview: "Part II..." },
        {id: 5, title: "The Goldfather Part II", popularity:96, overview: "Part II..."},
    ]
}

const moviesReducers: Reducer<MoviesState, Action> = (state, action) => {
    return initialState;
}
export default moviesReducers;