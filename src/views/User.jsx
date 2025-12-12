import { useState } from "react";

export default function User() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMembers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://67eca027aa794fb3222e43e2.mockapi.io/members"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">User Page</h1>
      <button
        onClick={fetchMembers}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Fetch Members
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {members.length > 0 && (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Position</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td className="py-2 px-4 border-b text-center">{member.name}</td>
                <td className="py-2 px-4 border-b text-center">{member.lastname}</td>
                <td className="py-2 px-4 border-b text-center">{member.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
