import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function PlantEdit() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id

    const [item, setItem] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        type: ""
    })
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

    useEffect(() => {
        if (item) {
            setFormData({
                name: item.name,
                description: item.description,
                type: item.type
            });
        }
    }, [item]);


    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await fetch(`http://145.24.237.40:8002/plants/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)

            })
            const data = await response.json();
            if (!response.ok) {
                data.message
            }
            navigate(`/plants/${id}`);

        } catch (error) {
            console.error("Er is een fout opgetreden:", error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border"
                    />
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}

                        className="border"
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="border"
                    />
                </div>
                <button type="submit">Verzenden</button>
            </form>
        </>
    );
}

export default PlantEdit;