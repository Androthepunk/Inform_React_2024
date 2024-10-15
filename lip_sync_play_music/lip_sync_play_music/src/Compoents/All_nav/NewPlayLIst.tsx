import '/src/main.css'
import '../Styles/Form_app.css'
import { Props } from '../../Registers/PROFILES'
import { ChangeEvent, FormEvent, useReducer, useState} from 'react'


const INITIAL_STATE = {
  imageArtist: '',
  nameAlbum: '',
  imageAlbum: '',
  nameArtist: '',
  year: 0,
  durationTot:0,
  cantSong:0,
  nameSong: '',
  nroTrack:0,
  duration: 0,
  lyrics: '',
  gener: '',
  info: '',
};

interface FormState {
    inputValue: Props
}


type FormReducerAction = {
    type:"change_value"
    payload: {
        inputName: string,
        inputValue: string
    }
} | {type:"clear"}

const formReducer = (state: FormState['inputValue'], action: FormReducerAction) => {
    switch (action.type) {
        case 'change_value':
            { const {inputName, inputValue} = action.payload
            return {
                ...state,
                [inputName]: inputValue
            } }
        case 'clear':
            return INITIAL_STATE
        default:
            return state
    }
}

const useNewUsuarioForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

 type FormProp={
    listValue: Array<Props>
    setList: React.Dispatch<React.SetStateAction<Props[]>>
}

function NewPlayList ({listValue, setList}:FormProp) {
    //const {  nameSong, imageAlbum,gener,durationTot,cantSong,nroTrack, imageArtist,nameArtist, nameAlbum, year, duration } = props;
    const [inputValue, setInputValue ] = useNewUsuarioForm() ;
    const [submitF, setSubmitF]= useState(false)
    const handleSubmit = (event:FormEvent<HTMLFormElement >)=> {
        event.preventDefault();     //para evitar el comportamiento 
        const newList= [...listValue]
        newList.push(inputValue);
        setList(newList)
        handleClear()
        setInputValue({type:'clear'});
        if (submitF===true) { 
         (handleClear())}
        setSubmitF(false)
        
    }                               //por defecto del navegador

    
 
    const handleChange=(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement >)=>{
        
        const {name, value}=event.target
        setInputValue({
            type: "change_value",
            payload:{
                inputName: name,
                inputValue: value
                
            }
        })
    }

    const handleClear = () =>  {
        setInputValue ({type:"clear"})
    }

    return (
        
        <div className='form_nl'>
            <form onSubmit={handleSubmit} >
                <>
                <label >Nombre Album</label>
                <input  type="text" value={inputValue.nameAlbum} onChange={handleChange} name='nameAlbum'/>
                <label >Artista</label>
                <input  onChange={handleChange} value={inputValue.nameArtist} type="text" name='nameArtist'/>
                <label >Cover</label>
                <input  onChange={handleChange} value={inputValue.imageAlbum} type="imageData" name='imageAlbum'/>
                <label >Año</label>
                <input  onChange={handleChange} value={inputValue.year} type="date" name='year'/>
                <label >Duración Total</label>
                <input onChange={handleChange} value={inputValue.durationTot} type="datetime" name="durationTot" />
                <label >Cantidad de temas</label>
                <input onChange={handleChange} value={inputValue.cantSong} type="number" name='cantSong'/>
                <label >Lista de Temas
                    <label >Nro de pista:</label>
                    <input onChange={handleChange} value={inputValue.nroTrack} type="number" name='nroTrack'/>
                    <label >Nombre de tema: </label>
                    <input type="text"  onChange={handleChange} value={inputValue.nameSong} name='nameSong'/>
                    <label >Duración: </label>
                    <input value={inputValue.duration} onChange={handleChange} type="datetime"  name='duration'/>
                </label>
                <label >Genero: </label>
                <input onChange={handleChange} value={inputValue.gener} type="text" name='gener'/>
                <label >Foto Artista: </label>
                <input onChange={handleChange} value={inputValue.imageArtist} type="img" name='imageArtist'/>
                </>
                <button type="submit" name='agregar'>Agregar</button>
                
            </form>
            <button  name='cancelar' onClick={handleClear}>Cancelar</button>
        </div>
    
    )
}

export default NewPlayList


