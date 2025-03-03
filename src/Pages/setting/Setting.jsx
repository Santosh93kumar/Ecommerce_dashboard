import React, { useState } from 'react';
import { CreditCard, Store, Lock, User, ChevronRight } from 'lucide-react';
import StoreSetUp from '../../Components/SettingComponent/StoreSetup';
import PersonalInformation from '../../Components/SettingComponent/PersonalInformation';
import PasswordSection from '../../Components/SettingComponent/PasswordSection';
import PaymentSection from '../../Components/SettingComponent/PaymentSection';

const Setting = () => {
  // State for payment form values
  const [cardName, setCardName] = useState('E-Commerce Shop');
  const [cardNumber, setCardNumber] = useState('9876 1716 8652');
  const [expDate, setExpDate] = useState('06/27');
  const [cvv, setCvv] = useState('****');
  const [firstName, setFirstName] = useState('Shubham');
  const [lastName, setLastName] = useState('Sharma');
  const [country, setCountry] = useState('India');
  const [phone, setPhone] = useState('+91 7017148769');
  const [address, setAddress] = useState('Jl Raya Kaligawe Km 5, Jawa Tengah, Jawa Tengah, Semarang');
  
  
  const [activeNav, setActiveNav] = useState('store'); // Default to store information

 
  const renderContent = () => {
    switch (activeNav) {
      case 'personal':
        return <PersonalInformation />;
      case 'password':
        return <PasswordSection />;
      case 'store':
        return <StoreSetUp />;
      case 'payment':
        return <PaymentSection
          cardName={cardName} setCardName={setCardName}
          cardNumber={cardNumber} setCardNumber={setCardNumber}
          expDate={expDate} setExpDate={setExpDate}
          cvv={cvv} setCvv={setCvv}
          firstName={firstName} setFirstName={setFirstName}
          lastName={lastName} setLastName={setLastName}
          country={country} setCountry={setCountry}
          phone={phone} setPhone={setPhone}
          address={address} setAddress={setAddress}
        />;
      default:
        return <PersonalInformation />;
    }
  };

  return (
   <>
   
      <div className="bg-gray-50 h-full  shadow-sm p-6 w-full mx-auto">
        <h1 className="text-2xl font-semibold mb-8">Setting</h1>
        
        <div className="grid grid-cols-1 bg-gray-50 md:grid-cols-3 gap-8">
          {/* Left Navigation*/}
          <div className="col-span-1">
            <nav className="flex flex-col space-y-2 bg-white rounded-lg shadow-sm p-4 h-auto">
              <button 
                onClick={() => setActiveNav('personal')}
                className={`flex items-center justify-between p-3 rounded-lg ${activeNav === 'personal' ? 'bg-[#445FE8] text-white' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                <div className="flex items-center">
                  <User className="mr-3 h-5 w-5" />
                  <span>Personal Information</span>
                </div>
                <ChevronRight className="h-5 w-5" />
              </button>
              
              <button 
                onClick={() => setActiveNav('password')}
                className={`flex items-center justify-between p-3 rounded-lg ${activeNav === 'password' ? 'bg-[#445FE8] text-white' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                <div className="flex items-center">
                  <Lock className="mr-3 h-5 w-5" />
                  <span>Password</span>
                </div>
                <ChevronRight className="h-5 w-5" />
              </button>
              
              <button 
                onClick={() => setActiveNav('store')}
                className={`flex items-center justify-between p-3 rounded-lg ${activeNav === 'store' ? 'bg-[#445FE8] text-white' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                <div className="flex items-center">
                  <Store className="mr-3 h-5 w-5" />
                  <span>Store Information</span>
                </div>
                <ChevronRight className="h-5 w-5" />
              </button>
              
              <button 
                onClick={() => setActiveNav('payment')}
                className={`flex items-center justify-between p-3 rounded-lg ${activeNav === 'payment' ? 'bg-[#445FE8] text-white' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                <div className="flex items-center">
                  <CreditCard className="mr-3 h-5 w-5" />
                  <span>Payment</span>
                </div>
                <ChevronRight className="h-5 w-5" />
              </button>
            </nav>
          </div>
          
          {/* Right Content Area */}
          <div className="col-span-1 md:col-span-2">
            <div className="space-y-8 bg-white p-6 rounded-lg">
              {renderContent()}
          
              <div className="flex justify-end space-x-4">
                <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Discard
                </button>
                <button className="px-6 py-2 bg-[#445FE8] text-white rounded-lg hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Setting;
