//import { useState } from "react";
import { Props } from "../../Registers/PROFILES";
import "../Styles/ListNew.css"

type Listprop={
    listValue: Array<Props>
}

function ListNew({listValue}:Listprop) {
    
return (
    <>
        <ul >
            {listValue.map((inputValue)=>{
                return (
                    <>
                        <li key={inputValue.nameArtist}>
                            <img src={inputValue.imageAlbum}/>
                            <p>{inputValue.nameArtist}</p>
                            <p>{inputValue.nameSong}</p>
                            <p>{inputValue.nameAlbum}</p>
                            <p >{inputValue.year}</p>
                            <p>{inputValue.duration}</p>
                        </li>
                    </>);
                })}
            </ul>
    </>)
}

export default ListNew