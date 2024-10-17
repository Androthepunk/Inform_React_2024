type Props = {
    nameSong: string;
    nameArtist: string;
    nameAlbum: string;
    duration: number;
    lyrics: string;
    gener: string;
    info: string;
  };
  function ArtistCard(props: Props) {
    const { nameSong, nameArtist, nameAlbum, duration } = props;
    return (
      <li>
        <h2>{nameSong}</h2>
        <p>Artista: {nameArtist}</p>
        <p>Album: {nameAlbum}</p>
        <p>Duración: {duration}</p>
      </li>
    );
  }
  
  
  
  export default ArtistCard;