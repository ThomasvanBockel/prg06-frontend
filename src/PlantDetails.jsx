import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function PlantDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState([]);
    const id = params.id;
    const loadSpot = async () => {
        try {
            const result = await fetch(`http://145.24.237.40:8002/plants/${id}`, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            const data = await result.json()
            if (!result.ok) {
                throw Error(data.message)
            }
            setItem(data);
            console.log(data)

        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        loadSpot()
    }, []);

    const handleDelete = async () => {
        try {
            console.log("delete")
            await fetch(`http://145.24.237.40:8002/plants/${id}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json"
                },
            })
            navigate("/")
        } catch (error) {
            console.error("Er is een fout opgetreden:", error);
        }
    }


    return (
        <>
            <div
                className="flex flex-col items-center mt-5 border-black border border-solid text-center    text-black p-2">

                <h1 className="text-gray-700 text-lg font-medium">{item.name ?? "niks"}</h1>
                <p className="text-gray-500 mb-4">{item.description ?? "niks"}</p>
                <p className="text-gray-500 mb-4">{item.type ?? "geen type"}</p>
                <Link
                    className="px-4 py-2 border-2 border-black rounded hover:bg-black hover:text-white transition mr-2"
                    to={`/plants/edit/${item.id}`}>edit</Link>

                <button
                    className=" mt-2 px-4 py-2 border-2 border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition"
                    onClick={handleDelete}>Delete
                </button>

            </div>
        </>
    );
}

export default PlantDetails;