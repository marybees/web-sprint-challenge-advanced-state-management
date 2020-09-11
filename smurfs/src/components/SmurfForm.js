import React from "react";
import "../index.css"
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button } from 'reactstrap';


const SmurfForm = ({ postSmurf }) => {

    const addSmurf = (e) => {
        const formData = new FormData(e.target)
        const smurfData = {}
        e.preventDefault();
        for (let [key, value] of formData.entries()) {
            smurfData[key] = value;
        }
        postSmurf(smurfData);
    };

    return (
        <Form onSubmit={addSmurf}>
            <FormGroup >
                <Input
                    style={{ width: "30%" }}
                    type="text"
                    name="name"
                    placeholder="Smurf Name"
                />
                <Input
                    style={{ width: "30%" }}
                    type="text"
                    name="age"
                    placeholder="Smurf Age"
                />
                <Input
                    style={{ width: "30%" }}
                    type="text"
                    name="height"
                    placeholder="Smurf Height"
                />
            </FormGroup>
            <Button style={{ margin: '2% 0' }}>Add Smurf</Button>
        </Form>
    );
}

function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    };
}

export default connect(mapStateToProps, {})(SmurfForm);
