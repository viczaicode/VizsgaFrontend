import {useContext} from "react";
import { EsemenyContext } from "../contexts/EsemenyContext";

function SorEsemeny({esemeny}) {
    const {setKivalasztott} = useContext(EsemenyContext);

    return(

        <tr 
            style={{cursor:"pointer"}}
            onClick={() => setKivalasztott(esemeny)}
        >
            <td>{esemeny.nev}</td>
            <td>{esemeny.kategoria.nev}</td>

        </tr>

    );
}

export default SorEsemeny;