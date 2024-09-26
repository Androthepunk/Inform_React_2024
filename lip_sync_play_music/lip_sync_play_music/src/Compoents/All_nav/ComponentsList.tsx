import {useState } from "react";
import { Props } from "../../Registers/PROFILES";
import ListNew from "./ListNew";
import NewPlayList from "./NewPlayLIst";

function ComponentsList() {
    const [listValue, setList] = useState<Array<Props>>([])
    return(
        <>
            <ListNew listValue={listValue}/>
            <NewPlayList listValue={listValue} setList={setList}/>
        </>
    )
}

export default ComponentsList