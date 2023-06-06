import { useState } from "react";
import ListUpContext from "./ListUpContext";

const ListUpState = (props) => {
    const [first, setfirst] = useState("")
    return(
        <ListUpContext.Provider value={first}>
            {props.children}
        </ListUpContext.Provider>
    )
}

export default ListUpState;