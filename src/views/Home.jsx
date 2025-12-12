import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-300 justify-center">
      <h1 className="text-5xl font-weight: bold front-size: x-large text-center py-4">
        Generation Thailand
      </h1>
      <h1 className="text-5xl font-weight: bold front-size: x-large text-center py-4">
        React - Assessment
      </h1>

      <div className="flex justify-center space-x-40 px-3 py-10">
        <Link to="/user">
          <button className=" bg-gray-200 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-md hover:bg-gray-400 transition duration-150">
            User Home View
          </button>
        </Link>
        <Link to="/admin">
          <button className=" bg-gray-200 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-md hover:bg-gray-400 transition duration-150">
            Admin Home View
          </button>
        </Link>
      </div>
    </div>
  );
}
