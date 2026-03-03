import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ===== HERO SECTION ===== */}
      <section className="bg-blue-950 text-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-lg opacity-90">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>
      </section>

      {/* ===== CONTACT CONTENT ===== */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white shadow rounded p-8">
            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white shadow rounded p-8">
            <h2 className="text-2xl font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Email:</strong> support@elearn.com
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Address:</strong> Noida, Uttar Pradesh, India
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Office Hours</h3>
              <p className="text-gray-600">
                Monday – Saturday: 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
