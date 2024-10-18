import {useState } from "react";
import { Props } from "../../registers/PROFILES";
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