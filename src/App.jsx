import './App.css'
import React from 'react'
import Vieworder from './Pages/order/Vieworder'
import Orderdetail from './Pages/order/Orderdetail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/dashboard/dashboard'
import Orderlayout from './Components/Orderlayout'
import DashboardLayout from './Components/DashboardLayout'
import Productlayout from './Components/Productlayout'
import Product from "./Pages/product/Product"
import Paymentlayout from './Components/Paymentlayout'
import Payment from './Pages/payment/payment'
import Customerlayout from './Components/Customerlayout'
import Customer from './Pages/customer/customer'
import Settinglayout from './Components/Settinglayout'
import Setting from './Pages/setting/Setting'
import AddProduct from './Pages/product/AddProduct'
import Paymentdetail from './Pages/payment/Paymentdetail'
function App() {
  const router = createBrowserRouter([
        {
          path:"/",
          element:<DashboardLayout/>,
          children:[
            {
              path:"/",
              element:<Dashboard/>
            }
          ]

        },
        //order
        {
          path: "/order", // No leading slash
          element: <Orderlayout/>,
          children: [
            {
              path: "/order", // Nested route without leading slash
              element: <Vieworder />,
            },
            {
              path: "/order/order_detail", // Nested route without leading slash
              element: <Orderdetail />,
            },
          ],
        },
        //product
        {
          path:"/product",
          element:<Productlayout/>,
          children:[
           { 
            path:"/product",
            element:<Product/>
            }, { 
              path:"add_product",
              element:<AddProduct/>
              }
          ]
        },
        //payment
        {
          path:"/payment",
          element:<Paymentlayout/>,
          children:[
            { 
              path:"/payment",
              element:<Payment/>
            },{
              path:'/payment/payment_detail',
              element:<Paymentdetail/>
            }

          ]

        },
        //customer
        {
          path:"/customer",
          element:<Customerlayout/>,
          children:[
            { 
              path:"/customer",
              element:<Customer/>
            }

          ]

        },
        //setting
        {
          path:"/setting",
          element:<Settinglayout/>,
          children:[
            { 
              path:"/setting",
              element:<Setting/>
            }

          ]

        }
      
  ])
  
  return <RouterProvider router={router}/>;
}


export default App
