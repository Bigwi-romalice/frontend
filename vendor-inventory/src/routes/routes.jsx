import { createBrowserRouter } from "react-router";
import * as Layouts from '../layouts/index';
import * as Pages from '../pages/index';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layouts.RootLayout/>,
        children:[
            {index:true, element:<Pages.HomePage/>},
            {path:'/shop', element:<Pages.Shop/>},
            {path:'/shop/product/:id', element:<Pages.IndividualProduct />},
            {path:'*', element:<Pages.NotFoundPages/>},
        ]
    },
    {
        path:'auth/',
        element:<Layouts.AuthLayout/>,
        children:[
            {path:'login', index:true,element:<Pages.LoginPage/>},
            {path:'signup',element:<Pages.SignupPage/>},
            {path:'forgot-password',element:<Pages.ForgotPasswordPage/>},
            {path:'reset-password/:token',element:<Pages.ResetPasswordPage/>},
            {path:'two-f-auth',element:<Pages.TwoFactorAuthPage/>},
        ]
    },
    {
        path:'/',
        element:<Layouts.VendorLayout/>,
        children:[
            {path:'vendorDashboard',index:true, element:<Pages.VendorDashboard/>},
            {path:'myShop', element:<Pages.MyShop/>},
            {path:'vendorOrders', element:<Pages.VendorOrders/>},
            {path:'myProducts', element:<Pages.MyProducts/>},
            {path:'shop/:ids', element:<Pages.ShopDetails/>},
            {path:'shop/:id/add-product', element:<Pages.AddProduct/>},
            {path:'notification', element:<Pages.NotificationPage/>},
        ]
    },
    {
        path:'/',
        element:<Layouts.CustomerLayout/>,
        children:[
            {path:'customerDashboard', index:true,element:<Pages.AllOrders/>},
            {path:'customerCart',element:<Pages.Cart/>},
            {path:'customerMsg',element:<Pages.Notifications/>},
            {path:'customerProfile',element:<Pages.Profile/>},
            {path:'/orderDetails/:orderId',element:<Pages.OrderDetail/>}
        ]
    }
])