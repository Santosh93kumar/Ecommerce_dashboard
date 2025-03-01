import React from 'react'

function Orderdetail() {
  return (
   <>
     <div className='flex flex-col mx-2 rounded-lg '>
        <h3 className='font-semibold text-lg pl-3'>Order deail(#1111)</h3>
        <div className='container w-full h-screen pl-2'>
                <div className='w-full flex flex-row pt-2'>
                    <div className="w-9/12 bg-white">
                        <h3 className='text-lg'>Order Information</h3>
                        <div className='flex w-full text-base'>
                            <div className='w-4/12'>
                                <p className='text-xs text-center'>Date</p>
                                <p className='text-base text-center'>feb 19, 2023</p>
                            </div>
                            <div className='w-2/12'>
                                <p className='text-base text-center'>Item</p>
                                <p className='text-base text-center'>02</p>
                            </div>
                            <div className='w-2/12'>
                                <p className='text-xs text-center'>Paid</p>
                                <p className="px-1.5 py-1 text-green-500 bg-green-200 rounded-xl inline text">Yes</p>
                            </div>
                            <div className='w-2/12 bg-red-100 flex justify-center'>
                                <p className='text-xs text-center'>Status</p>
                                <p className="px-1.5 py-1 text-green-500 bg-green-200 rounded-xl inline m-auto text-center">Processed</p>
                            </div>
                            <div className='w-2/12'>
                                <p className='text-xs text-center'>Total</p>
                                <p className='text-base text-center'>$2023</p>
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
