import React, { useEffect } from "react";
import { Spinner } from 'reactstrap';
import "../index.css";
import SmurfList from "../components/SmurfList";
import SmurfForm from "../components/SmurfForm"
import { connect } from "react-redux";
import { fetchSmurfs, postSmurf } from "../actions";

function App({ fetchSmurfs, postSmurf, loadingSmurfs, errorMessage }) {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);
  return (
    <div className="header">
      <h1 style={{ padding: '2% 0' }}>Smurf Village</h1>
      <SmurfForm postSmurf={postSmurf} />
      {!loadingSmurfs ? <SmurfList /> : <Spinner color="primary" />}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage
  };
}
export default connect(mapStateToProps, { fetchSmurfs, postSmurf })(App);
