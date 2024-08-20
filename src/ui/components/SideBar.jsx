import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMembersFromAPI } from "../../core/thunks/getMembersFromAPI.js";
import selectors from "../../core/selectors.js";

function SideBar() {
    const dispatch = useDispatch();
    const currentMembers = useSelector(selectors.members);
    // useEffect(() => {
    //     const fetchData = async () => {
    //             await dispatch(getMembersFromAPI());
    //     }
    //     fetchData();
    // }, [dispatch]);

    return (
        <div className="border p-2 w-25">
            <ul className="list-unstyled">
                {currentMembers.map((member, index) => (
                    <li key={index} className="border rounded-5 m-2 p-2 d-flex align-items-center">
                        <img
                            src="../../../src/icons/member-icon.png"
                            alt="Member Icon"
                            className="rounded-circle p-1"
                            width="30"
                            height="30"
                        />
                        {member.name}
                    </li>
                ))}
            </ul>
            <hr />
            <p>Total amount: {currentMembers.length} people in ISS</p>
        </div>
    );
}

export default SideBar;