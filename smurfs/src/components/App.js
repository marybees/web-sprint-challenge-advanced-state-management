import React, { useEffect } from "react";
import { Spinner } from 'reactstrap';
import "../index.css";
import SmurfList from "../components/SmurfList";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

function App({ fetchSmurfs, loadingStats, errorMessage }) {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);
  return (
    <div className="header" style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1559951407-5195d454e11b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80" + ")" }}>
      <h1>Smurf Village</h1>
      {!loadingStats ? <SmurfList /> : <Spinner color="primary" />}
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
export default connect(mapStateToProps, { fetchSmurfs })(App);
