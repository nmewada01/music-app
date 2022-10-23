import * as types from "./actionType";
import axios from "axios";

const getMusicRecordRequest = () => {
  return {
    type: types.GET_MUSIC_RECORD_REQUEST,
  };
};

const getMusicRecords = (params) => (dispatch) => {
  console.log(params)
  dispatch(getMusicRecordRequest());
  return axios
    .get("http://localhost:5001/albums", params)
    .then((res) => {
      return dispatch({
        type: types.GET_MUSIC_RECORD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_MUSIC_RECORD_FAILURE });
    });
};

const updateMusicRecords = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_MUSIC_RECORD_REQUEST });
  return axios
    .patch(`http://localhost:5555/albums/${id}`, payload)
    .then((res) => {
      dispatch({ type: types.UPDATE_MUSIC_RECORD_SUCCESS });
    })
    .catch((err) => dispatch({ type: types.UPDATE_MUSIC_RECORD_FAILURE }));
};

export { getMusicRecords,updateMusicRecords };

//------------------------------------------------------------------------------------

//EXTRA WORK TO CHECK IT IS WORKING OR NOT

// const getMusicRecordSuccess = (payload) => {
//     return {
//       type: types.GET_MUSIC_RECORD_SUCCESS,
//       payload
//     };
//   };
//   const getMusicRecordFailure = () => {
//     return {
//       type: types.GET_MUSIC_RECORD_FAILURE,
//     };
//   };

// const getMusicRecords=(dispatch)=>{
//     dispatch(getMusicRecordRequest())
//..........................................................
//error occurs like dispatch is not a function so in that case
//you have to check that you pass a dispatch as a function or object whatever is the error in
//passing the dispatch remember naresh
//................................................................
//     return axios.get("http://localhost:8080/albums").then((res)=>{
//         dispatch(getMusicRecordSuccess(res.data))
//         console.log(res.data)
//     }).catch((err)=>dispatch(getMusicRecordFailure()))
// }
