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
            <h1>{item.title ?? "niks"}</h1>
            <p>{item.description ?? "niks"}</p>
            <p>{item.type ?? "geen type"}</p>

            <button onClick={handleDelete}>Delete</button>

            <Link to={`/plants/delete/${item.id}`}>edit</Link>

        </>
    );
}

export default PlantDetails;