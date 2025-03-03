import React from 'react'

function Orderdetail() {
  return (
   <>
     <div className='flex flex-col mx-2 rounded-lg '>
        <h3 className='font-semibold text-lg pl-3'>Order deail(#1111)</h3>
        <div className='container w-full h-screen pl-2'>
                <div className='w-full flex flex-row pt-2 gap-1'>
                    <div className="w-9/12 bg-white ">
                        <h3 className='text-base md:text-lg'>Order Information</h3>
                        <div className='flex mt-1.5 w-full text-base'>
                            <div className='w-4/12'>
                                <p className='text-xs text-center'>Date</p>
                                <p className='text-sm md:text-base text-center my-1.5 '>feb 19, 2023</p>
                            </div>
                            <div className='w-2/12'>
                                <p className=' text-xs text-center '>Item</p>
                                <p className='text-sm md:text-base text-center my-1.5'>02</p>
                            </div>
                            <div className='w-2/12'>
                                <p className='text-sm md:text-base text-center '>Paid</p>
                                <p className="px-1.5 py-1 text-green-500 bg-green-200 rounded-xl  flex justify-center text-sm md:text-base mx-4 my-1.5">Yes</p>
                            </div>
                            <div className='w-2/12'>
                                <p className='text-xs text-center '>Status</p>
                                <p className="px-1.5 py-1 text-green-500 bg-green-200 rounded-xl  flex justify-center text-sm md:text-base mx-1 my-1.5">Processed</p>
                            </div>
                           
                            <div className='w-2/12'>
                                <p className='text-xs text-center'>Total</p>
                                <p className='text-sm md:text-base text-center my-1.5'>$2023</p>
                            </div>
                        </div>
                        <div className='flex w-full'>

                        </div>

                    </div>
                    <div className='w-4/12 bg-white'>
                    <h3 className='font-semibold text-base pl-2'>Customer</h3>
                        <div className='flex flex-row pl-2 space-x-2'>
                            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" className='h-16 w-14'  alt="" />
                            <div className='flex flex-col'>
                                <p className='text-base' >Kate Lau</p>
                                <p className='text-xs'>san@gmail.com</p>

                            </div>
                        </div>
                    </div>
                </div>
              
        </div>
     </div>
   </>
  )
}

export default Orderdetail
