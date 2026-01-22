import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";

function App() {

    const router = createBrowserRouter([
        {
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
                {
                    path: "/Products",
                    element: <Home/>,
                },
                {
                    path: "/products/:id",
                    element: <PlantDetails/>,
                },
                /*
                {
                    path: "/create",
                    element: <CreateProduct/>,
                },
                {
                    path: "/products/delete/:id",
                    element: <Delete/>,
                },
                {
                    path: "/products/edit/:id",
                    element: <ProductEdit/>,
                },
*/
            ],
        },
    ]);
    return (
        <>

            <RouterProvider router={router}/>


        </>
    )
}

export default App
