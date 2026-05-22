import { useContext } from "react";
import { EsemenyContext } from "../contexts/EsemenyContext";

function EgyEsemeny() {
    const {kivalasztott} = useContext(EsemenyContext);

    if(!kivalasztott) {
        return <p>kattints egy receptre a részletekhez</p>;
    }

    return (

        <div className="card mt-4">
            <div className="card-body">
                <h2>{kivalasztott.nev}</h2>
                {kivalasztott.kep_eleresi_ut && (
                    <img 
                        src= {kivalasztott.kep_eleresi_ut}
                        alt=""
                        className="img-fluid mb-3"
                        style= {{maxWidth: "300px"}}
                    />
                )}
                <p>{kivalasztott.leiras}</p>
            </div>
        </div>
    );
}

export default EgyEsemeny;