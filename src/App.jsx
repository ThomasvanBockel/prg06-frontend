import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import PlantDetails from "./PlantDetails.jsx";

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
                    path: "/lants",
                    element: <Home/>,
                },
                {
                    path: "/plants/:id",
                    element: <PlantDetails/>,
                },
                /*
                {
                    path: "/create",
                    element: <CreateProduct/>,
                },
                {
                    path: "/plants/delete/:id",
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
