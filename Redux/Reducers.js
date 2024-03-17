import { SET_MOVIE_DATA } from "./Action-Types"

const initialState = {
    movies: [],
    genre: ""
}


const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_DATA:
            return {
                ...state,
                movies:
                    action.payload.genre === state.genre ?
                        state.movies.concat(action.payload.response) :
                        action.payload.response,
                genre: action.payload.genre
            }
        default:
            return state
    }
}


export default moviesReducer