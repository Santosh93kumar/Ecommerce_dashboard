import React from 'react'

export default function PasswordSection() {
  return (
    <>
    <h2 className="text-xl font-semibold mb-4">Password</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-2">
        <label className="block text-gray-600">Current password</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block text-gray-600">New password</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block text-gray-600">Confirm password</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  </>

  )
}
