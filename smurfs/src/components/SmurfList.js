import React from "react";
import "../index.css"
import { connect } from "react-redux";
import Smurf from "./Smurf";

function SmurfList(props) {

    return (
        <div className="smurf-list">
            <div>{props.smurfs.map((smurf) => {
                return <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} smurf={smurf} />;
            })}</div>
        </div>
    );

}

function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    };
}

export default connect(mapStateToProps, {})(SmurfList);
