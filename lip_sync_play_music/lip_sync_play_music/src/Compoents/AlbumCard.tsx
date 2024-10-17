import { useState } from "react";

type Props = {
    imageArtist: string;
    nameSong: string;
    nameArtist: string;
    nameAlbum: string;
    imageAlbum: string;
    duration: number;
    lyrics?: string;
    gener: string;
    info: string;
  };
  function AlbumCard(props: Props) {
    const { imageAlbum, nameAlbum, nameArtist, gener, duration } = props;
    const [count, setCount] = useState(0)
    const [like, setLike]= useState(false)
    const [boton,setBoton]=useState('')
    
    return (
      <li>
        <div> <img src={imageAlbum} /> </div>
        <h2>{nameAlbum}</h2>
        <p>Artista: {nameArtist}</p>
        <p>Genero: {gener}</p>
        <p>Duración: {duration}</p>
        <div>
        
        <button onClick={() => {if (like===false) {setLike(()=>true); setCount(()=>count+1 ); setBoton(()=>'👍' ) } else if (like===true) {setLike(()=>false);setBoton(()=>'' )};if(count>0) setCount((count) => count-1);}}>
        Add to like: {count} {boton}
          
        </button>
        </div>
      </li>
    );
  }
  
  
  
  export default AlbumCard;