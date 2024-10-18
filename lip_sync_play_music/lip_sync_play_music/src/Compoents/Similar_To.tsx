import useFetchData from "../Hooks/useFetchData";
import Props_audio_urls from "../Registers/Props_audio_url";
//import { PROFILES } from "../Registers/PROFILES";
//import SongCard from "./SongCard";
const AUDIO_URL = 'https://api.audioboom.com/audio_clips';

function Similar_To() {
  const {data:audio_clips,isLoading, error} = useFetchData(AUDIO_URL);

  if (isLoading) {
    return <p>Cargando ando....</p>;
}

if (error) {
    return <p>{error}</p>;
}

    return (
      <>
      <h2>Similar to:</h2>
      <main className='profiles'>
        <ul>
         {audio_clips.map((audio_clip)=>{let aux=audio_clip.title; if (audio_clip.title===aux ){
          return (
            <Props_audio_urls 
            image={audio_clip.channel.urls.logo_image.original}
            title={audio_clip.title}
            recorded_at={audio_clip.recorded_at}
            duration={audio_clip.duration}
            high_mp3={audio_clip.urls.high_mp3} />
          );}
        })}
      </ul>
      </main>
      </>
    );
  }
  export default Similar_To