import React from "react";
import { Calendar } from "lucide-react";
const PaymentSection = ({ cardName, setCardName, cardNumber, setCardNumber, expDate, setExpDate, cvv, setCvv, firstName, setFirstName, lastName, setLastName, country, setCountry, phone, setPhone, address, setAddress }) => (
    <div className="space-y-8">
      {/* Payment Section */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Payment</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-500 mb-2">Name on card</label>
            <input 
              type="text" 
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm text-gray-500 mb-2">Card Number</label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-80 relative right-1"></div>
                  </div>
                </div>
                <input 
                  type="text" 
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-500 mb-2">Exp Date</label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  value={expDate}
                  onChange={(e) => setExpDate(e.target.value)}
                  className="w-full p-3 pl-12 border border-gray-200 rounded-lg"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-500 mb-2">CVV Number</label>
              <input 
                type="password" 
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
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
            <label className="block text-sm text-gray-500 mb-2">First Name</label>
            <input 
              type="text" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg" 
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-500 mb-2">Last Name</label>
            <input 
              type="text" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-500 mb-2">Country</label>
            <input 
              type="text" 
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg" 
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-500 mb-2">Phone Number</label>
            <input 
              type="text" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg" 
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm text-gray-500 mb-2">Address</label>
          <input 
            type="text" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg" 
          />
        </div>
      </div>
    </div>
  );

  export default PaymentSection;