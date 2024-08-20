import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMKSLocationFromAPI } from "../core/thunks/getMKSLocationFromAPI.js";
import { getMembersFromAPI } from "../core/thunks/getMembersFromAPI.js";

function useFetchAllDate() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getMKSLocationFromAPI());
        await dispatch(getMembersFromAPI());
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [dispatch]);
}
export default useFetchAllDate;
