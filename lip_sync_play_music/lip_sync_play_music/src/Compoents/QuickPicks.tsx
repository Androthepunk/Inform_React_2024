import useFetchData from "../Hooks/useFetchData";
//import { PROFILES } from "../Registers/PROFILES";
import Props_audio_urls from "../Registers/Props_audio_url";
//import SongCard from "./SongCard";
import "./Styles/QuickCard.css";
const AUDIO_URL = 'https://api.audioboom.com/audio_clips';

function QuickPicks() {

  const {data:audio_clips,isLoading, error} = useFetchData(AUDIO_URL);

 
  if (isLoading) {
      return <p>Cargando ando....</p>;
  }
  
  if (error) {
      return <p>{error}</p>;
  }

    return (
      <>
        <h2>Quick Picks</h2>
      <main className="suggested">
      <ul>        
        {audio_clips.map((audio_clip) => {
          return (
            <Props_audio_urls
              image={audio_clip.channel.urls.logo_image.original}
              title={audio_clip.title}
              recorded_at={audio_clip.recorded_at}
              duration={audio_clip.duration}
              high_mp3={audio_clip.urls.high_mp3} />
          );
        })}
      </ul>
      </main>
      </>
    );
  }
  export default QuickPicks