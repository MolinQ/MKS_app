import Header from "../components/Header.jsx";
import Map from "../components/Map.jsx";
import SideBar from "../components/SideBar.jsx";
import useFetchAllDate from "../../helpers/useFetchAllDate.js";

function MainPage() {
    useFetchAllDate();
    return(
        <>
            <div className='container'>
                <div>
                    <Header />
                </div>
                <div className='d-flex justify-content-center gap-2 mt-2'>
                    <Map />
                    <SideBar />
                </div>
            </div>
        </>
    )
}
export default MainPage