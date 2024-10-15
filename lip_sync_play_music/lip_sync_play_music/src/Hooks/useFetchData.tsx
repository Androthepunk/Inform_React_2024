import { useState, useEffect } from "react";

//const AUDIO_URL = 'https://api.audioboom.com/audio_clips/urls/high_mp3';

function useFetchData(url:string) {
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
        .then((res) => res.json())           
        .then((data) => {
            setData(data.body.audio_clips);
            console.log('data',data.body.audio_clips)
        })
        .catch(() => {
            setError('Hubo un error');
        })
        .finally(() => {
            setIsLoading(false);
        });
    
    }, ([setData]));

    
   return{data,isLoading,error} 
}

export default useFetchData