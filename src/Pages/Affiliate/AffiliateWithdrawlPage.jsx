import React, { useState } from "react";
import AffiliateSidebar from "./AffiliateSidebar";

export default function WithdrawalRequest() {
  const [form, setForm] = useState({
    qty: 0,
    amount: 0,
    message: ""
  });

  const stats = [
    { title: "Total Purchased", value: 0, color: "bg-purple-500" },
    { title: "Ready to Claim", value: 0, color: "bg-green-500" },
    { title: "Claim Pending", value: 0, color: "bg-yellow-500" },
    { title: "Claim Approved", value: 0, color: "bg-orange-500" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Withdrawal request submitted");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AffiliateSidebar/>

     <div className="flex-1">
       {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-white shadow rounded p-5 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold`}>
              ₹
            </div>
            <div>
              <h3 className="text-xl font-semibold">{item.value}</h3>
              <p className="text-gray-600 text-sm">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= WITHDRAW FORM ================= */}
      <div className="bg-white shadow rounded">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">Request Withdrawal</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input label="Claim Quantity" value={form.qty} disabled />
          <Input label="Calculated Amount (₹)" value={form.amount} disabled />
          <Input
            label="Message for Admin"
            placeholder="Enter your message"
            className="md:col-span-2"
          />

          <div className="md:col-span-4">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded font-semibold"
            >
              Submit Request
            </button>
          </div>
        </form>

        {/* Instructions */}
        <div className="px-6 pb-6">
          <h3 className="font-semibold mb-2">Instructions</h3>
          <ul className="list-disc pl-6 text-sm text-orange-600 space-y-1">
            <li>Minimum withdrawal request must be of 2 claims.</li>
            <li>Commission is calculated after excluding applicable GST.</li>
            <li>Final payable amount is approved by admin.</li>
            <li>Avoid multiple withdrawal requests.</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Support</h3>
          <ul className="list-disc pl-6 text-sm text-blue-600 space-y-1">
            <li>Download audit logs from reports section.</li>
            <li>Check FAQs for common questions.</li>
            <li>Email: info@easywaylearn.in</li>
          </ul>
        </div>
      </div>

      {/* ================= HISTORY ================= */}
      <div className="bg-white shadow rounded">
        <div className="border-b px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Withdrawal Requests</h2>
            <p className="text-sm text-gray-500">
              Y = Paid | H = Hold | P = Pending
            </p>
          </div>

          <button className="bg-gray-900 text-white px-4 py-2 rounded text-sm">
            Download Excel
          </button>
        </div>

        <div className="p-6 text-center text-gray-500">
          No withdrawal records found
        </div>
      </div>
     </div>

    </div>
  );
}

/* ===== REUSABLE INPUT ===== */

function Input({ label, value = "", disabled = false, placeholder = "", className = "" }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
      />
    </div>
  );
}