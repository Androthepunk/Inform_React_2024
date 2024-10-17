import { PROFILES } from "../Registers/PROFILES";
import SongCard from "./SongCard";


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