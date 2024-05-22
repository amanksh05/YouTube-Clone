import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";
// const API_KEY = process.env.API_KEY

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext,{getState})=>{
        const{
            youtubeApp:{
                nextPageToken:nextPageTokenFromState,vidoes
            }
            
        } = getState();

        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="Striver"&key=AIzaSyBnOQFud1-A_FeZ-a3mL1aGhiyjlO_C1ws&part=snippet&type=video`);
        // console.log(response.data.items)

        const items = response.data.items;

        const parsedData = await parseData(items)
    }

    
)