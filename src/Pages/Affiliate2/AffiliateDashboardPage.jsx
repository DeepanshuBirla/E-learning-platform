import AffiliateSidebar from "./AffiliateSidebar";

export default function AffiliateDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ===== SIDEBAR ===== */}
      <AffiliateSidebar/>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1">

        {/* HEADER */}
        <header className="bg-white px-6 py-4 shadow flex justify-between">
          <h1 className="text-xl font-semibold">
            Affiliate Marketing - Dashboard
          </h1>
          {/* <span className="text-orange-500 font-semibold">
            Powered By : Sanjari Educom Pvt Ltd
          </span> */}
        </header>

        {/* CONTENT */}
        <div className="p-6 space-y-6">

          {/* ===== STATS CARDS ===== */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Browsed Links" value="0" color="bg-purple-500" />
            <StatCard title="Total Purchased" value="0" color="bg-yellow-400" />
            <StatCard title="Total Withdrawal" value="0" color="bg-orange-500" />
            <StatCard title="Earned Amount" value="Rs. 0" color="bg-green-500" />
          </div>

          {/* ===== ANALYTICS ===== */}
          <div className="grid lg:grid-cols-2 gap-6">

            {/* Weekly Analytics */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="font-semibold mb-2">
                Weekly Analytics Report
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Course Links Browsed & Purchased Graph
              </p>

              <div className="h-64 flex items-center justify-center text-gray-400 border">
                Graph Placeholder
              </div>
            </div>

            {/* Claim Report */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="font-semibold mb-2">
                Claim Report
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Data recorded for all transactions
              </p>

              <div className="flex gap-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>● Total Purchased</li>
                  <li>● Ready to Claim</li>
                  <li>● Claim Pending</li>
                  <li>● Claim Approved</li>
                </ul>

                <div className="flex-1 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400">
                    Donut Chart
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className="bg-white p-4 rounded shadow flex items-center gap-4">
      <div className={w-12 h-12 rounded-full ${color}} />
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}


// import AffiliateSidebar from "./AffiliateSidebar";
// import affiliateData from "../Data/affiliateData.json";

// export default function AffiliateDashboard() {
//   const { affiliate, dashboardStats } = affiliateData;

//   return (
//     <div className="flex min-h-screen bg-gray-100">

//       {/* SIDEBAR */}
//       <AffiliateSidebar />

//       {/* MAIN */}
//       <main className="flex-1">

//         {/* HEADER */}
//         <header className="bg-white px-6 py-4 shadow flex justify-between items-center">
//           <div>
//             <h1 className="text-xl font-semibold">
//               Affiliate Marketing - Dashboard
//             </h1>
//             <p className="text-sm text-gray-500">
//               Welcome, {affiliate.name} ({affiliate.id})
//             </p>
//           </div>

//           <span className="text-green-600 font-semibold capitalize">
//             {affiliate.status}
//           </span>
//         </header>

//         {/* CONTENT */}
//         <div className="p-6 space-y-6">

//           {/* STATS */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <StatCard
//               title="Total Purchased"
//               value={dashboardStats.totalPurchased}
//               color="bg-purple-500"
//             />
//             <StatCard
//               title="Ready to Claim"
//               value={dashboardStats.readyToClaim}
//               color="bg-yellow-400"
//             />
//             <StatCard
//               title="Claim Pending"
//               value={dashboardStats.claimPending}
//               color="bg-orange-500"
//             />
//             <StatCard
//               title="Claim Approved"
//               value={dashboardStats.claimApproved}
//               color="bg-green-500"
//             />
//           </div>

//           {/* ANALYTICS */}
//           <div className="grid lg:grid-cols-2 gap-6">

//             {/* Weekly Analytics */}
//             <div className="bg-white p-6 rounded shadow">
//               <h2 className="font-semibold mb-2">
//                 Weekly Analytics Report
//               </h2>
//               <p className="text-sm text-gray-500 mb-4">
//                 Course Links Browsed & Purchased
//               </p>

//               <div className="h-64 flex items-center justify-center border text-gray-400">
//                 Graph Placeholder
//               </div>
//             </div>

//             {/* Claim Report */}
//             <div className="bg-white p-6 rounded shadow">
//               <h2 className="font-semibold mb-2">
//                 Claim Report
//               </h2>

//               <ul className="text-sm text-gray-600 space-y-2">
//                 <li>● Total Purchased: {dashboardStats.totalPurchased}</li>
//                 <li>● Ready to Claim: {dashboardStats.readyToClaim}</li>
//                 <li>● Claim Pending: {dashboardStats.claimPending}</li>
//                 <li>● Claim Approved: {dashboardStats.claimApproved}</li>
//               </ul>
//             </div>

//           </div>

//         </div>
//       </main>
//     </div>
//   );
// }

// function StatCard({ title, value, color }) {
//   return (
//     <div className="bg-white p-4 rounded shadow flex items-center gap-4">
//       <div className={w-12 h-12 rounded-full ${color}} />
//       <div>
//         <p className="text-sm text-gray-500">{title}</p>
//         <p className="text-xl font-bold">{value}</p>
//       </div>
//     </div>
//   );
// }