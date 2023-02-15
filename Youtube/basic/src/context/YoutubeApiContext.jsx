import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutubeClient";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();

//const youtube = new FakeYoutube();//new Youtube();
const client = new YoutubeClient();
const youtube = new Youtube(client);
export function YoutubeApiProvider({children}){
    return (
        <YoutubeApiContext.Provider 
            value={{youtube}}>
                {children}
        </YoutubeApiContext.Provider>)
}

export function useYoutubeApi(){
    return useContext(YoutubeApiContext);
}