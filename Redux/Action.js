import { SET_MOVIE_DATA } from "./Action-Types"

export const setMovieData = (data) => (
    {
        type: SET_MOVIE_DATA,
        payload: data,
    }
)