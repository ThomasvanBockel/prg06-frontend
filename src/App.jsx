import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import PlantDetails from "./PlantDetails.jsx";
import PlantEdit from "./PlantEdit.jsx";

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
                    path: "/plants",
                    element: <Home/>,
                },
                {
                    path: "/plants/:id",
                    element: <PlantDetails/>,
                },
                {
                    path: "/plants/edit/:id",
                    element: <PlantEdit/>,
                },

                /*
                {
                    path: "/create",
                    element: <CreateProduct/>,
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
