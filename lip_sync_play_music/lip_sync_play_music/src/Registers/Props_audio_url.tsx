import { useState } from "react";
import "../Compoents/Styles/SongCard.css"

type Prop_audio_clip={
    audio_clips: Array<never>
    setProfiles:React.Dispatch<React.SetStateAction<never[]>>
}
function Props_audio_urls(props:Prop_audio_clip){
    
    const [count, setCount] = useState<number>(0)
    const [like, setLike]= useState<boolean>(false)
    const [boton,setBoton]=useState<string>('')
    const {image,title,recorded_at,duration,high_mp3} = props
   
return(
    <>
             <li>
                <div><img src={image}/></div>
                <h5>{title}</h5>
                <p>{recorded_at}</p>
                <p>{duration}</p>
                <audio>src={high_mp3}</audio>
                <div>
                   <button className='button' onClick={() => {
                        if (like===false) {setLike(()=>true);
                         setCount(()=>count+1 ); setBoton(()=>'👍' ) }
                          else if (like===true) {setLike(()=>false);setBoton(()=>'' )};
                          if(count>0) setCount((count) => count-1);}}>
                        Add to like: {count} {boton}                    
                    </button>
                </div>
                
            </li>
            
                    
       
     
      
    </>
)
    }

export default Props_audio_urls