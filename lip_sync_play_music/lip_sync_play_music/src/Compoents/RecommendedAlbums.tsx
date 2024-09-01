import { PROFILES } from "../Registers/PROFILES";
import AlbumCard from "./AlbumCard";
import "./Styles/AlbumCard.css"

function RecommendedAlbums() {
    return (
      <>
      <h2>Recommended Albums</h2>
      <main className="catalogs">
      <ul>        
        {PROFILES.map((profile) => {
          return (
            <AlbumCard
              key={profile.nameAlbum}
              imageAlbum={profile.imageAlbum}
              nameSong={profile.nameSong}
              imageArtist={profile.imageArtist}
              nameArtist={profile.nameArtist}
              nameAlbum={profile.nameAlbum}
              duration={profile.duration}
              gener={profile.gener}
              info={profile.info}/>
          );
        })}
      </ul>
      </main>
      </>
    );
  }
  export default RecommendedAlbums