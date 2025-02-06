import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import Login from '@pages/Login'
import App from '@pages/App'
import { SuccessSumit } from '@components/common/loading'
import ProtectedRoute from '@components/Auth/ProtectedRoute'
import MainLayout from '@layouts/MainLayout/MainLayout'
// import Products from '@pages/Products'

// const SuccessSumit = lazy(() => import('@components/common/loading'))
const CartShop = lazy(() => import('@pages/CartShop'))
const Home = lazy(() => import('@pages/Home'))
const Categories = lazy(() => import('@pages/categories'))
const Aboutus = lazy(() => import('@pages/Aboutus'))
// const MainLayout = lazy(() => import('@layouts/MainLayout/MainLayout'))
const Error = lazy(() => import('@pages/Error'))
const Register = lazy(() => import('@pages/register'))
const Products = lazy(() => import('@pages/Products'))
const Designsystem = lazy(() => import('@pages/designsystem'))
const DashBoard = lazy(() => import('@pages/DashBoard'))
const CreateProduct = lazy(() => import('@pages/CreatProduct'))
const Items = lazy(() => import('@pages/Items'))
const Addcolor = lazy(() => import('@pages/Addcolor'))


const router = createBrowserRouter(
    [{
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [{
            index: true,
            element: <Home />,
        },

        {
            path: "/Aboutus",
            element: <Aboutus />,
        },

        {
            path: "/CartShop",
            element: <CartShop />,
        },
        {
            path: "/Categories/:id/:prefix",
            element: <Products />,
            // loader: ({ params }) => {
            //     if (
            //         typeof params.prefix !== "string" ||
            //         !/^[a-z]+$/i.test(params.prefix)
            //     ) {
            //         throw new Response("Bad Request", {
            //             statusText: "Category not found",
            //             status: 400,
            //         });
            //     }
            //     return true;
            // },
        },

        {
            path: "/register",
            element: <Register />,
        },

        {
            path: "/Categories/:id",
            loader: ({ params }) => {

                if (typeof params.id !== "string" || !/^[a-z]+$/i.test(params.id)) { throw new Response("badReques", { statusText: "category not found", status: 400 }) }
                return true
            },
            element: <Categories />,
            // loader: ({ request }) =>
            //   fetch("/api/dashboard.json", {
            //     signal: request.signal,
            //   }),
        },
        {
            path: "/Login",
            element: (
                <Login />
            ),
        },
        {
            path: "/App",
            element: (
                <App />
            )
            ,
        },
        {
            path: "/designsystem",
            element: <Designsystem />,
        },
        {
            path: "/SuccessSumit",
            element: <SuccessSumit />,
        },
        {
            path: "/DashBoard",
            element: <DashBoard />,
        },

        {
            path: "/items/:id/:prefix",
            element: <Items />,
        },
        {
            path: "/items/CreateProduct",
            element: <CreateProduct />,
        },
        {
            path: "/addcolor",
            element: <Addcolor />,
        },
        ]
    }

    ]
)

export default function AppRouters() {
    return (
        <RouterProvider router={router} />
    )
}
