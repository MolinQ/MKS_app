import  { useSelector } from "react-redux";
import selectors from "../../core/selectors.js";

function CurrentLocatedAt() {
    const currentLongitude = useSelector(selectors.longitude)
    const currentLatitude = useSelector(selectors.latitude)
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