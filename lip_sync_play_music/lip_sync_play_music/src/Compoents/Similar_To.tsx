import { PROFILES } from "../Registers/PROFILES";
import SongCard from "./SongCard";


function Similar_To() {
    return (
      <>
      <h2>Similar to:</h2>
      <main className='profiles'>
        <ul>
         {PROFILES.map((profile)=>{if (profile.gener==='rock' ){
          return (
            <SongCard
              key={profile.gener}
              imageArtist={profile.imageArtist}
              nameSong={profile.nameSong}
              nameArtist={profile.nameArtist}
              imageAlbum={profile.imageAlbum}
              nameAlbum={profile.nameAlbum}
              duration={profile.duration}
              gener={profile.gener}
              lyrics={profile.lyrics}
              info={profile.info} />
          );}
        })}
      </ul>
      </main>
      </>
    );
  }
  export default Similar_To