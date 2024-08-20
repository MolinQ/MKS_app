import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMKSLocationFromAPI} from "../../core/thunks/getMKSLocationFromAPI.js";
import selectors from "../../core/selectors.js";

function CurrentLocatedAt() {
    const dispatch = useDispatch();
    const currentLongitude = useSelector(selectors.longitude)
    const currentLatitude = useSelector(selectors.latitude)

    // useEffect(() => {
    //     const fetchData = async () => {
    //     await dispatch(getMKSLocationFromAPI())
    //     }
    //     fetchData()
    // })
    return(
        <div className='border w-50 p-2'>
        <p className='fw-bold'>
            ISS is now located at:
        </p>
            <pre>
                Longitude: {currentLongitude} <br/>
                latitude: {currentLatitude}
            </pre>
        </div>
    )
}
export default CurrentLocatedAt