import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState:{
        movieName:null,
        searchedMovie:null
    },
    reducers: {
        setSearchMovieDetails:(state,action)=>{
            const {searchMovie,movies}=action.payload
            state.searchedMovie=searchMovie
            state.movies=movies
        },
    }
})

export const {setMovieName,setSearchedMovie,setSearchMovieDetails}=searchSlice.actions
export default searchSlice.reducer