import { PROFILES } from "../Registers/PROFILES";
import SongCard from "./SongCard";
import "./Styles/QuickCard.css";

function QuickPicks() {
    return (
      <>
        <h2>Quick Picks</h2>
      <main className="suggested">
      <ul>        
        {PROFILES.map((profile) => {
          return (
            <SongCard
              key={profile.nameSong}
              imageArtist={"profile.imageAlbum"}
              nameSong={profile.nameSong}
              nameArtist={profile.nameArtist}
              nameAlbum={profile.nameAlbum}
              imageAlbum={"profile.imageAlbum"}
              duration={profile.duration}
              gener={profile.gener}
              info={profile.info}
              lyrics={profile.lyrics} />
          );
        })}
      </ul>
      </main>
      </>
    );
  }
  export default QuickPicks