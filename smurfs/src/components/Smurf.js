import React from "react";

function Smurf({ smurf }) {
    return (
        <div>
            <h5>{smurf.name}</h5>
            <h6>{smurf.age}</h6>
            <h6>{smurf.height}</h6>
        </div>
    )
}

export default Smurf;
