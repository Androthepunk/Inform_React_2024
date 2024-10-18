import { useEffect, useState} from "react";
import Props_audio_urls from "../registers/Props_audio_url";
import useFetchData from "../hooks/useFetchData";
const AUDIO_URL = 'https://api.audioboom.com/audio_clips';

function Listen_again() {
  const {data:audio_clips,isLoading, error} = useFetchData(AUDIO_URL);

 
if (isLoading) {
    return <p>Cargando ando....</p>;
}

if (error) {
    return <p>{error}</p>;
}

  return (
      <>
      <h2>Listen again</h2>
      <main className='profiles'>
      <button className="button--previous" type="button"> ◀ </button>
      <ul>
         {audio_clips.map((audio_clip) => {
          return (
            <>
          
          <Props_audio_urls 
              image={audio_clip.channel.urls.logo_image.original}
              title={audio_clip.title}
              recorded_at={audio_clip.recorded_at}
              duration={audio_clip.duration}
              high_mp3={audio_clip.urls.high_mp3}
           />
          
          </>
        );
      })}
        </ul>
        <button className="button--next" type="button"> ▶ </button>  
      </main>
      </>
    );
  }
  export default Listen_again


