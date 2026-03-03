import React, { useState } from "react";
import AffiliateSidebar from "./AffiliateSidebar";

export default function AffiliateProfile() {
  const [personal, setPersonal] = useState({
    name: "test",
    email: "engg.ritik2020@gmail.com",
    phone: "9876543210",
    city: "",
    pincode: "",
    address: ""
  });

  const [bank, setBank] = useState({
    beneficiary: "abx",
    pan: "TASKK254L",
    bankName: "",
    accountNo: "987654321",
    ifsc: "BOBDEWWANG",
    branch: "Noida"
  });

  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  const handleSubmit = (e, type) => {
    e.preventDefault();
    alert({type}, information, saved);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AffiliateSidebar/>

     <div className="flex-1">
       {/* ================= PERSONAL INFO ================= */}
      <Section title="Personal Information">
        <form
          onSubmit={(e) => handleSubmit(e, "Personal")}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Input label="Full Name" value={personal.name} />
          <Input label="Email" value={personal.email} disabled />
          <Input label="Phone Number" value={personal.phone} />

          <Input label="City" />
          <Input label="Pincode" />
          <Input label="Address" className="md:col-span-3" />

          <Button />
        </form>
      </Section>

      {/* ================= BANK INFO ================= */}
      <Section title="Bank Information">
        <form
          onSubmit={(e) => handleSubmit(e, "Bank")}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Input label="Beneficiary Name" value={bank.beneficiary} />
          <Input label="PAN Card No" value={bank.pan} />
          <Input label="Bank Name" />

          <Input label="Account Number" value={bank.accountNo} />
          <Input label="IFSC Code" value={bank.ifsc} />
          <Input label="Branch Name" value={bank.branch} />

          <Button />
        </form>
      </Section>

      {/* ================= PASSWORD ================= */}
      <Section title="Change Password">
        <form
          onSubmit={(e) => handleSubmit(e, "Password")}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Input
            label="New Password"
            type="password"
            value={password.newPassword}
          />
          <Input
            label="Confirm Password"
            type="password"
            value={password.confirmPassword}
          />

          <Button />
        </form>
      </Section>

     </div>
    </div>
  );
}

/* ===== REUSABLE COMPONENTS ===== */

function Section({ title, children }) {
  return (
    <div className="bg-white shadow rounded">
      <div className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function Input({ label, value = "", type = "text", disabled = false, className = "" }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        disabled={disabled}
        className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
      />
    </div>
  );
}

function Button() {
  return (
    <div className="md:col-span-3">
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
      >
        Save Changes
      </button>
    </div>
  );
}