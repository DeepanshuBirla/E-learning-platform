import { useState } from "react";

export default function AffiliateDashboard() {
  const [referralLink] = useState(
    "https://yourwebsite.com/?ref=AFF12345"
  );

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6 mb-8 shadow-lg">
          <h1 className="text-2xl font-bold">Affiliate Dashboard</h1>
          <p className="text-sm opacity-90 mt-1">
            Track your earnings and referrals
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">

          <StatCard title="Total Earnings" value="₹25,400" />
          <StatCard title="Total Clicks" value="1,240" />
          <StatCard title="Total Sales" value="86" />
          <StatCard title="Commission" value="30%" />

        </div>

        {/* Referral Link */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Your Referral Link
          </h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={referralLink}
              readOnly
              className="flex-1 border rounded-lg px-4 py-2 bg-gray-50"
            />

            <button
              onClick={copyLink}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Recent Referrals
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Commission</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b">
                  <td className="py-2">Rahul Sharma</td>
                  <td>rahul@gmail.com</td>
                  <td className="text-green-600 font-semibold">Paid</td>
                  <td>₹750</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Anjali Verma</td>
                  <td>anjali@gmail.com</td>
                  <td className="text-yellow-600 font-semibold">Pending</td>
                  <td>₹750</td>
                </tr>
                <tr>
                  <td className="py-2">Amit Singh</td>
                  <td>amit@gmail.com</td>
                  <td className="text-green-600 font-semibold">Paid</td>
                  <td>₹750</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Withdraw */}
        <div className="mt-10 text-center">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-3 rounded-full font-semibold hover:opacity-90 shadow-lg">
            Withdraw Earnings
          </button>
        </div>

      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-bold text-slate-800 mt-2">{value}</h3>
    </div>
  );
}
