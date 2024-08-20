import axios from "axios";
import MksSlice from "../slices/mksSlice.js";
export const getMembersFromAPI = () => async (dispatch) => {
    const PEOPLE_IN_SPACE_API_URL = 'http://api.open-notify.org/astros.json';

        const response = await axios.get(PEOPLE_IN_SPACE_API_URL);
        dispatch(MksSlice.actions.setMembers(response.data.people));
};