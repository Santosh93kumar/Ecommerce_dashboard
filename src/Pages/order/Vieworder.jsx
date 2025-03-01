import React from 'react'

function Vieworder() {
    const detail=[
       { 
        order_id:"#1111",
        date:"12/1/12",
        cust_name:"demo",
        item:100,
        paid:"yes",
        status:"proceed",
        spent:"$122.23"
        },
        { 
            order_id:"#1112",
            date:"12/1/12",
            cust_name:"demo",
            item:100,
            paid:"yes",
            status:"proceed",
            spent:"$122.23"
            }
    ]
  return (
    <>
        <div className='flex flex-col mx-2 rounded-lg '>
            <h3 className='font-semibold text-lg pl-3'>Order</h3>
            <div className='container w-full h-screen bg-white p-2'>
                <div className='w-full flex flex-row pt-2'>
                    <div className='w-2/12'> 
                        <p className='text-xs font-semibold text-center'>ORDER ID</p>
                    </div>
                    <div className='w-2/12'> 
                        <p className='text-xs font-semibold text-center'>DATE</p>
                    </div>
                    <div className='w-2/12'> 
                        <p className='text-xs font-semibold text-center'>CUSTOMER NAME</p>
                    </div>
                    <div className='w-1/12'> 
                        <p className='text-center text-xs font-semibold'>ITEMS</p>
                    </div>
                    <div className='w-1/12'> 
                        <p className='text-center text-xs font-semibold'>PAID</p>
                    </div>
                    <div className='w-2/12'> 
                        <p className='text-center text-xs font-semibold'>STATUS</p>
                    </div>
                    <div className='w-2/12'> 
                        <p className='text-center text-xs font-semibold'>SPENT</p>
                    </div>
                </div>
                <hr />
                {
                    detail.map((item)=>(
                    <div className='w-full flex flex-row pt-2 text-base'>
                    <div className='w-2/12'> 
                        <p className='text-base font-semibold text-center text-blue-400'>{item.order_id}
                        </p>
                    </div>
                    <div className='w-2/12'> 
                        <p className='text-base font-semibold text-center'>{item.date}</p>
                    </div>
                    <div className='w-2/12'> 
                        <p className='text-base font-semibold text-center'>{item.cust_name}</p>
                    </div>
                    <div className='w-1/12'> 
                        <p className='text-center text-base font-semibold'>{item.item}</p>
                    </div>
                    <div className='w-1/12'> 
                        <p className='text-center text-base font-semibold px-2 py-1 text-green-500 bg-green-200 rounded-xl'>{item.paid}</p>
                    </div>
                    <div className='w-2/12'> 
                        <p className='text-center text-base font-semibold  px-2 py-1 text-green-500 bg-green-200 rounded-xl'>{item.status}</p>
                    </div>
                    <div className='w-2/12'> 
                        <p className='text-center text-base font-semibold'>{item.spent}</p>
                    </div>
                </div>
                    ))
                }

            </div>
        </div>
    
    </>
  )
}

export default Vieworder
