import { getMKSLocationFromAPI } from './getMKSLocationFromAPI';
import { getMembersFromAPI } from './getMembersFromAPI';

export const fetchAllData = () => async (dispatch) => {
    try {
        // Выполнить оба запроса параллельно
        await Promise.all([
            dispatch(getMKSLocationFromAPI()),
            dispatch(getMembersFromAPI())
        ]);
    } catch (error) {
        console.error("Failed to fetch all data:", error);
    }
};