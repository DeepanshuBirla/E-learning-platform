import React from "react";
import AffiliateSidebar from "./AffiliateSidebar";

export default function DownloadReport() {
  // Future me API se data aayega
  const reports = []; // empty for now

  const handleDownload = () => {
    alert("Excel report will be downloaded (API pending)");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AffiliateSidebar/>
      <div className="flex-1">
        {/* ================= HEADER ================= */}
      <div className="bg-white shadow rounded">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">Tracking Report</h2>
          <p className="text-sm text-gray-500">
            Status : Y = Payment Done | H = Payment on Hold | P = Payment Pending
          </p>
        </div>

        {/* ================= ACTION BAR ================= */}
        <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button
            onClick={handleDownload}
            className="bg-gray-900 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-black"
          >
            Download Report in Excel
          </button>
        </div>

        {/* ================= TABLE ================= */}
        <div className="overflow-x-auto px-6 pb-6">
          {reports.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              No report data available
            </div>
          ) : (
            <table className="min-w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Course</th>
                  <th className="border px-4 py-2">Student</th>
                  <th className="border px-4 py-2">Amount (₹)</th>
                  <th className="border px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border px-4 py-2">{item.date}</td>
                    <td className="border px-4 py-2">{item.course}</td>
                    <td className="border px-4 py-2">{item.student}</td>
                    <td className="border px-4 py-2">₹{item.amount}</td>
                    <td className="border px-4 py-2 font-semibold">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      </div>

    </div>
  );
}