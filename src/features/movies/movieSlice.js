import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import  {APIKey}  from '../../common/apis/movieApiKey'
 export const fetchAsyncMovies =createAsyncThunk('movies/fetchAsyncMovies',async(term)=>{
    const response =await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
      return response.data  
})
export const fetchAsyncShows =createAsyncThunk('movies/fetchAsyncShows',async(term)=>{
    const response =await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
      return response.data  
})
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async(id)=>{
    const response =await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
      return response.data  
})

const initialState ={
    movies:{},
    shows : {},
    selectMovieOrShow:{}
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers:{
       removeSelectedMovieOeShow : (state)=>{
       state.selectMovieOrShow ={}
       }
    },
    extraReducers : {
        [fetchAsyncMovies.pending] :()=>{
         console.log("pending");   
        },
        [fetchAsyncMovies.fulfilled] : (state,{payload})=>{
            console.log("fetched successfully!")
            return {...state, movies :payload}
        },
        [fetchAsyncMovies.rejected] : ()=>{
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled] : (state,{payload})=>{
            console.log("fetched successfully!")
            return {...state, shows :payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled] : (state, {payload})=>{
            console.log("fetched successfully!")
            return {...state, selectMovieOrShow : payload}
        },
    } 
})

export const {removeSelectedMovieOeShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state)=> state.movies.shows
export const getSelectedMovieOrShow =(state)=> state.movies.selectMovieOrShow
export default movieSlice.reducer;