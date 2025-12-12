
    import { Link } from "react-router-dom";

    export default function Navbar(){
        return (
        <nav className="bg-teal-500 text-white p-4 shadow-md">
            <ul className="flex gap-4 justify-center">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    <Link to="/owner">Owner</Link>
                </li>
                 {/* <li>
                    <Link to="/FetchAPI_EmptyArray">Fetch 1</Link>
                </li> */}
            </ul>
        </nav>
        )
}