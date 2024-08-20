import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getMKSLocationFromAPI} from "../core/thunks/getMKSLocationFromAPI.js";
import {getMembersFromAPI} from "../core/thunks/getMembersFromAPI.js";

function useFetchAllDate() {
const dispatch = useDispatch();

useEffect(() => {
    let isAppStart = false
    const fetchData = async () => {
        try {
            isAppStart = true;
            await dispatch(getMKSLocationFromAPI());
            await dispatch(getMembersFromAPI());
        } catch (error) {
            console.error('Error', error);
        }
    };

    fetchData()
    const intervalId = setInterval(() => {
        fetchData()
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
}, [dispatch]);
}
export default useFetchAllDate