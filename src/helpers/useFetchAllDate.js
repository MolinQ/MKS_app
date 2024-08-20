import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getMKSLocationFromAPI} from "../core/thunks/getMKSLocationFromAPI.js";
import {getMembersFromAPI} from "../core/thunks/getMembersFromAPI.js";

function useFetchAllDate() {
const dispatch = useDispatch();

useEffect(() => {
    const fetchData = async () => {
        try {
            await dispatch(getMKSLocationFromAPI());
            await dispatch(getMembersFromAPI());
        } catch (error) {
            console.error('Error', error);
        }
    };

    fetchData().then(r => console.log('fetch completed'));
}, [dispatch]);
}
export default useFetchAllDate