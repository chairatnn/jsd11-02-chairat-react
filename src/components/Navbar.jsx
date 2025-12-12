import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="text-xl bg-gray-300 text-black p-4 shadow-md">
      <ul className="flex gap-12 px-8 py-4 justify-end border-b-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/owner">Owner</Link>
        </li>
      </ul>
    </nav>
  );
}