import React from "react";
import "../index.css"
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button } from 'reactstrap';


const SmurfForm = ({ postSmurf }) => {

    const addSmurf = (e) => {
        const smurfData =
        {
            "name": "Tubby",
            "age": 34,
            "height": 6
        }
        e.preventDefault();
        postSmurf(smurfData);
    };

    return (
        <Form onSubmit={addSmurf}>
            <FormGroup >
                <Input
                    style={{ width: "50%", textAlign: "center" }}
                    type="text"
                    placeholder="Smurf Name"
                />
                <Input
                    style={{ width: "50%", textAlign: "center" }}
                    type="text"
                    placeholder="Smurf Age"
                />
                <Input
                    style={{ width: "50%", textAlign: "center" }}
                    type="text"
                    placeholder="Smurf Height"
                />
            </FormGroup>
            <Button>Add Smurf</Button>
        </Form>
    );
}

function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    };
}

export default connect(mapStateToProps, {})(SmurfForm);
