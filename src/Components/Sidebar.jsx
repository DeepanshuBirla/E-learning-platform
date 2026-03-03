// export default function Sidebar() {
//   return (
//     <div className="w-64 bg-gray-900 text-white p-5 min-h-screen hidden md:block">
//       {/* <h2 className="text-2xl font-bold mb-10">eLearn</h2> */}

//       <ul className="space-y-4 text-gray-300">
//         <li className="hover:text-white cursor-pointer">Dashboard</li>
//         <li className="hover:text-white cursor-pointer">My Courses</li>
//         <li className="hover:text-white cursor-pointer">Tests</li>
//         <li className="hover:text-white cursor-pointer">Certificates</li>
//         <li className="hover:text-white cursor-pointer">Profile</li>
//       </ul>
//     </div>
//   );
// }
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-black text-white px-3 py-1 rounded"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <aside
        className={`fixed md:static z-40 bg-gray-900 text-white h-screen w-64 p-4
        ${open ? "left-0" : "-left-64"} md:left-0 transition-all`}
      >
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

        <nav className="space-y-2">
          <NavLink to="/admin" className="block p-2 rounded hover:bg-gray-700">
            Dashboard
          </NavLink>
          <NavLink to="/admin/students" className="block p-2 rounded hover:bg-gray-700">
            Students
          </NavLink>
          <NavLink to="/admin/affiliates" className="block p-2 rounded hover:bg-gray-700">
            Affiliates
          </NavLink>
          <NavLink to="/admin/courses" className="block p-2 rounded hover:bg-gray-700">
            Courses
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
