import React from 'react'

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 px-10 md:px-32 py-14 bg-gray-100">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How We Work</p>
        <p>Newsroom</p>
        <p>Investors</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Diversity & Belonging</p>
        <p>Against Discrimination</p>
        <p>Accessibility</p>
        <p>Frontline Stays</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p>Host your stay</p>
        <p>Host an Experience</p>
        <p>Responsible hosting</p>
        <p>Resource Center</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Our COVID-19 Response</p>
        <p>Help Center</p>
        <p>Cancellation options</p>
        <p>Neighborhood Support</p>
        <p>Trust & Safety</p>
      </div>
    </footer>
  )
}
