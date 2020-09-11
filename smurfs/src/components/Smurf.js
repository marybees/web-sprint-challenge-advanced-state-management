import React from "react";

function Smurf({ smurf }) {
    return (
        <div style={{ padding: '1% 0' }}>
            <h5>Name: {smurf.name}</h5>
            <h6>Age: {smurf.age}</h6>
            <h6>Height: {smurf.height}</h6>
        </div>
    )
}

export default Smurf;
