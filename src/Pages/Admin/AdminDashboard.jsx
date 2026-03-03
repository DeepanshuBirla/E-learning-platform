import Sidebar from "../../Components/sidebar";
import Card from "../../Components/Card";

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card title="Total Students" value="1200" />
          <Card title="Total Affiliates" value="150" />
          <Card title="Total Sales" value="₹ 3,20,000" />
          <Card title="Courses" value="12" />
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Enrollments</h2>

          <div className="bg-white shadow rounded p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Student</th>
                  <th className="p-2 text-left">Course</th>
                  <th className="p-2 text-left">Affiliate</th>
                  <th className="p-2 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-2">Rahul Kumar</td>
                  <td className="p-2">Spoken English</td>
                  <td className="p-2">Amit Singh</td>
                  <td className="p-2">12 Dec 2025</td>
                </tr>

                <tr>
                  <td className="p-2">Priya Jha</td>
                  <td className="p-2">Soft Skills</td>
                  <td className="p-2">Neha Verma</td>
                  <td className="p-2">10 Dec 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
