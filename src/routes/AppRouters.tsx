import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import Form from '@components/Form'

const CartShop = lazy(() => import('@pages/CartShop'))
const Home = lazy(() => import('@pages/Home'))
const Categories = lazy(() => import('@pages/categories'))
const Aboutus = lazy(() => import('@pages/Aboutus'))
const Woman_store = lazy(() => import('@components/eCommerce/_store/woman_store'))
const Men_store = lazy(() => import('@components/eCommerce/_store/menStore/men_store'))
const MainLayout = lazy(() => import('@layouts/MainLayout/MainLayout'))
const App = lazy(() => import('@pages/App'))
const Error = lazy(() => import('@pages/Error'))
const Shoes_store = lazy(() => import('@components/eCommerce/_store/shoes_store'))
const Babys_store = lazy(() => import('@components/eCommerce/_store/babys_store'))
const Register = lazy(() => import('@pages/register'))
const Products = lazy(() => import('@pages/Products'))
const Designsystem = lazy(() => import('@pages/designsystem'))

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
        // {
        //     path: "Categories",
        //     element: <Categories />,
        // },
        {
            path: "CartShop",
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

        ]
    }
        , {
        path: "/designsystem",
        element: <Designsystem />,
    },
    ]
)

export default function AppRouters() {
    return (
        <RouterProvider router={router} />
    )
}
