import TypeProduct from "../components/TypeProduct/TypeProduct";
import Homepage from "../pages/Hompage/Homepage";
import Login from "../pages/Login/Login";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Order from "../pages/Order/Order";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import ProductPage from "../pages/ProductPage/ProductPage";
import Register from "../pages/Register/Register";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
    {
        path:'/',
        page:Homepage,
        isShowHeader: true
    },
    {
        path:'/Order',
        page:Order,
        isShowHeader: true
    },
    // {
    //     path:'/ProductPage',
    //     page:ProductPage,
    //     isShowHeader: true
    // },
    {
        path:'/ProductDetail',
        page:ProductDetail,
        isShowHeader: true
    },
    {
        path:'/Type',
        page:TypeProductPage,
        isShowHeader: true
    },
    {
        path:'/Register',
        page:Register,
        // isShowHeader: true
    },
    {
        path:'/Login',
        page:Login,
       //  isShowHeader: true
       
    },
    {
        path: '*',
        page: NotFoundPage
      }

]