import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function Create() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        type: ''
    });
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
            const response = await fetch('http://145.24.237.40:8002/plants/', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)

            })
            const data = await response.json();
            console.log(data);
            // onCreated?.(data);
            navigate("/");

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

export default Create;