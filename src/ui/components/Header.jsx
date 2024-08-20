import CurrentLocatedAt from "./CurrentLocatedAt.jsx";
import CurrentUtcTime from "./CurrentUtcTime.jsx";

function Header() {
    return(
        <div className='d-flex gap-2 justify-content-center'>
        <CurrentLocatedAt />
            <CurrentUtcTime />
        </div>
    )
}
export default Header