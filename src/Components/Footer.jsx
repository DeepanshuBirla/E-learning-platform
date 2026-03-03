import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-2">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Column 1 */}
    <div>
      <h2 className="text-xl font-bold text-white mb-3">eLearn</h2>
      <p className="text-sm">
        Grow your skills with online learning. Learn anytime, anywhere with our curated courses.
      </p>
    </div>

    {/* Column 2 */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">Courses</a></li>
        <li><a href="#" className="hover:text-white">About Us</a></li>
        <li><a href="#" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
      <ul className="space-y-2 text-sm">
        <li>Email: support@elearn.com</li>
        <li>Phone: +91 9000000000</li>
        <li>Address: Patna, Bihar, India</li>
      </ul>
    </div>

  </div>

  <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
    © {new Date().getFullYear()} eLearn. All rights reserved.
  </div>
</footer>

  )
}

export default Footer