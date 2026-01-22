import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";

function PlantDetails() {
    const params = useParams();

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

    return (
        <>
            <h1>{item.title ?? "niks"}</h1>
            <p>{item.description ?? "niks"}</p>
            <p>{item.type ?? "geen type"}</p>

            <Link to={`/plants/delete/${item.id}`}>Delete</Link>

            <Link to={`/plants/edit/${item.id}`}>Edit</Link>
        </>
    );
}

export default PlantDetails;