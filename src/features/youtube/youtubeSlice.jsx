import {createSlice} from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";
const initialState = {
    videos:[],
    currentPlaying:null,
    searchTerm: "",
    searchResults:[],
    nextPageToker: null,
    recommendedVideo:[]
};

const youtubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{
        clearVideos:(state)=>{
            state.videos = [];
            state.nextPageToker = null
        },
        changeSearchTerm:(state,action)=>{
            state.searchTerm=action.payload;
        },
        clearSearchTerm:(state)=>{
            state.searchTerm="";
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData
                state.nextPageToker = action.payload.nextPageToken
            }
        })
        builder.addCase(getSearchPageVideos.fulfilled,(state,action)=>{
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData
                state.nextPageToker = action.payload.nextPageToken
            }
        })
    }
});

export const {clearVideos,changeSearchTerm,clearSearchTerm} = youtubeSlice.actions;
export default youtubeSlice.reducer