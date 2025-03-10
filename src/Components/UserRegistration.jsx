import React from "react";
import { useState } from "react";
import axios from "axios";
import { Calendar } from "lucide-react";

const tabs = [
  "Personal Information",
  "Password",
  "Setup Information",
  "Payment",
];

const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
  >
    {children}
  </button>
);

export default function TabbedForm() {
  const [activeTab, setActiveTab] = useState(0);
  const handleNext = () =>
    setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
  const handlePrev = () => setActiveTab((prev) => Math.max(prev - 1, 0));
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    dob: "",
    country: "",
    phone_no: "",
    address: "",
    password: "",
    store_name: "",
    store_description: "",
    store_email: "",
    weight_unit: "",
    dimension_unit: "",
    timezone: "",
    date_format: "",
    time_format: "",
    payment_details: {
      name_on_card: "",
      card_number: "",
      expiry_date: "",
      cvv: "",
    },
    profile_image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in user.payment_details) {
      setUser((prevUser) => ({
        ...prevUser,
        payment_details: { ...prevUser.payment_details, [name]: value },
      }));
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setUser({ ...user, profile_image: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(user).forEach((key) => {
      if (key === "payment_details") {
        Object.keys(user.payment_details).forEach((subKey) => {
          formData.append(
            `payment_details[${subKey}]`,
            user.payment_details[subKey]
          );
        });
      } else {
        formData.append(key, user[key]);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/user/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Response:", response.data);
      alert(response.data.msg);
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while registering.");
    }
  };

  const defaultImage =
    "https://www.pngall.com/wp-content/uploads/5/Profile.png";
  const [image, setImage] = useState(defaultImage);

  const handleDelete = () => {
    setImage(defaultImage);
    setUser({ ...user, profile_image: null });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex space-x-4 mb-4 border-b pb-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 border-b-2 ${
                index === activeTab
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-4 border rounded-lg shadow-sm">
          {activeTab === 0 && (
            <div>
              <h2 className="text-lg font-bold mb-2">Personal Information</h2>
              <h2 className="text-xl font-semibold mb-4">Payments Details</h2>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={image || defaultImage}
                  alt="Profile"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    className="hidden"
                    name="profile_image"
                    onChange={handleImageChange}
                  />
                  <button
                    className="bg-[#445FE8] text-white px-4 py-2 rounded-lg text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("fileInput").click();
                    }}
                  >
                    Upload new photo
                  </button>
                  <button
                    className="text-red-500 ml-4"
                    onClick={handleDelete}
                    disabled={!image}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    value={user.fname}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    value={user.lname}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Email ID</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={user.dob}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={user.country}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Phone No.</label>
                  <input
                    type="text"
                    name="phone_no"
                    value={user.phone_no}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-gray-600">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  ></input>
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Password</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div>
                    <label className="block text-gray-600">New password</label>
                    <input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg font-sans">
              <h1 className="text-2xl font-semibold mb-6">Store Information</h1>

              <div className="mb-6">
                <label className="block text-gray-500 mb-2">Store Name</label>
                <input
                  type="text"
                  name="store_name"
                  value={user.store_name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-500 mb-2">
                  Store Description
                </label>
                <textarea
                  type="text"
                  name="store_description"
                  value={user.store_description}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows="3"
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-gray-500 mb-2">Email</label>
                <input
                  type="email"
                  name="store_email"
                  value={user.store_email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <h1 className="text-2xl font-semibold mb-6">Measurement</h1>

              <div className="mb-6">
                <label className="block text-gray-500 mb-2">Weight Unit</label>
                <input
                  type="text"
                  name="weight_unit"
                  value={user.weight_unit}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-500 mb-2">
                  Dimension Unit
                </label>
                <input
                  type="text"
                  name="dimension_unit"
                  value={user.dimension_unit}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <h1 className="text-2xl font-semibold mb-6">Date & Time</h1>

              <div className="mb-6">
                <label className="block text-gray-500 mb-2">Timezone</label>
                <input
                  type="text"
                  name="timezone"
                  value={user.timezone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-500 mb-2">Date Format</label>
                <input
                  type="text"
                  name="date_format"
                  value={user.date_format}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-500 mb-2">Time Format</label>
                <input
                  type="text"
                  name="time_format"
                  value={user.time_format}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="space-y-8">
              {/* Payment Section */}
              <div>
                <h2 className="text-xl font-semibold mb-6">Payment</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      Name on card
                    </label>
                    <input
                      type="text"
                      name="name_on_card"
                      value={user.payment_details.name_on_card}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-200 rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <label className="block text-sm text-gray-500 mb-2">
                        Card Number
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3">
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-80 relative right-1"></div>
                          </div>
                        </div>
                        <input
                          type="text"
                          name="card_number"
                          value={user.payment_details.card_number}
                          onChange={handleChange}
                          className="w-full p-3 pl-12 border border-gray-200 rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-500 mb-2">
                        Exp Date
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="expiry_date"
                          value={user.payment_details.expiry_date}
                          onChange={handleChange}
                          className="w-full p-3 pl-12 border border-gray-200 rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-500 mb-2">
                        CVV Number
                      </label>
                      <input
                        type="password"
                        name="cvv"
                        value={user.payment_details.cvv}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-200" />

              {/* Billing Address */}
              <div>
                <h2 className="text-xl font-semibold mb-6">Billing Address</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-200 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-200 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-500 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-4">
          {activeTab > 0 && <Button onClick={handlePrev}>Previous</Button>}
          {activeTab < tabs.length - 1 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-green-500 px-4 py-2 text-white rounded"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
