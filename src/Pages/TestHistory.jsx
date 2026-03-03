export default function TestHistory() {
  const history =
    JSON.parse(localStorage.getItem("testHistory")) || [];

  if (history.length === 0) {
    return <p className="text-center mt-10">No test attempts yet</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">
          🧾 Test Attempt History
        </h2>

        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Course</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Score</th>
              <th className="border p-2">%</th>
              <th className="border p-2">Result</th>
            </tr>
          </thead>

          <tbody>
            {history.map((h, i) => (
              <tr key={i} className="text-center">
                <td className="border p-2">{h.courseSlug}</td>
                <td className="border p-2">{h.date}</td>
                <td className="border p-2">
                  {h.score}/{h.total}
                </td>
                <td className="border p-2">{h.percentage}%</td>
                <td className="border p-2">
                  {h.passed ? "✅ Pass" : "❌ Fail"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
