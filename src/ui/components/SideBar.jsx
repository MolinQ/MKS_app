import { useSelector } from "react-redux";
import selectors from "../../core/selectors.js";
function SideBar() {
    const currentMembers = useSelector(selectors.members);
    return (
        <div className="border p-2 w-25">
            <div>
                <p>Member of IIS</p>
            <ul className="shorter-member-list" >
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
            </div>
            <hr />
            <p>Total amount: {currentMembers.length} people in ISS</p>
        </div>
    );
}

export default SideBar;