import React from 'react'
import ProfileIcon from '../../assets/picture.png'

export default function PersonalInformation() {
  return (
    <>
    <h2 className="text-xl font-semibold mb-4">Payments Details</h2>
    <div className="flex items-center gap-4 mb-4">
      <img
        src={ProfileIcon}
        alt="Profile"
        className="w-20 h-20 rounded-lg"
      />
      <div>
        <button className="bg-[#445FE8] text-white px-4 py-2 rounded-lg text-sm">
          Upload new photo
        </button>
        <button className="text-red-500 ml-4">Delete</button>
      </div>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-600">First Name</label>
        <input
          type="text"
          value="Shubham"
          className="w-full p-2 border border-gray-300 rounded-lg"
          readOnly
        />
      </div>
      <div>
        <label className="block text-gray-600">Last Name</label>
        <input
          type="text"
          value="Sharma"
          className="w-full p-2 border border-gray-300 rounded-lg"
          readOnly
        />
      </div>
      <div>
        <label className="block text-gray-600">Email ID</label>
        <input
          type="text"
          value="uxdesigner.shubham@gmail.com"
          className="w-full p-2 border border-gray-300 rounded-lg"
          readOnly
        />
      </div>
      <div>
        <label className="block text-gray-600">Date of Birth</label>
        <input
          type="date"
          value="2025-10-02"
          className="w-full p-2 border border-gray-300 rounded-lg"
          readOnly
        />
      </div>
      <div>
        <label className="block text-gray-600">Country</label>
        <input
          type="text"
          value="India"
          className="w-full p-2 border border-gray-300 rounded-lg"
          readOnly
        />
      </div>
      <div>
        <label className="block text-gray-600">Phone No.</label>
        <input
          type="text"
          value="+91 7071748769"
          className="w-full p-2 border border-gray-300 rounded-lg"
          readOnly
        />
      </div>
                      <div className="col-span-1 md:col-span-2">
                      <label className="block text-gray-600">Address</label>
                      <textarea value ="Jl Raya Kaligawe Km 5, Jawa Tengah, Jawa Tengah, Semarang"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        rows="2"
                        readOnly
                      ></textarea>
                    </div>
                  </div>
                </>
  )
}
