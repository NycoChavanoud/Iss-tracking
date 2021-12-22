// import React from "react";
// import "../styles/BtnStartStop.css";

// const BtnStartStop = (iss, message, latitude, longitude, timestamp) => {
//   const dispatch = useDispatch();
//   const iss = useSelector((state) => state.issReducer.iss);
//   const message = iss.message;
//   const latitude = iss.iss_position.latitude;
//   const longitude = iss.iss_position.longitude;
//   const timestamp = iss.timestamp;

//   const startTracking = () => {
//     useEffect(() => {
//       setInterval(() => {
//         dispatch(getIssFetch());
//       }, 1000);
//     }, [dispatch]);
//   };

//   return <button className="btn-iss-tracking" onClick={startTracking} >WIP</button>;
// };

// export default BtnStartStop;
