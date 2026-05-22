import { useContext } from "react";
import { EsemenyContext } from "../contexts/EsemenyContext";


function KategoriaSelect() {
    const {kategoriak, SetKategoriakFilter} = useContext(EsemenyContext);

    return (

        <select 
            className = "form-select mb-3"
            onChange = {(e) => SetKategoriakFilter(e.target.value)}
        >
            <option value= "">Összes kat.</option>
            {kategoriak.map(k => (
                <option key={k.id} value={k.id}>{k.nev}</option>
            ))}
        </select>
    )
}

export default KategoriaSelect;