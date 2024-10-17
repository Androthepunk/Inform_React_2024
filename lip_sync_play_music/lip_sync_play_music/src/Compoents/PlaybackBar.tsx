import { useState } from "react";
import './Styles/Footer.css';

function PlaybackBar() {
    const [count, setCount] = useState(0)
    const [estado, setEstado] = useState('paused')
        return(
        <>  
        
        <h4> Aqui se mostrará la canción en curso reproducida </h4>
        <section>
         <p>Ahora en: {estado}  {count}</p>
        <button  onClick={() => {if (count > 1) setCount((count) => count - 1)}}>
          Previus ⏪
        </button>
        <button onClick={() => {if(count>0){if (estado==='playing') 
                                  {setEstado(()=>'paused')}
                                     else if (estado==='paused'|| estado ==='stopped') 
                                                {setEstado(()=>'playing')}
                                       }else if(count===0){window.alert('No Hay Canciones en lista');
                                        window.alert('Presione por el momento next para seguir probando')}}}>
        ▶️/⏸️  
        </button>
        <button onClick={() => {if (estado==='playing'||estado==='paused') {setEstado(()=>'stopped')}}}>
        ⏹️  
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
         ⏩ Nex
        </button>
        </section>
        </>
        )
};

export default PlaybackBar