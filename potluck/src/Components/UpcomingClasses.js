import UpcomingClass from "./UpcomingClass";
import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses } from "../actions/classes.js";
const userID = 1;
function MyBookings() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClasses())
  }, [dispatch]);

  const allClasses = useSelector((state) => state.classes)

  return (
    <div className="classContainer">
      <h1>Upcoming Potlucks</h1>
      {allClasses.filter((int) => int.status == "Upcoming").map((item, index) => {
        return <UpcomingClass item={item} userID={userID} />;
      })}
    </div>
  );
}

export default MyBookings;
