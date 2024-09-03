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
              nameArtist={profile.nameArtist}
              nameAlbum={profile.nameAlbum}
              imageAlbum={profile.imageAlbum}
              duration={profile.duration}
              gener={profile.gener}
              info={profile.info} lyrics={profile.lyrics} />
          );
        })}
      </ul>
      </main>
      </>
    );
  }
  export default Listen_again