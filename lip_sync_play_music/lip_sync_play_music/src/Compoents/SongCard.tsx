import {useState } from "react";
import { Props } from "../Registers/PROFILES";
import "./Styles/SongCard.css"

  function SongCard(props: Props) {
    const [count, setCount] = useState(0)
    const [like, setLike]= useState(false)
    const [boton,setBoton]=useState('')
    const { imageArtist, nameSong, nameArtist, nameAlbum, duration } = props;
    return (
      <>
      <li>
       <div> <img src={imageArtist} /> </div>
        <h2>{nameSong}</h2>
        <p>Artista: {nameArtist}</p>
        <p>Album: {nameAlbum}</p>
        <p>Duración: {duration} min</p>
        <div>
        
        <button className='button' onClick={() => {if (like===false) {setLike(()=>true); setCount(()=>count+1 ); setBoton(()=>'👍' ) } else if (like===true) {setLike(()=>false);setBoton(()=>'' )};if(count>0) setCount((count) => count-1);}}>
        Add to like: {count} {boton}
          
        </button>
        </div>
      </li>
      </>
    );
  };
    
  export default SongCard;