import React from "react";

function Smurf({ smurf }) {
    return (
        <div>
            <h3>{smurf.name}</h3>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </div>
    )
}

export default Smurf;
