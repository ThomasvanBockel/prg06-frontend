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
                <div className="flex flex-col mt-5">
                    <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className=" border-4 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"

                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}

                        className="border-4 border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="type">Type:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="border-4 border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
                <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                        type="submit">Verzenden
                </button>
            </form>

        </>
    );
}

export default Create;