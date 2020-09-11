import axios from "axios";
export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const POST_SMURF = "POST_SMURF";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_ERROR = "POST_SMURF_ERROR";

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURFS });
        axios
            .get("http://localhost:3333/smurfs")
            .then((response) => {
                console.log(response)
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_SMURFS_ERROR,
                    payload: { message: "Whoops! We're having trouble fetching your Smurf!" }
                });
            });
    };
};

export const postSmurf = (smurfData) => {

    return (dispatch) => {

        dispatch({ type: POST_SMURF });
        axios
            .post("http://localhost:3333/smurfs", smurfData)
            .then((response) => {
                console.log(response)
                dispatch({ type: POST_SMURF_SUCCESS, payload: response.data });
            })
            .catch((error) => {
                dispatch({
                    type: POST_SMURF_ERROR,
                    payload: { message: "Whoops! We're having trouble adding your Smurf!" }
                });
            });
    };
};