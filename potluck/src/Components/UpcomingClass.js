import React from "react";
import { useHistory } from "react-router-dom";
import { updateAClass } from "../actions/classes.js";
import { useDispatch} from "react-redux";

function UpcomingClass({ item, userID }) {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleBookCLass = () => {
    item.reservedClientIDs.push(userID.toString());
    console.log(item);
    dispatch(updateAClass(item.classID, item))
  };

  if (!item) return <div></div>;
  return (
    <div className="classBox">
      <h3>Class Name : {item.className}</h3>
      <p>Date : {item.startDate}</p>
      <p>Time : {item.startTime}</p>
      <p>Class Type: {item.type}</p>
      <p>Duration: {item.duration} mins</p>
      <p>Class Level: {item.intensity} </p>
      <p>Class Status: {item.status} </p>
      <p>Class Location:{item.location}</p>
      {item.reservedClientIDs.includes(userID.toString()) ? 
        <button disabled >Booked</button>
       : 
        <button onClick={handleBookCLass}>Book</button>
      }
    </div>
  );
}

export default UpcomingClass;
