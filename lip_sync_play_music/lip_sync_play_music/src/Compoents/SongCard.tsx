type Props = {
    nameSong: string;
    nameArtist: string;
    nameAlbum: string;
    duration: number;
    lyrics?: string;
    gener: string;
    info: string;
  };
  function SongCard(props: Props) {
    const { nameSong, nameArtist, nameAlbum, duration } = props;
    return (
      <li>
        <h2>{nameSong}</h2>
        <p>Artista: {props.nameArtist}</p>
        <p>Album: {props.nameAlbum}</p>
        <p>Duración: {props.duration}</p>
      </li>
    );
  }
  
  
  
  export default SongCard;