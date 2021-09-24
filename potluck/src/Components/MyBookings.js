import BookedClass from "./BookedClass";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses } from "../actions/classes";


const userId = 1;

function MyBookings() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClasses())
  }, [dispatch]);

  const allClasses = useSelector((state) => state.classes)

  return (
    <div className="classContainer">
      <h1>Booked Classes</h1>
      {allClasses.filter((int) =>
          int.reservedClientIDs.find((element) => element == userId)
        ).map((item, index) => {
        return (
            <BookedClass item={item} userId={userId} />
        );
      })}
    </div>
  );
}

export default MyBookings;
