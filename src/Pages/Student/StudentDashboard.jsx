import Sidebar from "../../Components/sidebar";
import Card from "../../Components/Card";

export default function StudentDashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        {/* <Navbar /> */}

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Courses Enrolled" value="3" />
          <Card title="Lessons Completed" value="42" />
          <Card title="Certificates Earned" value="1" />
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
          <div className="bg-white shadow p-5 rounded">
            <p className="mb-2">Spoken English — 70% Completed</p>
            <div className="w-full h-3 bg-gray-200 rounded">
              <div className="w-[70%] bg-blue-600 h-3 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
