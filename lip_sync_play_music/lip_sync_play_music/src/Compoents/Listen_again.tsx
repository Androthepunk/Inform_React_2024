import SongCard from "./SongCard";

function Listen_again() {
    return (
      <ul>
        {PROFILES.map((profile) => {
          return (
            <SongCard
                  key={profile.nameSong}
                  nameSong={profile.nameSong}
                  nameArtist={profile.nameArtist}
                  nameAlbum={profile.nameAlbum}
                  duration={profile.duration}
                  gener={profile.gener}                          
                  info={profile.info}            />
          );
        })}
      </ul>
    );
  }
  export default Listen_again