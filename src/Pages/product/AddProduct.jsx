import React, { useState } from 'react';
import { Calendar, Plus } from 'lucide-react';

const AddProduct = () => {
  // State for form inputs
  const [productName, setProductName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [discountEnabled, setDiscountEnabled] = useState(false);
  const [category, setCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState(['Jacket', 'Caps', 'Socks', 'Hoodies']);
  const [visibility, setVisibility] = useState('published');
  const [scheduleDate, setScheduleDate] = useState('');
  const [visibilityDate, setVisibilityDate] = useState('');

  // Function to handle tag removal
  const removeTag = (tagToRemove) => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      productName,
      shortDescription,
      longDescription,
      stock,
      price,
      discount: discountEnabled ? discount : null,
      category,
      selectedTags,
      visibility,
      scheduleDate,
      visibilityDate
    });
  };

  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Add product</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Basic Information Section */}
          <div className="md:col-span-3 space-y-6 bg-white p-6 rounded-lg">
            <h2 className="text-lg font-medium">Basic Information</h2>
            
            <div>
              <input
                type="text"
                placeholder="Product Name"
                className="w-full p-3 border border-gray-200 rounded-lg"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            
            <div>
              <textarea
                placeholder="Short Description"
                className="w-full p-3 border border-gray-200 rounded-lg resize-none h-20"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
              />
            </div>
            
            <div>
              <textarea
                placeholder="Long Description"
                className="w-full p-3 border border-gray-200 rounded-lg resize-none h-32"
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
              />
            </div>
          </div>
          
          {/* Product Image Section */}
          <div className="md:col-span-2 space-y-6 bg-white p-6 rounded-lg">
            <h2 className="text-lg font-medium">Product Image</h2>
            
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center h-64">
              <div className="text-gray-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">Upload your product image.</p>
              <p className="text-gray-400 text-sm">Only PNG, JPG format allowed.</p>
              <p className="text-gray-400 text-sm">300×300 pixels are recommended.</p>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-center bg-gray-50">
                <Plus className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stock and Pricing Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white md:col-span-3 p-6 rounded-lg space-y-6">
          <h2 className="text-lg font-medium">Stock and pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Stock"
                className="w-full p-3 border border-gray-200 rounded-lg"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Price"
                className="w-full p-3 border border-gray-200 rounded-lg"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="scheduleDiscount"
              checked={discountEnabled}
              onChange={() => setDiscountEnabled(!discountEnabled)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="scheduleDiscount" className="ml-2 text-sm">Schedule a discount</label>
          </div>
          
          {discountEnabled && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Discount"
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  placeholder="Select date"
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
         {/* Visibility Section */}
         <div className="bg-white md:col-span-2 p-6 rounded-lg space-y-6">
            <h2 className="text-lg font-medium">Visibility</h2>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="published"
                  name="visibility"
                  value="published"
                  checked={visibility === 'published'}
                  onChange={() => setVisibility('published')}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="published" className="ml-2">Published</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id="scheduled"
                  name="visibility"
                  value="scheduled"
                  checked={visibility === 'scheduled'}
                  onChange={() => setVisibility('scheduled')}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="scheduled" className="ml-2">Scheduled</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id="hidden"
                  name="visibility"
                  value="hidden"
                  checked={visibility === 'hidden'}
                  onChange={() => setVisibility('hidden')}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="hidden" className="ml-2">Hidden</label>
              </div>
            </div>
            
            {visibility === 'scheduled' && (
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  placeholder="Select date"
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg"
                  value={visibilityDate}
                  onChange={(e) => setVisibilityDate(e.target.value)}
                />
              </div>
            )}
          </div>

        </div>
        
        {/* Grid for Category and Visibility */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Category Section */}
          <div className="bg-white p-6 md:col-span-3  rounded-lg space-y-6">
            <h2 className="text-lg font-medium">Category</h2>
            
            <div>
              <input
                type="text"
                placeholder="Search or create category"
                className="w-full p-3 border border-gray-200 rounded-lg"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <div key={tag} className="bg-[#EAEDFF] rounded-full py-1 px-3 flex items-center text-sm">
                  <button 
                    type="button" 
                    className="mr-1 text-gray-500"
                    onClick={() => removeTag(tag)}
                  >
                    ×
                  </button>
                  {tag}
                </div>
              ))}
            </div>
          </div>
          
          {/* Visibility Section */}
          {/* <div className="bg-white p-6 rounded-lg space-y-6">
            <h2 className="text-lg font-medium">Visibility</h2>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="published"
                  name="visibility"
                  value="published"
                  checked={visibility === 'published'}
                  onChange={() => setVisibility('published')}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="published" className="ml-2">Published</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id="scheduled"
                  name="visibility"
                  value="scheduled"
                  checked={visibility === 'scheduled'}
                  onChange={() => setVisibility('scheduled')}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="scheduled" className="ml-2">Scheduled</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id="hidden"
                  name="visibility"
                  value="hidden"
                  checked={visibility === 'hidden'}
                  onChange={() => setVisibility('hidden')}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="hidden" className="ml-2">Hidden</label>
              </div>
            </div>
            
            {visibility === 'scheduled' && (
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  placeholder="Select date"
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg"
                  value={visibilityDate}
                  onChange={(e) => setVisibilityDate(e.target.value)}
                />
              </div>
            )}
          </div> */}
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 font-bold rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;