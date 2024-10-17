import { PROFILES } from "../Registers/PROFILES";
import SongCard from "./SongCard";
//const AUDIO_URL = 'https://api.audioboom.com/audio_clips';

{/*const [audio_clips, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(AUDIO_URL)
      .then((res) => res.json())            ------> No pude fechear, y mapear los datos, me daban errores de tipo
      .then((data) => {
        setProfiles(data.results);
      })
      .catch(() => {
        setError('Hubo un error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Cargando ando....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  } */}

function Listen_again() {
    return (
      <>
      <h2>Listen again</h2>
      <main className='profiles'>
        <ul>
         {PROFILES.map((profile) => {
          return (
            <SongCard
              key={profile.nameSong}
              imageArtist={profile.imageArtist}
              nameSong={profile.nameSong}
              nameAlbum={profile.nameAlbum}
              imageAlbum={profile.imageAlbum}
              nameArtist={profile.nameArtist}
              year={profile.year}
              durationTot={profile.durationTot} 
              cantSong={profile.cantSong}
              nroTrack={profile.nroTrack}
              duration={profile.duration}
              gener={profile.gener}
              info={profile.info} 
              lyrics={profile.lyrics} 
            />
          );
        })}
      </ul>
      </main>
      </>
    );
  }
  export default Listen_again