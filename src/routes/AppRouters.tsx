import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@pages/Home'
import Categories from '@pages/categories'
import Aboutus from '@pages/Aboutus'
import Woman_store from '@components/eCommerce/_store/woman_store'
import Men_store from '@components/eCommerce/_store/men_store'
import MainLayout from '@layouts/MainLayout/MainLayout'
import App from '@pages/App'
import Error from '@pages/Error'
import Shoes_store from '@components/eCommerce/_store/shoes_store'
import Babys_store from '@components/eCommerce/_store/babys_store'

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
            path: "/Categories",
            element: <Categories />,
        },
        {
            path: "Categories/men_store",
            element: <Men_store />,
        },
        {
            path: "Categories/womens_store",
            element: <Woman_store />,
        },
        {
            path: "Categories/shoes_store",
            element: <Shoes_store />,
        },
        {
            path: "Categories/babys_store",
            element: <Babys_store />,
        },
        {
            path: "/App",
            element: <App />,
        },
        {
            path: "/Categories/:id",
            loader: ({ params }) => {
                console.log(typeof (params.id))

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
    ]
)

export default function AppRouters() {
    return (
        <RouterProvider router={router} />
    )
}
