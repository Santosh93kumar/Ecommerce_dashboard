import React, { useState } from 'react';

const StoreSetup = () => {
  const [formData, setState] = useState({
    storeName: 'E-Commerce Shop',
    storeDescription: 'Lorem ipsum dolor sit amet consectetur. Non commodo sodales nisl congue risus. Et iaculis viverra blandit lorem.',
    email: 'ECommerceShop@gmail.com',
    weightUnit: 'kg',
    dimensionUnit: 'm',
    timezone: 'Asia',
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:MM:SS',
    enableReviews: true,
    enableStarRating: true,
    requireStarRating: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg font-sans">
      <form onSubmit={handleSubmit}>
        {/* Store Information Section */}
        <h1 className="text-2xl font-semibold mb-6">Store Information</h1>
        
        <div className="mb-8 bg-white">
          <div className="mb-6">
            <label className="block text-gray-500 mb-2">Store Name</label>
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-500 mb-2">Store Description</label>
            <textarea
              name="storeDescription"
              value={formData.storeDescription}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="3"
            />
          </div>
          
          <div className="mb-2">
            <label className="block text-gray-500 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          
          <p className="text-blue-500 text-sm">The contact email address of the store administrator.</p>
        </div>
        
        <div className="border-t border-gray-200 my-6"></div>
        
        {/* Measurement Section */}
        <h1 className="text-2xl font-semibold mb-6">Measurement</h1>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-2">
            <div className="flex-1 w-full">
              <label className="block text-gray-500 mb-2">Weight Unit</label>
              <div className="relative w-full">
                <select
                  name="weightUnit"
                  value={formData.weightUnit}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10"
                >
                  <option value="kg">kg</option>
                  <option value="lb">lb</option>
                  <option value="g">g</option>
                  <option value="oz">oz</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <label className="block text-gray-500 mb-2">Dimension Unit</label>
              <div className="relative w-full">
                <select
                  name="dimensionUnit"
                  value={formData.dimensionUnit}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10"
                >
                  <option value="m">m</option>
                  <option value="cm">cm</option>
                  <option value="in">in</option>
                  <option value="ft">ft</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-blue-500 text-sm">The units of measurement that will be used to determine the weight, height, width and length of goods.</p>
        </div>
        
        <div className="border-t border-gray-200 my-6"></div>
        
        {/* Date & Time Section */}
        <h1 className="text-2xl font-semibold mb-6">Date & Time</h1>
        
        <div className="mb-8">
          <div className="mb-6">
            <label className="block text-gray-500 mb-2">Timezone</label>
            <div className="relative w-full">
              <select
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10"
              >
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="America">America</option>
                <option value="Africa">Africa</option>
                <option value="Australia">Australia</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-500 mb-2">Date Format</label>
            <div className="relative w-full">
              <select
                name="dateFormat"
                value={formData.dateFormat}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10"
              >
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="DD.MM.YYYY">DD.MM.YYYY</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="mb-2">
            <label className="block text-gray-500 mb-2">Time Format</label>
            <div className="relative w-full">
              <select
                name="timeFormat"
                value={formData.timeFormat}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10"
              >
                <option value="HH:MM:SS">HH:MM:SS</option>
                <option value="HH:MM">HH:MM</option>
                <option value="hh:mm:ss a">hh:mm:ss a</option>
                <option value="hh:mm a">hh:mm a</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <p className="text-blue-500 text-sm">Timezone, date and time format settings used in the admin panel and storefront.</p>
        </div>
        
        <div className="border-t border-gray-200 my-6"></div>
        
        {/* Reviews & Comments Section */}
        <h1 className="text-2xl font-semibold mb-6">Reviews & Comments</h1>
        
        <div className="mb-8">
          <div className="mb-6">
            <p className="font-medium mb-3">Enable Reviews</p>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    name="enableReviews"
                    checked={formData.enableReviews === true}
                    onChange={() => setState({...formData, enableReviews: true})}
                    className="opacity-0 absolute w-5 h-5 cursor-pointer"
                  />
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.enableReviews ? 'border-blue-500' : 'border-gray-400'}`}>
                    {formData.enableReviews && (
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                </div>
                <span className="ml-2">Yes</span>
              </label>
              
              <label className="flex items-center">
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    name="enableReviews"
                    checked={formData.enableReviews === false}
                    onChange={() => setState({...formData, enableReviews: false})}
                    className="opacity-0 absolute w-5 h-5 cursor-pointer"
                  />
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${!formData.enableReviews ? 'border-blue-500' : 'border-gray-400'}`}>
                    {!formData.enableReviews && (
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                </div>
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          
          {formData.enableReviews && (
            <div>
              <p className="font-medium mb-3">Product Ratings</p>
              <label className="flex items-center mb-3">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    name="enableStarRating"
                    checked={formData.enableStarRating}
                    onChange={handleChange}
                    className="opacity-0 absolute w-5 h-5 cursor-pointer"
                  />
                  <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.enableStarRating ? 'bg-blue-500 border-blue-500' : 'border-gray-400'}`}>
                    {formData.enableStarRating && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="ml-2">Enable star rating on reviews</span>
              </label>
              
              {formData.enableStarRating && (
                <label className="flex items-center ml-8">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      name="requireStarRating"
                      checked={formData.requireStarRating}
                      onChange={handleChange}
                      className="opacity-0 absolute w-5 h-5 cursor-pointer"
                    />
                    <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.requireStarRating ? 'bg-blue-500 border-blue-500' : 'border-gray-400'}`}>
                      {formData.requireStarRating && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="ml-2">Star ratings should be required, not optional</span>
                </label>
              )}
            </div>
          )}
        </div>
        
        
      </form>
    </div>
  );
};

export default StoreSetup;