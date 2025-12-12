export default function Admin({ onClick, children }) {
  return (
    <button
      onClick={onClick}
       className=" bg-gray-200 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-md hover:bg-gray-400 transition duration-150"
    >
      {children}
    </button>
  );
}