import axios from "axios";
import { UnsplashImage, UnsplashResponse } from "./interface";

const API_KEY : string = "eo3wlmmy9uoAtJI6gu_XRO5K_8HtNqC8oee0gFuvgwU";
const BASE_URL: string = "https://api.unsplash.com/search/";



type Params = {
  query: string,
  page: number
}


export const fetchImages = async ({ query , page } : Params) : Promise<UnsplashImage[]> => {
    const {data} = await axios.get<UnsplashResponse>(
    `${BASE_URL}photos`,
    {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
        params: {
           query, 
      page,  
      per_page: 12,
      },
    }
    );
  return data.results;
};



