import axios from "axios";
import MksSlice from "../slices/mksSlice.js";

export const getMKSLocationFromAPI = () => async (dispatch) => {
  const MKS_LOCATION_API_URL = "http://api.open-notify.org/iss-now.json";

  const response = await axios.get(MKS_LOCATION_API_URL);
  dispatch(
    MksSlice.actions.setMksLongitude(response.data.iss_position.longitude)
  );
  dispatch(
    MksSlice.actions.setMksLatitude(response.data.iss_position.latitude)
  );
};
