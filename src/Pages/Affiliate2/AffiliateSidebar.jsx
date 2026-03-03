import React from "react";
import { useNavigate } from "react-router-dom";

function AffiliateSidebar() {
  let navigate = useNavigate();
  return (
    <>
      <aside className="w-64 bg-slate-800 text-gray-200 hidden md:flex flex-col">

        <ul className="flex-1 p-4 ml-2 space-y-4">
          {[
            "Dashboard",
            "My Profile",
            "Generate URL",
            "Withdrawal Request",
            "Download Report",
            "FAQ's",
          ].map((item, i) => (
            <li
              key={i}
              onClick={() =>
                navigate("/affiliate/" + item.toLowerCase().replace(/ /g, "-"))
              }
              className="cursor-pointer mb-6 hover:text-white"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="p-4 border-t border-slate-700 text-sm flex gap-4">
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
          />
          <div>
            <p className="font-semibold">test</p>
            <p className="text-green-400">● online</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AffiliateSidebar;